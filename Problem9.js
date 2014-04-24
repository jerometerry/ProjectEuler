for (var a = 1; a < 1000; a++) {
    for (var b = a; b < 1000; b++) {
        for (var c = b; c < 1000; c++) {
            var csq = c * c;
            var asqbsq = a * a + b * b;
            var sum = a + b + c;
            if (sum == 1000 && asqbsq == csq) {
                console.log("(" + a + "," + b + "," + c + ")");
                console.log(a*b*c);
            }
        }
    }
}