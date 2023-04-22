/*** Week 04 Coding Assignment ***
 *
 *   Author: Patrick Murray
 *
 */
//*********************************************
console.log(
   `\n**************\nQuestion 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`
);
// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(`ages: [${ages}]`);

// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
// •	Do not use numbers to reference the last element, find it programmatically,
// •	ages[7] – ages[0] is not allowed!
console.log(
   `\n**************\nQuestion 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array \nages[7] - ages[0] is not allowed!`
);
console.log(`Last element - first element = ${ages[ages.length - 1] - ages[0]}`);

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log(
   `\n**************\nQuestion 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`
);
ages.push(103);
console.log(`New last element - first element = ${ages[ages.length - 1] - ages[0]}`);

// 1c.	Use a loop to iterate through the array and calculate the average age.
// I used the reduce method with a callback function to sum all elements of the array and divide the sum by the number of elements in the array to calculate the average
console.log(
   `\n**************\nQuestion 1c. Use a loop to iterate through the array and calculate the average age.`
);
const avgAge = ages.reduce((x, y) => x + y, 0) / ages.length;
console.log(`Average age = ${avgAge}`);
console.log("\n\n");

//*********************************************
// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log(
   `\n**************\nQuestion 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`
);
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(`names: [${names}]`);

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name.
// I used the reduce method with a callback function to sum the length of each string in the array and divide the sum by the number of elements in the array
console.log(
   `\n**************\nQuestion 2a. Use a loop to iterate through the array and calculate the average number of letters per name.`
);
const avgNameLength = names.reduce((x, y) => x + y.length, 0) / names.length;
console.log(`Average letters per name = ${avgNameLength}`);

// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// I used the reduce method with a callback function to concatenate every array element into a single string separated by a single space.
//I have also included an easier method for this using a spread operator instead of looping through each element.
console.log(
   `\n**************\nQuestion 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`
);
const concatNames = names.reduce((x, y) => x + " " + y);

//Alternate method using spread operator and join string method.
//let concatNames = [...names].join(" ");
console.log(`concatNames = ${concatNames}`);
console.log("\n\n");

//*********************************************
//3. How do you access the last element of any array?
console.log(`\n**************\nQuestion 3. How do you access the last element of any array?`);
console.log(`The last element of any array can be accessed using "array.length - 1"`);
console.log("\n\n");

//*********************************************
// 4. How do you access the first element of any array?
console.log(`\n**************\nQuestion 4. How do you access the first element of any array?`);

console.log(`The first element of any array can be accessed using "array[0]"`);
console.log("\n\n");

//*********************************************
// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
//let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
// let nameLengths = [5, 3, 4]; 			//create this new array

//I used the map method with a callback function to return the length of every element in the names array and map it into a new array nameLengths
console.log(
   `\n**************\nQuestion 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`
);
const nameLengths = names.map((x) => x.length);
console.log(`nameLengths = [${nameLengths}]`);
console.log("\n\n");

//*********************************************
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

// I used the reduce method with a callback function to sum all elements of the array and store the sum in the variable sumNames
console.log(
   `\n**************\nQuestion 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`
);
const sumNames = nameLengths.reduce((x, y) => x + y, 0);
console.log(`Sum of all elements in nameLengths = ${sumNames}`);
console.log("\n\n");

//*********************************************
// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

// My function uses a for loop to count from 1 to n
// there is a temporary variable result that is used to accumulate word n times before being returned
console.log(
   `\n**************\nQuestion 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`
);
function repeatWord(word, n) {
   let result = "";
   for (let i = 1; i <= n; i++) {
      result += word;
   }
   return result;
}
console.log(`repeatWord("Hello", 3) returns "${repeatWord("Hello", 3)}"`);
console.log(`repeatWord("Goodbye", 4) returns "${repeatWord("Goodbye", 4)}"`);
console.log("\n\n");

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
console.log(
   `\n**************\nQuestion 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.`
);
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(`fullName("Patrick", "Murray") returns "${fullName("Patrick", "Murray")}"`);
console.log("\n\n");

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log(
   `\n**************\nQuestion 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`
);

// I used an array reduce method with callback function to sum the array. I then compared the result to see if the sum was greater than 100 and used a ternary operator to return true or false. An arrow function was used to fir teh function on a single line.
const MoreThan100 = (a) => (a.reduce((x, y) => x + y) > 100 ? true : false);
testArr1 = [25, 25, 25, 26]; // true
testArr2 = [25, 25, 25, 25]; // false
testArr3 = [25, 25, 25, 24]; // false
console.log(`MoreThan100([25, 25, 25, 26]) returns ${MoreThan100(testArr1)}`);
console.log(`MoreThan100([25, 25, 25, 25]) returns ${MoreThan100(testArr2)}`);
console.log(`MoreThan100([25, 25, 25, 24]) returns ${MoreThan100(testArr3)}`);
console.log("\n\n");

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log(
   `\n**************\nQuestion 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`
);

