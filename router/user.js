const express = require("express")
const app = express();
const path = require("path")
const order = require("./order")
const fs = require("fs")
const database = require("../db");

const router = express.Router();
app.use(express.urlencoded())


router.get("/",(req,res)=>{
    console.log(req.session)
    res.render("public/dashboard",{"message":req.session.name})
})

router.get("/question",(req,res)=>{
    if(req.session.qn == 4) req.session.attempt = req.session.attempt + 1;
    if(req.session.qn == 7) res.send("test over")
    let data = fs.readFileSync(path.join(__dirname,"../dummydata.json"));
    let parsedata = JSON.parse(data)
    req.session.qn = req.session.qn + 1;
    res.render("public/question",{"message":parsedata[req.session.qn],"vissible":req.session.qn})
})

router.get("/attempts",(req,res)=>{
    res.render("public/question",{"message":attempt})
})

router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

module.exports = router