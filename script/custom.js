// For Modal
$(document).ready(function() {
	$("#modal-from-dom").bind('show', function() {
		var email = $("#email").val();
	$("#email_header").text("Thank You, " + email);
	});
});