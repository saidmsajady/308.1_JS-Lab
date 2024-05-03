// Part 1 -------------------------------------------------------------------------
//Initial Numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Do numbers add to 50? True/False
const isSum50 = (num1 + num2 + num3 +num4) === 50
console.log("Is the sum 50?", isSum50)

//Are at least 2 numbers odd? True/False
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2
console.log(`Are there two or more odd numbers?`, areTwoOdd)

//No numbers can be larger than 25
const areLargerThan25 = (num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25);
console.log(`Are any numbers over 25?`, areLargerThan25);

//Are all numbers unique?
const isUnique = num1 != num2 && num1 != num3 && num1 != num4 && num2 != num3 && num2 != num4 && num3 != num4
console.log(`Are all numbers unique?`, isUnique);

/* My own implementations */

//No number can be larger than 25, without needing to use (!)
const areAllLargerThan25 = (num1 <= 25 && num2 <= 25 && num3 <= 25 && num4 <= 25);
console.log(`Are all numbers 25 or less?`, areAllLargerThan25);

//Did the numbers pass all validation checks?
const isValid = isSum50 && areTwoOdd && areLargerThan25 && areAllLargerThan25 && isUnique;
console.log(`Do the numbers pass all validation checks?`, isValid)

//Are numbers divisable by 5
const divideBy5 = (num1 % 5) + (num2 % 5) + (num3 % 5) + (num4 % 5) == 0;
console.log(`Are all numbers evently divisable by 5?`, divideBy5);

//Is the first number larger than the last
const firstVSlast = num1 > num4;
console.log(`Is the first number larger than the last?`, firstVSlast);

//Subtract first number from second number, then multipy by the third number, lastly find the remainder of the fourth number
const math = num1 - num2;
console.log(`As of the first step, the answer is: `, math);

const result = math * num3;
console.log(`As of the second step, the answer is: `, result);

const finalResult = math % num4;
console.log(`As of the last step, the remainder is: `, finalResult);

//Same problem, but all in the same line
const arithmeticChain = (((num1-num2) * num3 ) % num4 );
console.log("Same problem as the last, but in the same line, The remaider would be: ", arithmeticChain);

//Changing isOver25 to not use the (!) operator
console.log("Changed!\n")

console.log('First Part Finished!\n\n');

// Part 2 ------------------------------------------------------------------------

const tripDistance = 1500;
const budget = 175;
const gasPerG = 3; 

/* for 55 miles an hour (30 miles per gallon)*/
console.log("For 55 miles an Hour")

//How many gallons of fuel will you need for the entire trip?
const totalGallonsA = tripDistance / 30;
console.log("Total gallons of fuel is: ", totalGallonsA);

//Will your budget be enough to cover the fuel expense?
const totalCostA = (totalGallonsA * gasPerG) <= budget;
console.log("Will my budget be enough? ", totalCostA)

//How long will the trip take, in hours?
const totalTimeA = tripDistance / 55;
console.log("The trip will take " + totalTimeA + " hours\n");



/* for 60 miles an hour (28 miles per gallon)*/
console.log("For 60 miles an Hour")

//How many gallons of fuel will you need for the entire trip?
const totalGallonsB = tripDistance / 28;
console.log("Total gallons of fuel is: ", totalGallonsB);

//Will your budget be enough to cover the fuel expense?
const totalCostB = (totalGallonsB * gasPerG) <= budget;
console.log("Will my budget be enough? ", totalCostB)

//How long will the trip take, in hours?
const totalTimeB = tripDistance / 60;
console.log("The trip will take " + totalTimeB + " hours\n");



/* for 75 miles an hour (23 miles per gallon)*/
console.log("For 75 miles an Hour")

//How many gallons of fuel will you need for the entire trip?
const totalGallonsC = tripDistance / 23;
console.log("Total gallons of fuel is: ", totalGallonsC);

//Will your budget be enough to cover the fuel expense?
const totalCostC = (totalGallonsC * gasPerG) <= budget;
console.log("Will my budget be enough? ", totalCostC)

//How long will the trip take, in hours?
const totalTimeC = tripDistance / 70;
console.log("The trip will take " + totalTimeC + " hours\n");

console.log('First Part Finished!\n');
