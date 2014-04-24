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

var n = 10001;
var count = 0;
var index = 2;
var lastPrime = 2;

while(count < n) {
    if (isPrime(index)) {
        lastPrime = index;
        count++;
    }
    index++;
}

console.log(lastPrime);