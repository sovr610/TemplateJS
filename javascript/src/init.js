var helmet = require('helmet');
var compression = require('compression');
var express = require('express');
var path = require('path');
var pino = require('express-pino-logger')();
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');