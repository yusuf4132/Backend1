var express=require("express");
var router=express.Router();
var ctrlVenues=require("../controllers/VenueController");
var ctrlComment=require("../controllers/CommentController");

router.route("/venue").get(ctrlVenues.listVenues).post(ctrlVenues.addVenue);
router.route("/venue/:venueid").get(ctrlVenues.getVenue).put(ctrlVenues.updateVenue).delete(ctrlVenues.deleteVenue);

router.route("/venue/:venueid/comments").post(ctrlComment.addComment)
router.route("/venue/:venueid/comments/:commentid").get(ctrlComment.getComment).put(ctrlComment.updateComment).delete(ctrlComment.deleteComment);

module.exports=router;