// I used the reduce method with a callback function to sum all elements of the array and divide the sum by the number of elements in the array to calculate the average
const arrAverage = (a) => a.reduce((x, y) => x + y, 0) / a.length;
testArr4 = [5, 5, 5, 5, 0]; // 4
testArr5 = [2, 3, 5, 10]; // 5
testArr6 = [34, 33, 33]; // 33.333 repeating
console.log(`arrAverage([5, 5, 5, 5, 0]) returns ${arrAverage(testArr4)}`);
console.log(`arrAverage([2, 3, 5, 10]) returns ${arrAverage(testArr5)}`);
console.log(`arrAverage([34, 33, 33]) returns ${arrAverage(testArr6)}`);
console.log("\n\n");

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log(
   `\n**************\nQuestion 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`
);

// I made use of the previously defined function to calculate the average of an array of integers. I then simply compared the averages and returned true if the first average was greater and false otherwise. Note that if the arrays are equal false is returned.
const isAGreaterThanB = (a, b) => (arrAverage(a) > arrAverage(b) ? true : false);
console.log(
   `isAGreaterThanB([2, 3, 5, 10],[5, 5, 5, 5, 0]) returns ${isAGreaterThanB(testArr5, testArr4)}`
); // true
console.log(
   `isAGreaterThanB([5, 5, 5, 5, 0],[2, 3, 5, 10]) returns ${isAGreaterThanB(testArr4, testArr5)}`
); // false
console.log(
   `isAGreaterThanB([2, 3, 5, 10],[2, 3, 5, 10]) returns ${isAGreaterThanB(testArr5, testArr5)}`
); // false
console.log("\n\n");

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log(
   `\n**************\nQuestion 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`
);

//The function will only return true if both isHotOutside AND moneyInPocket > 10.50. All other cases will return false
const willBuyDrink = (isHotOutside, moneyInPocket) =>
   isHotOutside && moneyInPocket > 10.5 ? true : false;
console.log(`willBuyDrink(true, 10.51) returns ${willBuyDrink(true, 10.51)}`); // true
console.log(`willBuyDrink(false, 10.51) returns ${willBuyDrink(false, 10.51)}`); // false
console.log(`willBuyDrink(true, 10.50) returns ${willBuyDrink(true, 10.5)}`); // false
console.log(`willBuyDrink(false, 10.50) returns ${willBuyDrink(false, 10.5)}`); // false
console.log(`willBuyDrink(true, 10.49) returns ${willBuyDrink(true, 10.49)}`); // false
console.log("\n\n");

// 13. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
// I have written a function that takes two equal length arrays of numbers as a parameter and returns the mean difference, which is a measure of the absolute difference between the mean values in two sets of data.
//This can be used as a metric to estimate amount of change between an experimental group and a control group of data in response to an external stimulus.

// I wrote this function as an excercise to demonstrate proficiency with the concepts addressed in this assignment; manipulation of arrays and using functions to return a result.
//A function such as this may have real world application in statistical examination of data such as in a clinical trial to compare the effect of a stimulus on a treatement group compared to a control group.

// The function will take 2 array parameters, array (a) and array (b) that will consist entirely of numbers, be of equal length, and have at least one element in each array. The mean difference between the two data sets will be calculated and returned. Note that the difference between two numbers is always expressed as a positive value, therefore the result should also always be positive

//If the arrays are of different length, if any element in either array is not a number, or the arrays do not each contain at least one element, the function will return 'undefined'
//I have performed validation on the parameters to ensure that the arguments passed can return a valid result.

console.log(
   `\n**************\nQuestion 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`
);
function meanDiff(a, b) {
   // validate that a and b are the same length and greater than 0
   let validLength = true;
   validLength = a.length === b.length && a.length > 0 ? true : false;

   // if arrays are same length and consist of only numbers perform the calculation and return the result
   if (validLength && validData(a) && validData(b)) {
      // makes use of the previously defined function arrAverage to calculate the average of an array of integers.
      // calculates the difference between the average value of a and b and returns the absolute value of the difference
      return Math.abs(arrAverage(a) - arrAverage(b));
   } else {
      // if arrays are of different lengths or if any element in either array is not a number, return 'undefined'
      return undefined;
   }

   // nested function used to validate that an array contains only numbers in all elements
   function validData(arr) {
      let isNum = true;
      arr.forEach((e) => (!(typeof e == "number") ? (isNum = false) : isNum));
      return isNum;
   }
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [2, 3];
const arr4 = ["1", 2, 3];
const arr5 = [];

console.log(`meanDiff([1, 2, 3], [1, 2, 3]) = ${meanDiff(arr1, arr1)}`); // return 0
console.log(`meanDiff([3, 4, 5], [3, 4, 5]) = ${meanDiff(arr2, arr2)}`); // return 0
console.log(`meanDiff([1, 2, 3], [3, 4, 5]) = ${meanDiff(arr1, arr2)}`); // return 2
console.log(`meanDiff([3, 4, 5], [1, 2, 3]) = ${meanDiff(arr2, arr1)}`); // return 2
console.log(`meanDiff([1, 2, 3], [2, 3]) = ${meanDiff(arr1, arr3)}`); // return undefined
console.log(`meanDiff([1, 2, 3], ["1", 2, 3]) = ${meanDiff(arr1, arr4)}`); // return undefined
console.log(`meanDiff([], []) = ${meanDiff(arr5, arr5)}`); // return undefined
console.log("\n\n");
