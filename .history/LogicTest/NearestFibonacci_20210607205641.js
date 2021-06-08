function isPerfectSquare( x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
 
// Returns true if n is a Fibinacci Number, else false
function isFibonacci( n)
{
 
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return isPerfectSquare(5 * n * n + 4) ||
           isPerfectSquare(5 * n * n - 4);
}
 
// A utility function to test above functions
  for (let i = 1; i <= 10; i++)
     isFibonacci(i)?  document.write( i + " is a Fibonacci Number <br/>"):
                     document.write(i + " is a not Fibonacci Number <br/>") ;