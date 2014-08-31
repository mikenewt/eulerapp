$(document).ready(function(){
	console.log('hello world');
	
	
	/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
	Find the sum of all the multiples of 3 or 5 below 1000.*/
	
	//find numbers divisible by 3 below 1000
	
	function euler(){
		
		var divisibleNumbers = [];
		
		for(var i=0; i<1000; i++) {
			//console.log('running');
			//console.log(i);
			
			if((i % 3 === 0) || (i % 5 === 0)) {
				divisibleNumbers.push(i);
				console.log(divisibleNumbers);
			}
			
		}
	}
	
	euler();
});
