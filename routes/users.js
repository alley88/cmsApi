const express = require('express');
const router = express.Router();
const userController = require("../controller/user");
const upload = require("../utils/multer")
//登录
router.post('/login', userController.login);
//注册
router.post('/register', userController.register);
//修改用户信息
router.post('/updateInfo', userController.modifyUserInfo);

//修改头像
//var cpUpload = upload.fields([{ name: 'userPic', maxCount: 1 }]);
//router.post('/updateUserPic',cpUpload,userController.modifyUserPic);
router.post('/updateUserPic',userController.modifyUserPic);
module.exports = router;
