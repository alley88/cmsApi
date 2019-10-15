const userModel = require("../model/user");
const crypto = require('crypto');
const tokenUtils = require("../utils/token")

//登录
const login = async (req, res, next) => {
    let { userId, password } = req.body;
    let data = await userModel.findUserInfo({ userId });
    //判断用户名是否存在
    if (data) {
        const hash = crypto.createHash('sha256');
        hash.update(password);
        if (data.password == hash.digest('hex')) {
            //创建token
            let token = tokenUtils.getToken({ username: data.username })
            res.cookie("token", token);

            res.json({
                code: 200,
                errMsg: "",
                data: {
                    code: 1,
                    info: {
                        msg: "登录成功",
                        username: data.username,
                        userPic: data.userPic
                    },
                    token: token
                }
            })
        } else {
            //密码错误
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    code: 2,
                    info: {
                        msg: "密码错误"
                    }
                }
            })
        }
    } else {
        //用户名不存在
        res.json({
            code: 200,
            errMsg: "",
            data: {
                code: 0,
                info: {
                    msg: "用户名不存在"
                }
            }
        })
    }
}

//注册
const register = async (req, res) => {
    let { userId, password } = req.body;
    let data = await userModel.findUserInfo({ userId });
    //判断用户名是否重复
    if (data) {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                code: 2,
                info: {
                    msg: "用户名重复"
                }
            }
        })
    } else {
        //保存用户信息
        const hash = crypto.createHash('sha256');
        hash.update(password);
        //hash.digest('hex');


        //用户注册时间
        let registerTime = new Date().getTime();
        //随机用户名
        let username = "用户:" + parseInt(100 + Math.random() * 1000);
        //默认用户头像
        let userPic = "http://img0.bdstatic.com/static/searchresult/img/logo-2X_32a8193.png"

        let data = userModel.saveUserInfo({
            userId,
            password: hash.digest('hex'),
            status: true,
            registerTime,
            username,
            userPic
        })
        if (data) {
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    code: 1,
                    info: {
                        msg: "注册成功"
                    }
                }
            })
        }

    }
}


//修改用户名/密码
const modifyUserInfo = async (req, res) => {
    let { userId, password, username } = req.body;

    //修改密码
    if (userId && password) {
        const hash = crypto.createHash('sha256');
        hash.update(password);
        let data = await userModel.modifyUserInfo({ userId }, {password: hash.digest('hex') })
        
        if (data) {
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: {
                        msg: "修改成功",
                    }
                }
            })
        }

    } else if (userId && username) {
        console.log(username)
        //修改用户名
        let data = await userModel.modifyUserInfo({ userId }, {username})
        if (data) {
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: {
                        msg: "修改成功",
                        username
                    }
                }
            })
        }

    } else {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "请正确填写信息"
            }
        })
    }


}

const upload = require("../utils/multer")
var cpUpload = upload.fields([{ name: 'userPic', maxCount: 1 }]);
//修改头像
const modifyUserPic = (req, res) => {
    cpUpload(req, res, async (err) => {
        if (req.files.userPic) {
            let { userId } = req.body;
            let urlPath = "http://localhost:3000/images/" + req.files.userPic[0].filename;

            let data = await userModel.modifyUserInfo({ userId }, { userPic: urlPath })

            if (data) {
                res.json({
                    code: 200,
                    errMsg: "",
                    data: {
                        info: "修改成功",
                        urlPic: urlPath
                    }
                })
            }



        } else {
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: "修改失败"
                }
            })
        }

    })
}


module.exports = {
    login,
    register,
    modifyUserInfo,
    modifyUserPic
}