const mongoose = require("../utils/database");


const User = mongoose.model("user",{
    userId:String,
    password:String,
    username:String,
    status:Boolean,
    registerTime:Number,
    authId:Number,
    userPic:String
})

//查
const findUserInfo = async (userInfo)=>{
     let data = await User.findOne(userInfo);
     return data;
   
}

//改
const modifyUserInfo = async (userId,userInfo)=>{
    return data = await User.update(userId,{$set:userInfo});
}

//增
const saveUserInfo = async (userInfo,cb)=>{
    let user = new User(userInfo);
    let data = user.save();
    return data;
}

module.exports = {
    findUserInfo,
    modifyUserInfo,
    saveUserInfo
}