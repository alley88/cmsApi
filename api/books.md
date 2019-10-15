# 书籍列表
- **接口地址**: /books/booksList
- **请求类型**: POST
- **请求参数**
    page:页数 1
    
    pageSize:每页的条目数 10

    free:价格
        0:全部
        1:免费
        2:付费

    group:频道
        1:男频
        2:女频
        3:出版

    finish:书籍状态
        0:全部
        1:完结
        2:连载
    
    sortId:分类
        全部:"",
        现在都市:1000010
        仙侠武侠:1000012
        奇幻修真:1000011
        科幻游戏:1000013
        悬疑推理:1000014
        军事战争:1000015
        

# 书籍详情
- **接口地址**: /books/detail
- **请求类型**: GET
- **请求参数**
    booksId:书籍ID


# 排行接口
- **接口地址**:/books/rankType
- **请求类型**: GET
- **接口参数**
    rankType:排行Id

    sex:性别
        男生:1
        女生:2

    pageNo:1   页码

    siteId:99  

    timeLimit:4

    group:1

    pageSize:每页显示的条目数  默认10