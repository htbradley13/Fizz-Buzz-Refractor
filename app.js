$(document).ready(function() {

	$("#Number-Selection").submit(function(event) {
		//Since we aren't submitting to a server
		event.preventDefault();
		var numEntry = parseInt($('Number-entry').val())

	if (numEntry % 3 === 0 && numEntry % 5 === 0) {
			$('.Results').append('<p>' + 'Fizz Buzz' + '</p>' +'<br>');
		}
	else if(numEntry % 3 === 0 && numEntry % 5 != 0) {
			$('.Results').append('<p>' + 'Fizz' + '</p>' +'<br>');
	}
	else if(numEntry % 5 === 0 && numEntry % 3 != 0) {
			$('.Results').append('<p>' + 'Buzz' + '</p>' +'<br>');
	}
	else {
			$('.Results').append('<p>' + '$("#Number-entry").val()' + '</p>' +'<br>');
		}

	};  

	$(this)[0].reset();

});

});





