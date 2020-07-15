const Route = require('express').Router()

const fileUpload = require('./Controller');
const multerConfig = require('./utils/multer');

Route.post('/upload', multerConfig, fileUpload);

module.exports = Route