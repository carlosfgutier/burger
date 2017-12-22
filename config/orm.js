var connection = require("./connection.js");

var orm = {
	selectAll: function(cb) {
		var queryString = 'SELECT * FROM burgers';
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},

	insertOne: function(burgerName, cb) {
		var queryString = 'INSERT INTO burgers (burger_name, eaten, date) VALUES (?, ?, ?)';
		connection.query(queryString, [burgerName, false, Date.now()], function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},

	updateOne: function(thingOne, valueOne, thingTwo, valueTwo, cb) {
		var queryString = 'UPDATE burgers SET ?? = ? WHERE ?? = ?';
		connection.query(queryString, [thingOne, valueOne, thingTwo, valueTwo], function(err, res) {
			if (err) throw err;
			cb(res);
		});
	}
};

module.exports = orm;