$(document).ready(function() {

	$("#Number-Selection").submit(function(event) {
		//Since we aren't submitting to a server
		event.preventDefault();

		//This is the number the user picks
		var numEntry = +($("#Number-entry").val());

		if (numEntry < 1 || numEntry > 100) {
			alert("Please enter a number between 1-100");
		}
		else { 
			// Calling the named function at the bottom
			numberSelectF(numEntry);
		}

		$(this)[0].reset();

	});  

});

function numberSelectF(numEntryX){

			for (i = 1; i <= numEntryX; i++) {

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