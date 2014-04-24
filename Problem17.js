var names = [];
names[1] = 'one';
names[2] = 'two';
names[3] = 'three';
names[4] = 'four';
names[5] = 'five';
names[6] = 'six';
names[7] = 'seven';
names[8] = 'eight';
names[9] = 'nine';
names[10] = 'ten';
names[11] = 'eleven';
names[12] = 'twelve';
names[13] = 'thirteen';
names[14] = 'fourteen';
names[15] = 'fifteen';
names[16] = 'sixteen';
names[17] = 'seventeen';
names[18] = 'eighteen';
names[19] = 'nineteen';
names[20] = 'twenty';
names[30] = 'thirty';
names[40] = 'forty';
names[50] = 'fifty';
names[60] = 'sixty';
names[70] = 'seventy';
names[80] = 'eighty';
names[90] = 'ninety';
names[100] = 'hundred';
names[1000] = 'thousand';

function getBaseTenCoefficients(i) {
    var n = i;
    var powers = [];
    
    while(n > 0) {
        powers[powers.length] = n % 10;
        n = Math.floor(n / 10);
    }
    
    return powers;
}

function toWords(i) {
    var powers = getBaseTenCoefficients(i);
    
    var s = "";
    if (powers.length >= 4) {
        s += names[powers[3]] + " " + names[1000];
    }
    if (powers.length >= 3) {
        
        if (powers[2] > 0) {
            s += " " + names[powers[2]] + " " + names[100];
        }
        
        if (powers[0] > 0 || powers[1] > 0) {
            s += " and ";
        }
    }   
    var onesShown = false;
    if (powers.length >= 2) {
        
        if (powers[1] >= 2) {
            s += names[powers[1] * 10] + " ";
        }
        else {
            var tmp = powers[1] * 10  + powers[0];
            if (tmp > 0) {
                s += names[tmp];
            }
            onesShown = true;
        }
    }
    
    if (powers.length >= 1 && !onesShown && powers[0] > 0) {
        s += names[powers[0]];
    }
    
    return s;
}

function countLetters(s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (c != ' ') {
            count++;
        }
    }
    return count;
}

var total = 0;
for (var i = 1; i <= 1000; i++) {
    var s = toWords(i);
    var c = countLetters(s);
    console.log(i + ": " + s + ": " + c);
    total += c;
}

console.log(total);