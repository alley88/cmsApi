const axios = require("../utils/request")
const apiPath = require("../api")


//书籍列表
const booksList =async (req,res)=>{
    let {free,finish,group,sortId,page,pageSize} = req.body;
    let data = await axios.post(apiPath.booksListPath(free,finish,group,sortId,page,pageSize),{free,finish,group,sortId,page,pageSize})
    if(data.data.bookList){
        res.json({
            code:200,
            errMsg:"",
            data:{
                bookList:data.data.bookList,
                info:"请求成功"
            }
        })
    }else{
        res.json({
            code:200,
            errMsg:"",
            data:{
                bookList:[],
                info:"参数错误"
            }
        })
    }
}

//书籍详情
const booksDetail = async (req,res)=>{
    let {booksId} = req.query;
    let data = await axios.get(apiPath.booksDetailPath(booksId));
    if(data.data){
        res.json({
            code:200,
            errMsg:"",
            data:{
                detail:data.data,
                info:"请求成功"
            }
        })
    }else{
        res.json({
            code:200,
            errMsg:"",
            data:{
                info:"参数错误"
            }
        })
    }
}

//书籍排行
const booksRanking = async (req,res)=>{
    let {rankType,page} = req.query;
    let data = await axios.get(apiPath.rankingPath(rankType,page));
    if(data.data.bookList){
        res.json({
            code:200,
            errMsg:"",
            data:{
                list:data.data
            }
        })
    }else{
        res.json({
            code:200,
            errMsg:"",
            data:{
                info:"参数错误"
            }
        })
    }
}

module.exports = {
    booksList,
    booksDetail,
    booksRanking
}