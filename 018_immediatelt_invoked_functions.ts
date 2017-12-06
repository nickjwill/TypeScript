var names : string[] = ['Nick', 'Jake', 'Chase'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);