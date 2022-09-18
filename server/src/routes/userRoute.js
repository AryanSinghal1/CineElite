const express = require("express");
const {registerUser, getInvite, getUsers, setPassword, verifyUser, loginUser, updateUser, setHeaders} = require('../controllers/userController')
const router = express.Router();
router.route("/register").post(registerUser);
router.route("/admInvite").post(getInvite);
router.route("/admlogin").get(getUsers);
router.route("/pass").post(setPassword);
router.route("/admverify").post(verifyUser);
router.route("/userlogin").post(loginUser);
router.route('/update').post(updateUser);
router.route('/*').all(setHeaders);
module.exports = router;