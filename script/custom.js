//Jason Trump
//Project 01
//CSCI 344


// For Modal
$(document).ready(function() {
	$("#modal-from-dom").bind('show', function() {
		var email = $("#email").val();
	$("#email_header").text("Thank You, " + email);
	});
});

$(document).ready(function() {
	$("#modal-from-dom-2").bind('show', function() {
		var login = $("#acctname").val();
	$("#login").text("We dont have an account " + login + " that matches our records.");
	});
});