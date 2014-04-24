function log10(val) {
  return Math.log(val) / Math.LN10;
}

function sumOfDigits(base, exp) {
    var numberOfDigits = Math.ceil(exp * log10(base));
    digits = [];
    digits[0] = base;
    for (var i = 1; i < numberOfDigits; i++) {
        digits[i] = 0;
    }
    
    var currentExp = 1;

    while (currentExp < exp) {
        currentExp++;
        var carry = 0;
        for (var i = 0; i < digits.length; i++) {
            var num = base * digits[i] + carry;
            digits[i] = num % 10;
            carry = Math.floor(num / 10);
        }
    }

    var sum = 0;
    digits.forEach(function(d){
        sum += d;
    });
 
    return sum;
}


var base = 2;
var exp = 1000;
var sum = sumOfDigits(base, exp);
console.log(sum);
