require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const cors = require('cors');
const authRouter = require('../src/routes/authRoute');
const {notFoundError, internalServerError} = require('../src/middlewares/errorHandler');
const { successResponse } = require('../src/core/utils/responses');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
 
app.get('/',(req,res)=>{
    successResponse(res, message='Server is running', statusCode=200)
})

app.use('/api/auth',authRouter)

app.use(notFoundError)
app.use(internalServerError)

module.exports = app;