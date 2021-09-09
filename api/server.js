//Imports
const express = require('express');
const SchemeRouter = require('./schemes/scheme-router.js');


//Calling Middleware
const server = express();


//Instance Of Express App
server.use(express.json());


//Consuming Router
server.use('/api/schemes', SchemeRouter);


//Error-Handling Is In 'scheme-router.js'
//Exports; Exposing
module.exports = server;