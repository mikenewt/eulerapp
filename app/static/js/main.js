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

function findDivisibleNumbers(input) {
    var sum = 0;
    
    console.log("Received input: " + input);
    
    for (var i = 1; i < input; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
            //console.log(sum);
        }
    }
	
	console.log(sum);

    $('#answerP').text(sum);
}
