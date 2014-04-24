var fifthPowers = [];
fifthPowers[0] = 0;
fifthPowers[1] = 1;
fifthPowers[2] = 32;
fifthPowers[3] = 243;
fifthPowers[4] = 1024;
fifthPowers[5] = 3125;
fifthPowers[6] = 7776;
fifthPowers[7] = 16807;
fifthPowers[8] = 32768;
fifthPowers[9] = 59049;

function getBaseTenCoefficients(i) {
    var n = i;
    var powers = [];
    
    while(n > 0) {
        powers[powers.length] = n % 10;
        n = Math.floor(n / 10);
    }
    
    return powers;
}

function sumDigitFifthPowers(n) {
    var powers = getBaseTenCoefficients(n);
    var total = 0;
    powers.forEach(function(e){total += fifthPowers[e]});
    return total;
}

var max = 10000000;
var total = 0;
for (var i = 10; i < max; i++) {
    var sum = sumDigitFifthPowers(i);
    if (i == sum) {
        console.log(i);
        total += i;
    }
}
console.log(total);
    