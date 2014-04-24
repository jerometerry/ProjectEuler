function sumOfFirstNSquares(n) {
    return n * (n + 1) * (2*n + 1) / 6;
}

function sumOfFirstN(n) {
    return n * (n + 1) / 2;
}

var n = 100;
var sN = sumOfFirstN(n);
var sqN = sumOfFirstNSquares(n);
var sumSquareDiff = (sN*sN) - sqN;

console.log(sumSquareDiff);
