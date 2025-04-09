
const internalServerError = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
      message: 'Internal Server Error',
      statusCode: 500,
      statusText: 'Internal Server Error',
    });
  };

  const notFoundError = (req, res, next) => {
    res.status(404).json({
      message: 'Route not found',
      statusCode: 404,
      statusText: 'Not Found',
    });
  };
  
  
  
  module.exports = {internalServerError,notFoundError};