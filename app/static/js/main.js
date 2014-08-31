var answer1 = 233168;

$(document).ready(function(){
	console.log('hello world');


	$('#answer-submit').click(function(event) {
		event.preventDefault();
		console.log('Default prevented.');

		var input = $('#answer-input').val();
		console.log('Input is: ' + input);
		findDivisibleNumbers(input);

	});

});

// method for Euler problem number one
// takes user input from index.html form and returns sum as an answer
function findDivisibleNumbers(input) {
    var sum = 0;
    
    // console.log("Received input: " + input);
    
    for (var i = 1; i < input; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
            // console.log(sum);
        }
    }

    $('#answerP').text(sum);
}

function doFibonacci(limit) {      // limit sets the upper bound of the Fibonacci sequence
    
}

// method for Euler problem number two
function findEvenFibonacci(input) {

}