var mongoose=require("mongoose");
var venue=mongoose.model("venue");

const createResponse=function(res,status,content){
    res.status(status).json(content);
}

const listVenues=function(req,res){
    createResponse(res, 200, { status: "Başarılı" })
}

const addVenue=function(req,res){
    createResponse(res,200,{status:"Başarılı"});
}

const getVenue=async function(req,res){
    try{
        await Venue.findById(req.params.venueid).exec().then(function(venue){
            createResponse(res,200,venue);
        });
    }catch{error}{
        createResponse(res,404,{status:"Böyle Bir Mekan Yok"});
    }
}

const updateVenue=function(req,res){
    createResponse(res,200,{status:"Başarılı"});
}

const deleteVenue=function(req,res){
    createResponse(res,200,{status:"Başarılı"});
}

module.exports={
    listVenues,
    addVenue,
    updateVenue,
    deleteVenue,
    getVenue
}