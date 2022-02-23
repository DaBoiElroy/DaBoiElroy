const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log("Adding Pineapple and Kiwi to the front")
// append to the front of the array
fruits.unshift("Pineapple");
fruits.unshift("Kiwi");
console.log(fruits);

console.log("Remove the first entry in the array");
fruits.shift();
console.log(fruits);

console.log("Add to the end of the array");
fruits.push("tomato");
fruits.push("dragon fruit");
console.log(fruits);

console.log("Remove the last entry in list");
fruits.pop();
console.log(fruits);


console.log("Remove 3 entries starting on index 2");
//           index to start, number of things to remove
fruits.splice(2,3);
console.log(fruits);