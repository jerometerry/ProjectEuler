function isPrime(n) {
    if (n <= 2) {
        return true;
    }
    
    if (n % 2 == 0) {
        return false;
    }
    
    var max = Math.sqrt(n);
    for (var i = 3; i <= max; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

var sum = 0;
var n = 2000000;

for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
        sum = sum + i;
    }
}

console.log(sum);