const { adminLoginSchema } = require("./schema");

function validateAdminLoginPayload(payload){
    const validationResult = adminLoginSchema(payload);
    if(validationResult.error){
        throw new Error(validationResult.error.message)
    }
}