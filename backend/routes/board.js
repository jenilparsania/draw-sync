const express = require("express");
const router = express.Router;

const boardRouter = router();
const {boardModel} = require("../db");

boardRouter.post("/",async function(req,res){
    const {title,elements,userId} = req.body;
    
})
