const express = require("express")
const app = express()

const router = express.Router()

router.get("/",(req,res)=>{
    res.send("you have no orders")
})


router.get("/:id",(req,res)=>{
    res.send("your orders are "+ req.params.id)
})





module.exports = router;
