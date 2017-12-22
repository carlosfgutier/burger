var express = require("express");
var burger = require("../models/burger.js");
var orm = require("../config/orm.js");

//create app router
var router = express.Router();

//create routes and set up logic where required
//all routes lead to /index
router.get("/",function(req,res){
	res.redirect("/index")
})
//get/selec route
router.get("/index/", function(req, res) { 
	burger.selectAll( function(err,data) {
		if(err) {
			res.send(500)
		}
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

//post/insert route
router.post("/api/addBurger", function(req, res) {
	console.log(req.body);
	var burger = {
		burgerName: req.body.burgerName,
		timestamp: Date.now()
	}
	burger.insertOne(burger.burgerName, burger.timestamp, function(err, data) {

		orm.selectAll('burger', function(err, data) {


		})
		res.render()
	})

	// burger.insertOne([""]) //<<<<<<<<<<<< ????
	
});

//update/put route
router.put("/api/updateBurger", function(req, res) {
	// burger.updateOne(//<<<<<< ???)
});


//export router
module.exports = router;