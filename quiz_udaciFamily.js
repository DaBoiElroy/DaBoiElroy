/*
 * Programming Quiz: UdaciFamily (6-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `udaciFamily`
 * - The variable `udaciFamily` should be an array containing the values `"Julia"`, `"James"`, and one other name
 * - Your code should print `udaciFamily` to the console
 * - BE CAREFUL ABOUT THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

var udaciFamily = ["Julia", "James", "Tyler"];
console.log(udaciFamily); // all name are the names are printed in the `udaciFamily` array


// another way is 


// You can create an arrray in different ways
// Method 1
// var udaciFamily = new Array("Julia", "James", "Yourname"); 

// Method 2
var udaciFamily = ["Julia", "James", "Yourname"]; 

// Iterate over the array elements
// We can find the size of an array using its `length` property
// Remember that the indexing of elements in an array starts from 0
for (var index = 0; index<udaciFamily.length; index++){
    console.log(udaciFamily[index]);