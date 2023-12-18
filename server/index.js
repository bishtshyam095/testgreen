const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const SwaggerDocs = require("swagger-jsdoc");
const SwaggerUIExpress = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const options  = require('./SwaggerConfig.js')
const routes = require('./routes/userRoute.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/jwt_auth');
app.use('/', routes);

//swagger
const swaggerSpec = swaggerJSDoc(options)
app.use('/swagger', SwaggerUIExpress.serve, SwaggerUIExpress.setup(swaggerSpec));


app.listen(3001, () => {
    console.log("server http://localhost:3001")
})