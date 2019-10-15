//书籍列表
let booksListPath = (free,finish,group,sortId,page,pageSize)=>{
    let url = `https://app2.motie.com/category/detail?free=${free}&finish=${finish}&group=${group}&sortId=${sortId?sortId:""}&page=${page}&pageSize=${pageSize}`;
    return url;
}
//书籍详情
let booksDetailPath = (booksId)=>`https://app2.motie.com/books/${booksId}/detail`

//首页数据
let homePath = (id)=>`https://app2.motie.com/h5/channels/${id}`

//排行


let rankingPath = (rankType,page)=>`https://app2.motie.com/ranking?rankType=${rankType}&sex=1&pageNo=${page}&siteId=99&timeLimit=4&group=1&pageSize=10`

module.exports = {
    booksListPath,
    booksDetailPath,
    homePath,
    rankingPath
}