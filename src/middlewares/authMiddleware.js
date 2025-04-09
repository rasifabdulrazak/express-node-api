const { validationResult } = require('express-validator');
const {errorResponse} = require('../core/utils/responses');
const { verifyToken } = require('../core/utils/jwt');

const validateFields = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    errorResponse(res,message='Validation Error',statusCode=400,errors=validationErrors.errors)
  }
  next();
};

const validateToken = (req, res, next) => {
    try {
      const token = req.headers['Authorization'];
  
      if (!token) {
        return errorResponse(res, 'Unauthorized - Token not provided', 401);
      }
  
      const decoded = verifyToken(token);
      if (!decoded) {
        return errorResponse(res, 'Unauthorized - Invalid token', 401);
      }
  
      req.user = req.user || {};
      req.user.id = decoded.userId;
  
      next();
    } catch (error) {
      console.error('Token validation error:', error);
      return errorResponse(res, 'Unauthorized - Token validation failed', 401);
    }
  };

module.exports = {validateFields,validateToken};