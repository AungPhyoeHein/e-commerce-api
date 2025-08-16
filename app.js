//Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();

const {authRouter} = require('./routers');
const bannerRouter = require('./routers/bannerRouter.js');
const categoryRouter = require('./routers/categoryRouter.js');
const connectMongodb = require('./database/db.js');

const app = express();

app.use(express.json({limit:"500mb"}))
app.use(bodyParser.urlencoded({limit: "500mb",extended: true}))

//Connect to Database
connectMongodb();



app.use('/api/v1/auth',authRouter);
app.use('/api/v1/banner',bannerRouter);
app.use('/api/v1/category',categoryRouter);


// //Run Server
// app.listen(process.env.PORT,"0.0.0.0",() => {
//     console.log(`Server is running at PORT ${process.env.PORT}`);
// });

module.exports = app;