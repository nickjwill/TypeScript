console.log(fullName('Nick', 'Williams'));
// console.log(otherFullName('Nick', 'Williams'));
// console.log(thirdFullName('Nick', 'Williams'));
// Function Declaration hoisting 
function fullName(first, last) {
    return first + " " + last;
}
// Function Expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
//# sourceMappingURL=017_function_declaration_vs_expressions.js.map