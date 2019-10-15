const api = require("../api")
const axios = require("../utils/request")
const homeData = async (req,res)=>{
    let {id} = req.query;
    let data = await axios.get(api.homePath(id),{
        headers:{
            Accept: "application/json, text/plain, */*",
            Origin: "http://m.motie.com",
            os: "wap",
            Referer: "http://m.motie.com/channel/106"
        }
    });

    if(data.items){
        var arr = [];
        for(var i=0;i<5;i++){
            var obj = {};
            obj.name = data.items[i].name;
            obj.list = [];
            arr.push(obj)
        }
        //banner
        for(var i=0;i<data.items[0].dataSourceList.length;i++){
            arr[0].list.push(JSON.parse(data.items[0].dataSourceList[i].dataList)[0])
        }

        arr[2].list = JSON.parse(data.items[2].dataSourceList[0].dataList);
        arr[3].list = JSON.parse(data.items[3].dataSourceList[0].dataList);
        arr[4].list = JSON.parse(data.items[4].dataSourceList[0].dataList);
        res.json({
            code:200,
            errMsg:"",
            data:{
                list:arr,
                info:"请求成功"
            }
        })
    }else{
        res.json({
            code:200,
            errMsg:"",
            data:{
                items:[],
                info:"参数错误"
            }
        })
    }
}

module.exports = {
    homeData
}