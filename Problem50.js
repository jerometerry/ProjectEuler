function sieveOfAtkin(limit){
   var limitSqrt = Math.sqrt(limit);
   var sieve = [];
   var n;
 
   //prime start from 2, and 3
   sieve[2] = true;
   sieve[3] = true;
 
   for (var x = 1; x <= limitSqrt; x++) {
       var xx = x*x;
       for (var y = 1; y <= limitSqrt; y++) {
           var yy = y*y;
           if (xx + yy >= limit) {
             break;
           }
           // first quadratic using m = 12 and r in R1 = {r : 1, 5}
           n = (4 * xx) + (yy);
           if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
               sieve[n] = !sieve[n];
           }
           // second quadratic using m = 12 and r in R2 = {r : 7}
           n = (3 * xx) + (yy);
           if (n <= limit && (n % 12 == 7)) {
               sieve[n] = !sieve[n];
           }
           // third quadratic using m = 12 and r in R3 = {r : 11}
           n = (3 * xx) - (yy);
           if (x > y && n <= limit && (n % 12 == 11)) {
               sieve[n] = !sieve[n];
           }
       }
   }
 
   // false each primes multiples
   for (n = 5; n <= limitSqrt; n++) {
       if (sieve[n]) {
           x = n * n;
           for (i = x; i <= limit; i += x) {
               sieve[i] = false;
           }
       }
   }
 
   //primes values are the one which sieve[x] = true
   return sieve;
}

function calcSum(vals, start, count) {
    var sum = 0;
    for (var i = 0; i < count; i++) {
        var j = start + i;
        sum += vals[j];
    }
    return sum;
}

function getPrimes(sieve) {
    var primes = [];
    for (var i = 1; i < sieve.length; i++) {
        if (sieve[i]) {
            primes[primes.length] = i;
        }
    }
    
    return primes;
}

var sieve = sieveOfAtkin(1000000);
var primes = getPrimes(sieve);
var chainLimit = 601; // found by trial and error

// step by 2, since sum of an even number of primes isn't a prime
for (var l = chainLimit; l > 2; l-=2) {
    var max = 0;
    var index = 0;
    for (var i = 0; i < primes.length - l; i++) {
        var sum = calcSum(primes, i, l);
        if (sum < sieve.length && sieve[sum]) {
            if (sum > max) {
                max = sum;
                index = i;
            }
        }
    }
    if (max > 0) {
        console.log(max + " : " + index + " : " + l);
        break;
    }
}
