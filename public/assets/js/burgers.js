$("#submitButton").on("click", function () {
	$.ajax({
		url: '/api/index', 
		method: "GET"
	}).done(function(res) {

		location.reload();
	});
});

// $(function() {
// 	$("#submitButton").on("click", function (event) {
// 		var id = $(this).data("id");		//<<<<<<<<<<<<<<
// 		var eaten = $(this).data("eaten"); //<<<<<<<<<<<<<<<

// 		$.ajax("/api/burgers", {
// 			type: "GET",
// 			data: eaten 			//<<<<<<<<<<<<<<
// 		}).then(
// 			function() {
// 				console.log("this did something");
// 			});
// 	});

// });