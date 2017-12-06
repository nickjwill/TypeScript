console.log(fullName('Nick', 'Williams'));
// console.log(otherFullName('Nick', 'Williams'));
// console.log(thirdFullName('Nick', 'Williams'));


// Function Declaration hoisting 
function fullName(first : string, last : string) : string {
	return first + " " + last;
}

// Function Expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}

