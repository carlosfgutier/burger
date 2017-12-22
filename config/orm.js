var connection = require("./connection.js");

var orm = {
	selectAll: function(tableName, cb) {
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString, {tableName}, function(err, res) {
			if(err) {
				cb(err, null)

				// do something with error
			}
			cb(null, res);
		});
	},

	insertOne: function(burgerName, timestamp, cb) {
		var queryString = 'INSERT INTO burgers (burger_name, eaten, date) VALUES (?, ?, ?)';
		connection.query(queryString, [burgerName, false, timestamp], function(err, res) {
			cb(res);
		});
	},

	updateOne: function(thingOne, valueOne, thingTwo, valueTwo, cb) {
		var queryString = 'UPDATE burgers SET ?? = ? WHERE ?? = ?';
		connection.query(queryString, [thingOne, valueOne, thingTwo, valueTwo], function(err, res) {
			cb(res);
		});
	}
};

module.exports = orm;