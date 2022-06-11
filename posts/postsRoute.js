const router = require("express").Router()
const isAuth = require("../utils/isAuth")
const { validatorCreatePost } = require("../validators/posts")
const {addOne, listAll} = require("./postsController")

router.get("/", listAll)

router.post("/", isAuth, validatorCreatePost, addOne)

module.exports = router