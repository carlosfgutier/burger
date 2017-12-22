var express = require("express");
var burger = require("../models/burger.js");
// var orm = require("../config/orm.js");

//create app router
var router = express.Router();

//all routes lead to /index
router.get("/",function(req, res){
	res.redirect("/index")
});

//get/selec route
router.get("/index", function(req, res) { 
	burger.selectAll(function(err,  data) {
		if (err) throw err;
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
	console.log("in index");
});

//post/insert route
router.post("/api/addBurger", function(req, res) {
	// burger.insertOne(burger.burgerName, function(err, data) {
	// 	burger.selectAll("burgers", function(err, data) {

	// 	});
	// 	res.render(); <<<<<<<<<<<< also ask about this
	// });

	// burger.insertOne(burger.burgerName, function(err, data) {
	// 	res.json({id: data.id}); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	// });
});

//update/put route
router.put("/api/burgers/:id", function(req, res) {
	var burgerId = "id = " + req.params.id

	burger.update({ eaten: TRUE }, burgerId, function(err, data) {
		if (err) throw err;
		if (data.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

//export router
module.exports = router;