const express = require("express");
const {registerUser, getInvite, getUsers, setPassword, verifyUser, loginUser, updateUser, getUser, calendarUser, viewCalendar, calendarDelete, updateCalendar} = require('../controllers/userController')
const {auth} = require('../middleware/auth')
const router = express.Router();
router.route("/register").post(registerUser);
router.route("/admInvite").post(getInvite);
router.route("/admlogin").get(getUsers);
router.route("/pass").post(setPassword);
router.route("/admverify").post(verifyUser);
router.route("/userlogin").post(loginUser);
router.route('/update').post(updateUser);
router.route('/getUser').get(auth, getUser);
router.route('/schedule').post(calendarUser);
router.route('/getCalendar').get(viewCalendar);
router.route('/getCalendar').post(updateCalendar);
router.route('/getCalendar/:id').delete(calendarDelete);
module.exports = router;