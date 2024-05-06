const express = require("express");
const router = express.Router();
const getAdmin = require('../Controller/adminController')


router.route('/getAdmin').get(getAdmin);


module.exports = router;