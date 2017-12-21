var connection = require("./connection.js");

var orm = {
	selectAll: function(tableName) {
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString, {tableName}, function(err, res) {
			console.log(results);
		});
	}

	insertOne: function
};


//populate with methods that will get, post, and edit data 
//selectAll
//insertOne
//updateOne
//export orm