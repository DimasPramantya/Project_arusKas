const bcrypt = require('bcrypt');
const {User, Validation, Role, Payment, PaymentDetail} = require('../models/index');
const { validateUserRegistPayload, validateUserLoginPayload } = require('../validator/user');

module.exports = {
    handlerPostRegistUser: async (req,res,next)=>{
        try {
            validateUserRegistPayload(req.body)
            const { fullName, email, password, division} = req.body;

            const emailCheck = await User.findOne({
                where: {
                    email: email
                }
            })

            if (emailCheck) {
                throw new Error(`${emailCheck.email} has been registered`);
            }

            const hashPassword = await bcrypt.hash(password, 8);
            const role = await Role.findOne({
                where: {
                    roleName: 'member'
                }
            })
            const data = await User.create({
                password: hashPassword, fullName, email, division, idRole: role.id,
            });
            res.status(200).json({
                status: 'Success',
                message: 'Successfully create user',
                data: {
                    id: data.id,
                    fullName: data.fullName,
                    division: data.division
                }
            })
        } catch (error) {
            next(error);
        }
    },
    handlerDeleteUser: async (req,res,next) => {
        try {
            const { id } = req.params;
            const target = await User.findOne({
                where: {
                    id: id
                }
            })
            if(target===null){
                throw new Error(`user with id ${id} don't exist`)
            }
            target.destroy();   
        } catch (error) {
            next(error)
        }
    },
    handlerLoginUser: async (req,res,next)=>{
        try {
            const {email,password} = req.body;
            validateUserLoginPayload(email,password);
            const target = await User.findOne({
                where:{
                    email
                }
            })
            if(target===null){
                throw new Error('User not found');
            }
            const role = await Role.findOne({
                where:{
                    id: target.id
                }
            })
            if(role.roleName === 'admin'){
                next();
            }
            const validPassword = bcrypt.compareSync(password,target.password);
            if(!validPassword){
                throw new Error('invalid password')
            }
            res.json({
                fullName: target.fullName,
                division: target.division,  
            })
        } catch (error) {
            next(error)
        }
    }
}
