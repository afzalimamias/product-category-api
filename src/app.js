import express from "express";

import indexRouter from "./components/indexRouter.js";
import globalErrorHandler from "./helper/globalErrorHandler.js";
import { AppError } from "./helper/responseHandler.js";

const app = express();

app.use(express.json()); //application/json

//Setting CORS Headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Use index route
app.use(indexRouter);

//Return 404 if url is not found
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//Handle Error
app.use(globalErrorHandler);

export default app;
