const mongoose = require("mongoose");

const db_name = "mongodb://127.0.0.1:27017/cmsapi"

mongoose.connect(db_name,(err)=>{
   if(!err){
       console.log("链接成功")
   }
});

module.exports = mongoose;



