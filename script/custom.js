// For Modal
$(document).ready(function() {
	$("#modal-from-dom").bind('show', function() {
		var name = $("#name").val();
	$("#name_header").text("Thank You, " + name);
	});
});