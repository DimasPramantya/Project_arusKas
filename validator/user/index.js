const { userRegistSchema, userLoginSchema } = require("./schema");

function validateUserRegistPayload(payload){
    const validationResult = userRegistSchema.validate(payload);
    if(validationResult.error){
        throw new Error(validationResult.error.message);
    }
}

function validateUserLoginPayload(payload){
    const validationResult = userLoginSchema.validate(payload);
    if(validationResult.error){
        throw new Error(validationResult.error.message)
    }
}

module.exports = {validateUserRegistPayload, validateUserLoginPayload}