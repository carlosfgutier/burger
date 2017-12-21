var connection = require("./connection.js");

var orm = {
	selectAll: function(tableName) {
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString, {tableName}, function(err, res) {
			console.log(results);
		});
	},

	insertOne: function(burgerName, boolean, timestamp) {
		var queryString = 'INSERT INTO burgers (burger_name, eaten, date) VALUES (?, ?, ?)';
		connection.query(queryString, [burgerName, boolean, timestamp], function(err, res) {
			console.log(results);
		});
	},

	updateOne: function(thingOne, valueOne, thingTwo, valueTwo) {
		var queryString = 'UPDATE burgers SET ?? = ? WHERE ?? = ?';
		connection.query(queryString, [thingOne, valueOne, thingTwo, valueTwo], function(err, res) {
			console.log(results);
		});
	}
};


//populate with methods that will get, post, and edit data 
//selectAll
//insertOne
//updateOne
//export orm