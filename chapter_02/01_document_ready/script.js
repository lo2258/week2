$(document).ready(function(){
	console.log("OMG JAVASCRIPT");
	$("#celebs tbody tr:even").addClass("zebra");

	// Toggle using if-statement
	// $('#toggleButton').click(function(){
	// 	if ($('#disclaimer').is(':visible')) {
	// 		$('#disclaimer').hide();	
	// 	}
	// 	else {
	// 		$('#disclaimer').show();
	// 	}
	// })

	$('#toggleButton').click(function(){
		$('#disclaimer').toggle();
	})

});