var facts = [];
facts[0] = 1;
facts[1] = 1;
facts[2] = 2;
facts[3] = 6;
facts[4] = 24;
facts[5] = 120;
facts[6] = 720;
facts[7] = 5040;
facts[8] = 40320;
facts[9] = 362880;

function getBaseTenCoefficients(i) {
    var n = i;
    var powers = [];
    
    while(n > 0) {
        powers[powers.length] = n % 10;
        n = Math.floor(n / 10);
    }
    
    return powers;
}

function sumDigitFactorials(n) {
    var powers = getBaseTenCoefficients(n);
    var total = 0;
    powers.forEach(function(e){total += facts[e]});
    return total;
}

/* 
 * facts[9]*7 = 2540160, a seven digit number
 * facts[9]*8 = 2903040, a seven digit number
 * Upper bound is thus facts[9]*7
 */
var max = facts[9]*7;
var total = 0;
for (var i = 10; i < max; i++) {
    var sum = sumDigitFactorials(i);
    if (i == sum) {
        console.log(i);
        total += i;
    }
}
console.log(total);
    