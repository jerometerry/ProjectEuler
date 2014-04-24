/*
 * For large n, f(n) can be computed using Binet's Fibonacci Formula
 *
 *      f(n) = [  phi^n / sqrt(5)  ]
 *
 * where phi is the golden ratio, and the square brackets is the
 * nearest integer function.
 *
 * The number of digits in a number in the nth Fibonacci number can be computed by 
 * solving for x in the following function, taking the floor of the result.
 *
 *      10^(x-1) = [  phi^n / sqrt(5)  ]
 *
 * The first Fibonacci number with 1000 digits is obtained by solving for 
 * the smallest n that satisfies the inequality 
 *
 *      phi^n/sqrt(5) > 10^999
 *
 * Rewriting we get
 * 
 *      n * log(phi) - log(5)/2 > 999*log(10)
 *      n > (999*log(10) + log(5)/2)/log(phi)
 * 
 */
 
 var phi = 1.61803398875;
 
 function getFirstFibWithNdigits(n) {
    return Math.round(((n-1)*Math.log(10) + Math.log(5)/2)/Math.log(phi));
 }
 
 console.log(getFirstFibWithNdigits(1000));