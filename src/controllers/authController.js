const User = require('../db/models').User;
const { sendMail } = require('../core/utils/emails');
const { generateJWTToken } = require('../core/utils/jwt');
const {successResponse,errorResponse} = require('../core/utils/responses');
const {getUserByMail,createUser} = require('../services/userServices');

const userSignup = async (req,res)=>{
    try {
    const userData = req.body;
    const user = await getUserByMail(userData.email);
    if (user) {
        errorResponse(res, 'User already exists', 409);
    }

    const newUser = await createUser(userData);

    if (!newUser) {
        errorResponse(res, 'User creation failed', 500);
    }
    successResponse(res, 'User created successfully', 201,data=null,);
    // any background task can be done here
        
    } catch (error) {
        errorResponse(res, message='Internal server error', 500);
        
    }
    
}

const userLogin = async (req,res)=>{
    try {
        const userData = req.body;
        const user = await getUserByMail(userData.email);
        if (!user){
            errorResponse(res,message='User not found',statusCode=404);
        }
        const passwordMatch = await user.comparePassword(userData.password);
        if (!passwordMatch) {
            errorResponse(res,message='Invalid credentials',statusCode=401);
        }
        const token = generateJWTToken(user);
        successResponse(res,message='Login successful',statusCode=200,data={token:token});
    } catch (error) {
        console.error('Login error:', error);
        errorResponse(res,message='Internal server error',statusCode=500);  
    }
}

module.exports = {userSignup,userLogin};