export class AppError extends Error {
	constructor(message, statusCode) {
		super(message);

		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

const handleResponse = ({
  res,
  statusCode = 200,
  msg = "Success",
  data = {},
  result = 1,
}) => {
  res.status(statusCode).json({
    result,
    msg,
    data,
  });
};

const handleError = ({
  res,
  statusCode,
  status,
  errMsg,
  err,
  stack
}) => {
  res.status(statusCode).json({
    status: status,
    msg: errMsg,
    error: err,
    stack: stack
  });
};

export { handleResponse, handleError };


