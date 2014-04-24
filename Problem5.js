var n = 20;

var max = 1000000000;

for (var i = 1; i < max; i++) {
    var ed = true;
    for (var j = 1; j <= n; j++) {
        if (i % j != 0) {
            ed = false;
            break;
        }
    }
    
    if (ed) {
        console.log(i);
        break;
    }
}
