$(document).ready(function(){
	console.log("OMG JAVASCRIPT");
	$("#celebs tbody tr:even").addClass("zebra");


	$('#toggleButton').click(function(){
		$('#disclaimer').toggle();
		if ($('#disclaimer').is(':visible')) {
			$(this).val('hide');
		}
		else {
			$(this).val('show');
		}
	})

	$("<input type='button' id='toggleButton' value='hide'/>").insertAfter('#disclaimer');

	$('<strong>START</strong>').prependTo('#disclaimer');
	$('<strong>END</strong>').appendTo('#disclaimer');

	$('#toggleButton').click(function(){
		$('#disclaimer').toggle('slow');
	});

});