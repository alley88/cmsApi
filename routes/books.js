var express = require('express');
var router = express.Router();
const booksController = require("../controller/books")
//书籍列表
router.post('/booksList', booksController.booksList);

//书籍详情
router.get('/detail', booksController.booksDetail);

//排行

router.get('/ranking', booksController.booksRanking);

module.exports = router;