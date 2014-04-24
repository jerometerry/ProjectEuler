/**
 * Computes the sum of the digits of 100!, using long multiplication
 * Project Euler Problem 20
 */
 
 
/**
 * Multiply the number represented by the array of base 10 coefficients
 * by the given factor.
 */
function multiply(digits, factor) {
    var carry = 0;
    
    // Long hand multiplication
    for (var i = 0; i < digits.length; i++) {
        var digit = digits[i]  * factor + carry;
        digits[i] = digit % 10;
        carry = Math.floor(digit / 10);
    }
}

/**
 * Computes the factorial of the given positive integer
 * @return Array of base 10 coefficients, where the first
 * element is the coefficient of 10^0 (the ones place)
 */
function factorial(n) {
    var digitCount = 256;
    var digits = [];
 
    digits[0] = 1;
    for (var i = 1; i < digitCount; i++) { 
        digits[i] = 0; 
    }

    for (var i = 2; i < n; i++) { 
        multiply(digits, i); 
    }

    return digits;
}

/**
 * Compute the sum of the array of numbers
 */
function sum(digits) {
    var sum = 0;
    digits.forEach(function(d){ sum += d; });
    return sum;
}

var n = 100;
var digits = factorial(n);
var sum = sum(digits);
console.log(sum);