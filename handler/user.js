const bcrypt = require('bcrypt');
const {User, Validation, Role, Payment, PaymentDetail} = require('../models/index')

module.exports = {
    handlerPostRegistUser: async (req,res,next)=>{
        try {
            const { fullName, email, password, division, confPass } = req.body;

            if (password !== confPass) {
                throw new Error("password and confirm password doesn't match");
            }

            const emailCheck = await User.findOne({
                where: {
                    email: email
                }
            })

            if (emailCheck !== null) {
                throw new Error(`${emailCheck.email} has been registered`);
            }

            const hashPassword = await bcrypt.hash(password, 10);
            const role = await Role.findOne({
                where: {
                    roleName: 'member'
                }
            })
            const data = await User.create({
                password: hashPassword, fullName, email, division, idRole: role.id,
            });
            res.send(data)
        //send html page
        //res.sendFile()
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
    }
}