const express = require('express')
const _ = express.Router()
const registrationController = require('../../../controllers/registrationController')
const secureapi = require('../../../middlewares/secureaoi')

_.post('/registration',secureapi,registrationController)

module.exports=_;