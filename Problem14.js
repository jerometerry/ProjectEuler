function seq(n) {
    if (n % 2 == 0) {
        return n / 2;
    }
    else {
        return 3*n + 1;
    }
}

var maxLen = 0;
var start = 0;

for (var n = 1; n < 1000000; n++) {
    var t = n;
    var hops = 0;

    while(t > 1) {
        t = seq(t);
        hops++;
    }
    
    length = hops + 1;
    
    if (length > maxLen) {
        maxLen = length;
        start = n;
    }
}

console.log(start + " : " + maxLen);
