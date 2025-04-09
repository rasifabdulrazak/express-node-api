const successResponse = (res, message = 'Success', statusCode = 200,data=null) => {
    const response = {
        status: 'success',
        statusCode:statusCode,
        message,
        ...(data && { data }), // only include `data` key if `data` is truthy
    };

    return res.status(statusCode).json(response);
}

const errorResponse = (res, message = 'Error', statusCode = 500,errors=null) => {
    const response = {
        status: 'error',
        statusCode:statusCode,
        message : message,
        ...(errors && {errors}),
    }
    return res.status(statusCode).json(response);
}

module.exports = {
    successResponse,
    errorResponse
}