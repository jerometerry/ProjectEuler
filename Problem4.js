var l = 1;

function reverse(s) {
    return s.split('').reverse().join('');
}

function isPalindrome(n) {
    var s = n.toString();
    var r = reverse(s);
    return (s == r);
}

for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
        var p = i * j;
        if (isPalindrome(p) && p > l) {
            l = p;
        }
    }
}

console.log(l);
