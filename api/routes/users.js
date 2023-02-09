const express = require("express");
const { getUser } = require("../controllers/user.js");

const router = express.Router()

router.get("/test",(req,res)=> {
    res.send("it works!")
})

module.exports = router;