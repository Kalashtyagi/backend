const express = require("express");
const router = express.Router();
const {getAllUser,deleteUser,postUser,putUser} = require('../Controller/userController')

router.route('/getAllUser').get(getAllUser);

router.route('/deleteUser/:id').delete(deleteUser);

router.route('/postUser').post(postUser);

router.route('/putUser').put(putUser);

module.exports = router;