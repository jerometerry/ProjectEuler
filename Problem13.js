var fs = require('fs');

function add(digits, p, n) {
    var carry = 0;
    
    // Long hand addition
    var i = p;
    do {
        var digit = digits[i]  + n + carry;
        digits[i] = digit % 10;
        carry = Math.floor(digit / 10);
        i++;
        n = 0;
    }
    while (carry > 0) {
    }
}

function addLargeNumber(digits, line) {
    for (var i = 0; i < line.length; i++) {
        var s = line.substr(line.length - i - 1, 1);
        var n = parseInt(s);
        add(digits, i, n);
    }
}

var digitCount = 256;
var digits = [];

for (var i = 0; i < digitCount; i++) { 
    digits[i] = 0; 
}

fs.readFileSync('./Problem13.txt').toString().split('\n').forEach(function (line) { 
    addLargeNumber(digits, line.trim());
});

var start = 0;
for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 0) {
        start = i;
        break;
    }
}

for (var i = start; i >= 0; i--) {
    console.log(digits[i]);
}