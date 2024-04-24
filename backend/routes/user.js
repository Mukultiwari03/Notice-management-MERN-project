const express = require('express');
const router = express.Router();

const {login,signup} = require('../controllers/Loginsignup');

// for user login and signup
router.post('/login',login);
router.post('/signup',signup);

// notice
const {createNotice, getNotices, getNoticeByDate,getNoticeByBatch} = require('../controllers/Noticecontroller');
router.post('/createNotice', createNotice);
router.get('/getNotices', getNotices);
router.post('/getNoticeByDate', getNoticeByDate);
router.post('/getNoticeByBatch', getNoticeByBatch);

module.exports = router;