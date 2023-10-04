const express = require("express");
const authenticate = require("../middleware/authenticate.js");
const router = express.Router();
const ratingController = require("../services/rating.service.js");

router.post("/create",authenticate,ratingController.createRating);
router.put("/product/:productId",authenticate,ratingController.getAllRating);


module.exports=router;