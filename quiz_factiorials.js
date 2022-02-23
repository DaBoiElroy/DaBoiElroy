/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
// 12! = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 479,001,600

var solution = 1;

for (var k = 12; k >= 1; k--) {
    solution = solution * k;
}
console.log (solution);


/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var solution = 1;
for(var n = 1; n <= 12; n++)
{
    // solution = solution * n;
    solution*=n;
}

console.log(solution);

//12! == 479001600