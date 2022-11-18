const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
const bodyParser = require('body-parser');
const exp = require('constants');
const userRouter = require('./route/user');
const customErrHandler = require('./middleware/customErrorHandler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter)
app.use(customErrHandler)
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})

