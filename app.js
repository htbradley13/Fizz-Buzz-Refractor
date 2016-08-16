$(document).ready(function() {

	$("#Number-Selection").submit(function(event) {
		//Since we aren't submitting to a server
		event.preventDefault();

		//This is the number the user picks
		var numEntry = parseInt($('#Number-entry').val());

		var fizzBuzz = funtion(numEntry) {

			for (i = 1; i <= numEntry; i++) {

		if (i % 3 === 0 && i % 5 === 0) {
				$('.Results').append('<p>' + 'Fizz Buzz' + '</p>' +'<br>');
			}
		else if(i % 3 === 0) {
				$('.Results').append('<p>' + 'Fizz' + '</p>' +'<br>');
		}
		else if(i % 5 === 0) {
				$('.Results').append('<p>' + 'Buzz' + '</p>' +'<br>');
		}
		else {
				$('.Results').append('<p>' + i + '</p>' +'<br>');
			}

		}
	}

		$(this)[0].reset();

	});  

});



