//import orm.js
var orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertOne: function(burgerName, cb) {
		orm.insertOne(bugerName, function(res) {
			cb(res);
		});
	},

	updateOne: function(thingOne, valueOne, thingTwo, valueTwo, cb) {
		orm.updateOne(thingOne, valueOne, thingTwo, valueTwo, function(res) {
			cb(res);
		})
	}
};

//export
module.exports = burger;