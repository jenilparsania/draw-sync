const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const boardSchema = new mongoose.Schema({
    title : {type: String, default : "Untitled"},
    elements : {type : Array , default : []}, // excalidraw's json format
    userId : {type : String}, // temp : localStorage userId
    isPublic : {type : Boolean,default : false},
    lastSaved : {type : Date, default:Date.now}
});

const boardModel = mongoose.model("boards",boardSchema);

module.exports = {boardModel}