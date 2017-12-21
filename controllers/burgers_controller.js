var express = require("express");
var burger = require("../models/burger.js");

//create app router
var router = express.Router();

//create routes and set up logic where required
//all routes lead to /index
router.get("/",function(req,res){
	res.redirect("/index")
})
//get/selec route
router.get("/index", function(req, res) { //<<<<<< break down
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// //post/insert route
// router.post("/index", function(req, res) {
// 	burger.insertOne([""]) //<<<<<<<<<<<< ????
// });

// //update/put route
// router.put("/index", function(req, res) {
// 	burger.updateOne(//<<<<<< ???)
// });


//export router
module.exports = router;