const express = require('express');
const router = express.Router();
const {register, Login, GetStudent, AddaMarks, verifyOtp, GetAllStudent, myProfile, GetStdInfo, findTopper} = require('../controller/studentController')

router.route('/register').post(register);
router.route('/login').post(Login);
router.route('/me').get(myProfile);
router.route('/marks/:id').put(AddaMarks);
router.route('/verify').post(verifyOtp);
router.route('/admin/all').get(GetAllStudent);
router.route('/student/:id').get(GetStdInfo);
router.route('/student').get(findTopper);


module.exports = router;
