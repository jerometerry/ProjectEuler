var fs = require('fs');

function reduce(row1, row2) {
    var result = [];
    
    for (var i = 0; i < row1.length; i++) {
        var p = row1[i].v;
        var c1 = row2[i].v;
        var c2 = row2[i+1].v;
        
        var s1 = p+c1;
        var s2 = p+c2;
        
        var n = i;
        var s = s1;
        
        if (s2 > s1) {
            n = i+1;
            s = s2;
        }
        
        result[i] = {i:n, v:s};
    }
    
    return result;
}

function wrap(row) {
    var result = [];
    for(var i = 0; i < row.length; i++) {
        result[i] = {i:i, v:row[i]};
    }
    return result;
}

var rows = [];

fs.readFileSync('./Problem18.txt').toString().split('\n').forEach(function (line) { 
    var tokens = line.trim().split(' ');
    var row = [];
    for (var i = 0; i < tokens.length; i++) {
        row[i] = parseInt(tokens[i]);
    }
    rows[rows.length] = row;
});

var reduced = wrap(rows[rows.length - 1]);
for (var i = rows.length - 2; i >= 0; i--) {
    reduced = reduce(wrap(rows[i]), reduced);
}
reduced.forEach(function(e){console.log(e.i + " : " + e.v)});