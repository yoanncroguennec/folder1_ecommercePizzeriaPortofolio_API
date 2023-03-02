const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
// SERVER MIDDLEWARES EERORS
const errorMiddleware = require("../server/middlewares/errors/errors")

// Create server, it's the variable "app" 
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());
app.use(cors())

// Middleware to handle errors (Try/Catch)
app.use(errorMiddleware)

// ROUTES
app.get("/", (req, res) => {
  res.json({message : "Full Project 1 - API Ecommerce MERN - Pizzeria"});
});
app.use('/api/auth', require('../server/routes/Auth.Routes'))
app.use('/api/users', require('../server/routes/Users.Routes'))
app.use('/api/products', require('../server/routes/Products.Routes'))
app.use('/api/restaurants', require('../server/routes/Restaurants.Routes'))


module.exports = app