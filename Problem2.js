var max = 4000000;
var fib = new Array();
fib.push(1);
fib.push(2);

while(true) {
	var l = fib.length;
	var n = fib[l-2] + fib[l-1];
	if (n > max) {
		break;
	}
	fib.push(n);
}

var total = 0;
fib.forEach(function(e){
	if (e % 2 == 0) {
		total += e;
	}
});

console.log(total);


