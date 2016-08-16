$(document).ready(function() {

	$("#Number-Selection").submit(function(event) {
		//Since we aren't submitting to a server
		event.preventDefault();

		//This is the number the user picks
		var numEntry = parseInt($('#Number-entry').val());

	//for (var gameStart = 1; gameStart <= numEntry; gameStart++) {

	for (var numEntry; numEntry <= 100; numEntry++) {
		
		if (numEntry % 3 === 0 && numEntry % 5 === 0) {
				$('.Results').append('<p>' + 'Fizz Buzz' + '</p>' +'<br>');
			}
		else if(numEntry % 3 === 0) {
				$('.Results').append('<p>' + 'Fizz' + '</p>' +'<br>');
		}
		else if(numEntry % 5 === 0) {
				$('.Results').append('<p>' + 'Buzz' + '</p>' +'<br>');
		}
		else {
				$('.Results').append('<p>' + numEntry + '</p>' +'<br>');
			}
	}

		$(this)[0].reset();

	});  

});


//$("#Number-entry").val()

