$(document).ready(function(){
	console.log("OMG JAVASCRIPT");

	// id's of celebs and table rows
	// .length - action
	// Prints everything after 

	// Out of the celebraties, inside table rows without headers.
	// How many of those are even. 
	//.css changes css, but don't do this because adds inline style (css) to html document

	$("#celebs tbody tr:even").addClass("zebra");

	$('#hideButton').click(function(){
		$('#disclaimer').hide();

	})

	$('#showButton').click(function(){
		$('#disclaimer').show();

	})
});