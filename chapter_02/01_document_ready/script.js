$(document).ready(function(){
	console.log("OMG JAVASCRIPT");
	$("#celebs tbody tr:even").addClass("zebra");


	$("<input type='button' id='toggleButton' value='hide'/>").insertAfter('#disclaimer');
	$('#toggleButton').click(function(){
		$('#disclaimer').toggle();
		if ($('#disclaimer').is(':visible')) {
			$(this).val('hide');
		}
		else {
			$(this).val('show');
		}
	})

	$('<strong>START</strong>').prependTo('#disclaimer');
	$('<strong>END</strong>').appendTo('#disclaimer');

});