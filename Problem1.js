var max = 1000;
var fib = new Array();

for (var i = 3; i < 1000; i++) {
	var mult5 = i % 5 == 0;
	var mult3 = i % 3 == 0;
	if (mult5 || mult3) {
		mults.push(i);
	}
}

var total = mults.reduce(function(a, b) {
    return a + b;
});

console.log(total);