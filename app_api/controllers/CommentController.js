var mongoose=require("mongoose");
var venue=mongoose.model("venue");

const createResponse=function(res,status,content){
    res.status(status).json(content);
}

const addComment=function(req,res){
    createResponse(res,200,{status:"Başarılı"});
}

const getComment=function(req,res){
    createResponse(res,200,{status:"Başarılı"});
}

const updateComment=function(req,res){
    createResponse(res,200,{status:"Başarılı"});
}

const deleteComment=function(req,res){
    createResponse(res,200,{status:"Başarılı"});
}

module.exports={
    addComment,
    updateComment,
    deleteComment,
    getComment
}