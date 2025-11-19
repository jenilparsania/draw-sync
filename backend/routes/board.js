const express = require("express");
const router = express.Router;

const boardRouter = router();
const {boardModel} = require("../db");

boardRouter.post("/",async function(req,res){
    const {title,elements,userId} = req.body;
    const newObject = {
            title : title,
            elements:elements,
            userId :userId,
        }

    try{
        await boardModel.create({
            title : title,
            elements:elements,
            userId :userId,
        });

        console.log(newObject);
        

    }catch(e){
        res.json({
            e
        });
    }

    res.json({
        message : "added to database"
    })
    
})

boardRouter.get("/:id",async function(req,res){

    try {
        const board = await boardModel.findById(req.params.id);
        if(!board){
            return res.status(404).json({error : "Not found"});
        }
        res.json(board);
    } catch (error) {
       if(error.name === "CastError"){
        return res.status(404).json({error : "Invalid Board Id"});
       }
       console.error(error) 
    }
        
})

boardRouter.get("/",async function(req,res){
    const fullBoard = await boardModel.find();

    res.status(200).json(fullBoard);


})


boardRouter.put("/:id",async function(req,res){
    const id = req.params.id;
    const {title,userId,elements} = req.body

    // in the updateOne function , filter is passed as the first argument to look for the correct object in the database

    try{
        await boardModel.updateOne({
            _id : id
        },{
            title,
            elements,
            userId
        });

        res.json({
            message : "board updated"
        })
    }catch(e){
        e
    }
});

boardRouter.delete("/:id",async function(req,res){
    const id = req.params.id

    try{
        await boardModel.deleteOne({
            _id:id
        });

        res.json({
            message : "object deleted"
        })
    
    }catch(e){
        e
    }
})
module.exports = {
    boardRouter:boardRouter
}