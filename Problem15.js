/**
 * The simplest answer to the problem is the binomial coefficient (2n, n).
 *
 * There are always 2n moves, n down, n to the right. If you think of
 * the moves as a 2n array containing only the letters D and L, the problem
 * is simply to fill the 2n array with n of the same symbol (D or L),
 * which is just 2n choose n.
 *
 * 2n choose n = 
 *                      2n!
 *                    -------
 *                    n! * n!
 *  
 *            =              1 * 2 * 3 * ... * 2n           
 *              ---------------------------------------------
 *              (1 * 2 * 3 * ... * n) * (1 * 2 * 3 * ... * n)
 *
 *            = (n + 1) * (n + 2) * (n + 3) * ... * 2n
 *              --------------------------------------
 *                       1 * 2 * 3 * ... * n                   
 */
 
 function paths(n) {
    var num = 1;
    var denom = 1;
    
    for (var i = 1; i <= n; i++) {
        num *= (n + i);
        denom *= i;
    }
    
    return num / denom;
 }
 
 var n = 20;
 console.log(paths(n));