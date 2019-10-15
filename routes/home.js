const express = require("express");
const router = express.Router();
const homeController = require("../controller/home")

//首页数据
router.get("/info",homeController.homeData);

module.exports = router;