//Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();

const {authRouter,bannerRouter,categoryRouter,subCategoryRouter} = require('./routers');
const connectMongodb = require('./database/db.js');
const {errorHandler} = require('./middlewares');
const notFoundController = require('./controllers/notFoundController.js');
const morgan = require('morgan');

const app = express();



//Connect to Database
connectMongodb();

//third-party middleware
app.use(express.json({limit:"500mb"}))
app.use(bodyParser.urlencoded({limit: "500mb",extended: true}))
app.use(morgan("dev"))


//Route Seaction
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/banner',bannerRouter);
app.use('/api/v1/category',categoryRouter);
app.use('/api/v1/subCategory',subCategoryRouter);

//not found Route
app.use(notFoundController);

//error handler middleware
app.use(errorHandler);


module.exports = app;