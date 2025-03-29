const errorHandler = (err, req, res, next) => {
    console.error(err);
  
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
  
    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = Object.values(err.errors).map((val) => val.message).join(', ');
    }
  
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  export default errorHandler;