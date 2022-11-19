const Joi = require('joi')

const userRegistSchema = Joi.object({
    fullName: Joi.string().min(4).max(50).required(),
    email: Joi.string().email({minDomainSegments:2, tlds:{allow: ['com']}}).required(),
    division: Joi.string().required(),
    password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,10}$/)).message('Password must contain eight to ten characters, at least one uppercase letter, one lowercase letter and one number').required(),
    confPass: Joi.equal(Joi.ref('password')).options({ messages: { 'any.only': 'confirm password does not match' } })
}) 

const userLoginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
    password: Joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,10}$"))
})

module.exports = {userLoginSchema,userRegistSchema}