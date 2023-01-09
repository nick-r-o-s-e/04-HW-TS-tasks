const logNumberOfTheTask = (num: number): void =>
  console.log(
    `%c        ${num.toString().toUpperCase()}.TASK`,
    "color: yellow; background-color: #202124"
  );

////////////////////////MAIN OBJECT TYPES/////////////////////////////////////
type StringValObj = {
  [key: string]: string;
};

type NumberValObj = {
  [key: string]: number;
};

type StringOrNumberValObj = {
  [key: string]: string | number;
};

type StringArraysValObj = {
  [key: string]: string[];
};

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
logNumberOfTheTask(1);

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

// Write a function that takes a value as argument
// Return the type of the value
logNumberOfTheTask(2);

const getType = (x: any): any => typeof x;

console.log(getType(1));
console.log(getType(false));
console.log(getType({}));
console.log(getType(null));
console.log(getType("string"));
console.log(getType(["array"]));

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
logNumberOfTheTask(3);

const valAndTypeEqual = (a: any, b: any): boolean => a === b;

console.log(valAndTypeEqual(2, 3));
console.log(valAndTypeEqual(3, 3));
console.log(valAndTypeEqual(1, "1"));
console.log(valAndTypeEqual("10", "10"));

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
logNumberOfTheTask(4);

const nthChar = (a: string, n: number): string => a.at(n - 1);

console.log(nthChar("abcd", 1));
console.log(nthChar("zyxbwpl", 5));
console.log(nthChar("gfedcba", 3));

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
logNumberOfTheTask(5);

const removeFirst3Chars = (a: string): string => a.slice(3);

console.log(removeFirst3Chars("abcdefg"));
console.log(removeFirst3Chars("1234"));
console.log(removeFirst3Chars("fgedcba"));

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
logNumberOfTheTask(6);

const getLast3Chars = (a: string): string => a.slice(-3);

console.log(getLast3Chars("abcdefg"));
console.log(getLast3Chars("1234"));
console.log(getLast3Chars("fgedcba"));

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
logNumberOfTheTask(7);

const getFirst3Chars = (a: string): string => a.slice(0, 3);

console.log(getFirst3Chars("abcdefg"));
console.log(getFirst3Chars("1234"));
console.log(getFirst3Chars("fgedcba"));

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
logNumberOfTheTask(8);

const halfStr = (a: string): string => a.slice(0, a.length / 2);

console.log(halfStr("abcdefgh"));
console.log(halfStr("1234"));
console.log(halfStr("gedcba"));

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
logNumberOfTheTask(9);

const removeLast3Chars = (a: string): string => a.slice(0, -3);

console.log(removeLast3Chars("abcdefg"));
console.log(removeLast3Chars("1234"));
console.log(removeLast3Chars("fgedcba"));

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
logNumberOfTheTask(10);

const nPercentage = (a: number, b: number): number => a * b * 0.01;

console.log(nPercentage(100, 50));
console.log(nPercentage(10, 1));
console.log(nPercentage(500, 25));

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
logNumberOfTheTask(11);

const calculation = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number => (((a + b - c) * d) / e) ** f;

console.log(calculation(6, 5, 4, 3, 2, 1));
console.log(calculation(6, 2, 1, 4, 2, 3));
console.log(calculation(2, 3, 6, 4, 2, 3));

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
logNumberOfTheTask(12);

const numberIsEven = (a: number) => a % 2 == 0;

console.log(numberIsEven(10));
console.log(numberIsEven(-4));
console.log(numberIsEven(5));
console.log(numberIsEven(-111));

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
logNumberOfTheTask(13);

const occurrencesInTheString = (a: string, b: string): number =>
  b.split(a).length - 1;

console.log(
  occurrencesInTheString(
    "m",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  occurrencesInTheString(
    "h",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  occurrencesInTheString(
    "?",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  occurrencesInTheString(
    "z",
    "how many times does the character occur in this sentence?"
  )
);

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
logNumberOfTheTask(14);

const isWhole = (a: number): boolean => a % 1 == 0;

console.log(isWhole(4));
console.log(isWhole(1.123));
console.log(isWhole(1048));
console.log(isWhole(10.48));

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
logNumberOfTheTask(15);

const devideOrMultiply = (a: number, b: number): number =>
  a < b ? a / b : a * b;

console.log(devideOrMultiply(10, 100));
console.log(devideOrMultiply(90, 45));
console.log(devideOrMultiply(8, 20));
console.log(devideOrMultiply(2, 0.5));

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
logNumberOfTheTask(16);

const validSubStr = (a: string, b: string): string =>
  a.includes(b) ? b + a : a + b;

console.log(validSubStr("cheese", "cake"));
console.log(validSubStr("lips", "s"));
console.log(validSubStr("Java", "script"));
console.log(validSubStr(" think, therefore I am", "I"));

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
logNumberOfTheTask(17);

const roundDigits = (a: number): number => Number(a.toFixed(2));

console.log(roundDigits(2.12397));
console.log(roundDigits(3.136));
console.log(roundDigits(1.12397));
console.log(roundDigits(26.1379));

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
logNumberOfTheTask(18);

const arrayOfDigits = (a: number): number[] =>
  a
    .toString()
    .split("")
    .map((char) => Number(char));

console.log(arrayOfDigits(10));
console.log(arrayOfDigits(931));
console.log(arrayOfDigits(193278));

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
logNumberOfTheTask(19);

const filterStrings = (a: string, b: string): string => {
  const sotedA = a.replace("%", "");
  return (
    sotedA.charAt(0).toUpperCase() +
    sotedA.slice(1) +
    b.replace("%", "").split("").reverse().join("")
  );
};

console.log(filterStrings("Java", "tpi%rcs"));
console.log(filterStrings("c%ountry", "edis"));
console.log(filterStrings("down", "nw%ot"));

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
logNumberOfTheTask(20);

const isPrime = (a: number): number => {
  let result = a;
  const validPrime = (x: number): boolean => {
    if (x <= 1 || x % 1 != 0) return false;
    for (let i = 2; i < x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };
  while (validPrime(result) != true) {
    ++result;
  }
  return result;
};

console.log(isPrime(38));
console.log(isPrime(7));
console.log(isPrime(115));
console.log(isPrime(2000));

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
logNumberOfTheTask(21);

const isDevisible = (x: number, y: number): number => {
  let temp = x;
  while (temp % y != 0) {
    temp++;
  }
  return temp;
};

console.log(isDevisible(1, 23));
console.log(isDevisible(23, 23));
console.log(isDevisible(7, 3));
console.log(isDevisible(-5, 7));

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
logNumberOfTheTask(22);

const insertSubstring = (a: string, b: string): string => {
  let temp: string[] = a.split("").reverse();
  let result: string[] = [];
  while (temp.length > 0) {
    result = [...result, ...temp.splice(0, 3), b];
  }

  return result.reverse().join("").slice(1);
};

console.log(insertSubstring("1234567", "."));
console.log(insertSubstring("abcde", "$"));
console.log(insertSubstring("zxyzxyzxyzxyzxyz", "w"));

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
logNumberOfTheTask(23);

const incrementLetter = (a: string): string =>
  a
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(incrementLetter("bnchmf"));
console.log(incrementLetter("bgddrd"));
console.log(incrementLetter("sdrshmf"));

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
logNumberOfTheTask(24);

const nthElement = (a: any[], b: number): any => a.at(b - 1);

console.log(nthElement([1, 2, 3, 4, 5], 3));
console.log(nthElement([10, 9, 8, 7, 6], 5));
console.log(nthElement([7, 2, 1, 6, 3], 1));

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
logNumberOfTheTask(25);

const removeFirst3 = (a: any[]): any[] => a.slice(3);

console.log(removeFirst3([1, 2, 3, 4]));
console.log(removeFirst3([5, 4, 3, 2, 1, 0]));
console.log(removeFirst3([99, 1, 1]));

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
logNumberOfTheTask(26);

const extarctLast3 = (a: any[]): any[] => a.splice(-3);

console.log(extarctLast3([1, 2, 3, 4]));
console.log(extarctLast3([5, 4, 3, 2, 1, 0]));
console.log(extarctLast3([99, 1, 1]));

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
logNumberOfTheTask(27);

const extarctFirst3 = (a: any[]): any[] => a.splice(0, 3);

console.log(extarctFirst3([1, 2, 3, 4]));
console.log(extarctFirst3([5, 4, 3, 2, 1, 0]));
console.log(extarctFirst3([99, 1, 1]));

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
logNumberOfTheTask(28);

const lastNthElements = (a: any[], n: number): any[] => a.splice(-n);

console.log(lastNthElements([1, 2, 3, 4, 5], 2));
console.log(lastNthElements([1, 2, 3], 6));
console.log(lastNthElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
logNumberOfTheTask(29);

const filterArr = (a: any[], b: any): any[] => a.filter((x) => x !== b);

console.log(filterArr([1, 2, 3], 2));
console.log(filterArr([1, 2, "2"], "2"));
console.log(filterArr([false, "2", 1], false));
console.log(filterArr([1, 2, "2", 1], 1));

// Write a function that takes an array (a) as argument
// Return the number of elements in a
logNumberOfTheTask(30);

const lengthOfTheArr = (a: any[]): number => a.length;

console.log(lengthOfTheArr([1, 2, 2, 4]));
console.log(lengthOfTheArr([9, 9, 9]));
console.log(lengthOfTheArr([4, 3, 2, 1, 0]));

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
logNumberOfTheTask(31);

const numberOfNegatives = (a: number[]) => a.filter((num) => num < 0).length;

console.log(numberOfNegatives([1, -2, 2, -4]));
console.log(numberOfNegatives([0, 9, 1]));
console.log(numberOfNegatives([4, -3, 2, 1, 0]));

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
logNumberOfTheTask(32);

const descendingOrder = (a: number[]): number[] => a.sort().reverse();

console.log(descendingOrder([1, 3, 2]));
console.log(descendingOrder([4, 2, 3, 1]));

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
logNumberOfTheTask(33);

const sortedStrings = (a: string[]): string[] => a.sort();

console.log(sortedStrings(["b", "c", "d", "a"]));
console.log(sortedStrings(["z", "c", "d", "a", "y", "a", "w"]));

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
logNumberOfTheTask(34);

const averageOfNums = (a: number[]): number =>
  a.reduce((a, b) => a + b) / a.length;

console.log(averageOfNums([10, 100, 40]));
console.log(averageOfNums([10, 100, 1000]));
console.log(averageOfNums([-50, 0, 50, 200]));

// Write a function that takes an array of strings as argument
// Return the longest string
logNumberOfTheTask(35);

const longestString = (a: string[]): string =>
  a.reduce((a, b) => (b.length > a.length ? b : a));

console.log(longestString(["help", "me"]));
console.log(longestString(["I", "need", "candy"]));

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
logNumberOfTheTask(36);

const allEqual = (a: any[]): boolean => a.every((item) => item === a[0]);

console.log(allEqual([true, true, true, true]));
console.log(allEqual(["test", "test", "test"]));
console.log(allEqual([1, 1, 1, 2]));
console.log(allEqual(["10", 10, 10, 10]));

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
logNumberOfTheTask(37);

const concatArrays = (...arrays: any[][]): any[] =>
  arrays.reduce((a, b) => [...a, ...b]);

console.log(concatArrays([1, 2, 3], [4, 5, 6]));
console.log(concatArrays(["a", "b", "c"], [4, 5, 6]));
console.log(concatArrays([true, true], [1, 2], ["a", "b"]));

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
logNumberOfTheTask(38);

const sortByPropertyB = (a: NumberValObj[]): NumberValObj[] =>
  a.sort((a, b) => a.b - b.b);

console.log(
  sortByPropertyB([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortByPropertyB([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortByPropertyB([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
);

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
logNumberOfTheTask(39);

const remDuplicatesAndSort = (a: any[], b: any[]): any[] =>
  [...a, ...b]
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort();

console.log(remDuplicatesAndSort([1, 2, 3], [3, 4, 5]));
console.log(remDuplicatesAndSort([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
logNumberOfTheTask(40);

const sumAllGreaters = (a: number[], num: number): number =>
  a.reduce((a, b) => (b > num ? a + b : a), 0);

console.log(sumAllGreaters([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumAllGreaters([-10, -11, -3, 1, -4], -3));
console.log(sumAllGreaters([78, 99, 100, 101, 401], 99));

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
logNumberOfTheTask(41);

const numsInTheRange = (min: number, max: number): number[] => {
  let result: number[] = [];
  for (let i = min; i <= max; i++) {
    result = [...result, i];
  }
  return result;
};

console.log(numsInTheRange(2, 10));
console.log(numsInTheRange(1, 3));
console.log(numsInTheRange(-5, 5));
console.log(numsInTheRange(2, 7));

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
logNumberOfTheTask(42);

const sortedStringsObject = (arr: string[]): StringArraysValObj => {
  let result: any = {};
  arr
    .sort(
      (a, b) =>
        a.at(0).toLowerCase().charCodeAt(0) -
        b.at(0).toLowerCase().charCodeAt(0)
    )
    .forEach((string) => {
      const key = string.at(0).toLowerCase();
      result[key] ? result[key].push(string) : (result[key] = [string]);
    });
  return result;
};

console.log(sortedStringsObject(["Alf", "Alice", "Ben"]));
console.log(sortedStringsObject(["Ant", "Bear", "Bird"]));
console.log(sortedStringsObject(["Berlin", "Paris", "Prague"]));

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
logNumberOfTheTask(43);

const insertBiggerThan6 = (a: any[], num: number): any[] =>
  num < 6 ? [0, ...a] : [num, ...a];

console.log(insertBiggerThan6([1, 2, 3], 6));
console.log(insertBiggerThan6(["a", "b"], 2));
console.log(insertBiggerThan6([null, false], 11));

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
logNumberOfTheTask(44);

const saveEveryNth = (a: any[], n: number): any[] => {
  let result = [];
  for (let i = n - 1; i <= a.length - 1; i += n) {
    result.push(a.at(i));
  }
  return result;
};

console.log(saveEveryNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(saveEveryNth([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(saveEveryNth([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
logNumberOfTheTask(45);

const getCountry = (obj: StringValObj): string => obj.country;

console.log(getCountry({ continent: "Asia", country: "Japan" }));
console.log(getCountry({ country: "Sweden", continent: "Europe" }));

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
logNumberOfTheTask(46);

const getProp2 = (obj: Record<string, string | number>): string | number =>
  obj["prop-2"];

console.log(getProp2({ one: 1, "prop-2": 2 }));
console.log(getProp2({ "prop-2": "two", prop: "test" }));

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
logNumberOfTheTask(47);

const valueOfString = (obj: StringValObj, str: string) => obj[str];

console.log(
  valueOfString({ continent: "Asia", country: "Japan" }, "continent")
);
console.log(
  valueOfString({ country: "Sweden", continent: "Europe" }, "country")
);

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
logNumberOfTheTask(48);

const hasProperty = (
  obj: Record<string, string | number>,
  str: string
): boolean => (obj[str] ? true : false);

console.log(hasProperty({ a: 1, b: 2, c: 3 }, "b"));
console.log(hasProperty({ x: "a", y: "b", z: "c" }, "a"));
console.log(hasProperty({ x: "a", y: "b", z: "c" }, "z"));

// Write a function that takes a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
logNumberOfTheTask(49);

const objWithXvalue = (a: string): StringValObj => ({ key: a });

console.log(objWithXvalue("a"));
console.log(objWithXvalue("z"));
console.log(objWithXvalue("b"));

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
logNumberOfTheTask(50);

const objWithXkeyYvalue = (a: string, b: string): StringValObj => ({ [a]: b });

console.log(objWithXkeyYvalue("a", "b"));
console.log(objWithXkeyYvalue("z", "x"));
console.log(objWithXkeyYvalue("b", "w"));

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
logNumberOfTheTask(51);

const objWithArraysKeyValues = (
  a: (string | number)[],
  b: (string | number)[]
): StringOrNumberValObj => {
  let result: StringOrNumberValObj = {};
  a.forEach((item, index) => (result[item] = b.at(index)));
  return result;
};

console.log(objWithArraysKeyValues(["a", "b", "c"], [1, 2, 3]));
console.log(objWithArraysKeyValues(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(objWithArraysKeyValues([1, "b"], ["a", 2]));

// Write a function that takes an object (a) as argument
// Return an array with all object keys
logNumberOfTheTask(52);

const getKeys = (obj: NumberValObj): string[] => Object.keys(obj);

console.log(getKeys({ a: 1, b: 2, c: 3 }));
console.log(getKeys({ j: 9, i: 2, x: 3, z: 4 }));
console.log(getKeys({ w: 15, x: 22, y: 13 }));

// Write a function that takes an object (a) as argument
// Return the sum of all object values
logNumberOfTheTask(53);

const getSumOfValues = (obj: NumberValObj): number =>
  Object.values(obj).reduce((a, b) => a + b);

console.log(getSumOfValues({ a: 1, b: 2, c: 3 }));
console.log(getSumOfValues({ j: 9, i: 2, x: 3, z: 4 }));
console.log(getSumOfValues({ w: 15, x: 22, y: 13 }));

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
logNumberOfTheTask(54);

const withoutKeyB = (obj: NumberValObj): NumberValObj =>
  Object.fromEntries(Object.entries(obj).filter((pair) => pair[0] != "b"));

console.log(withoutKeyB({ a: 1, b: 7, c: 3 }));
console.log(withoutKeyB({ b: 0, a: 7, d: 8 }));
console.log(withoutKeyB({ e: 6, f: 4, b: 5, a: 3 }));

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
logNumberOfTheTask(55);

const mergeObjectsWithKeyD = (
  obj1: NumberValObj,
  obj2: NumberValObj
): NumberValObj => {
  //TO SUIT EXPECTED ANSWERS
  let tempB: NumberValObj = obj2;
  tempB["d"] = tempB["b"];
  delete tempB["b"];
  return { ...obj1, ...tempB };
  //WITH INITIAL ORDER
  // return {
  //   ...obj1,
  //   ...Object.fromEntries(
  //     Object.entries(obj2).map((pair) =>
  //       pair[0] == "b" ? ["d", pair[1]] : pair
  //     )
  //   ),
  // };
};

console.log(mergeObjectsWithKeyD({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(mergeObjectsWithKeyD({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
logNumberOfTheTask(56);

const mulitplyObjValues = (obj: NumberValObj, n: number): NumberValObj =>
  Object.fromEntries(Object.entries(obj).map((pair) => [pair[0], pair[1] * n]));

console.log(mulitplyObjValues({ a: 1, b: 2, c: 3 }, 3));
console.log(mulitplyObjValues({ j: 9, i: 2, x: 3, z: 4 }, 10));
console.log(mulitplyObjValues({ w: 15, x: 22, y: 13 }, 6));

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
logNumberOfTheTask(57);

const swapKeyAndValues = (obj: StringOrNumberValObj): StringValObj =>
  Object.fromEntries(Object.entries(obj).map((pair) => pair.reverse()));

console.log(swapKeyAndValues({ z: "a", y: "b", x: "c", w: "d" }));
console.log(swapKeyAndValues({ 2: "a", 4: "b", 6: "c", 8: "d" }));
console.log(swapKeyAndValues({ a: 1, z: 24 }));

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
logNumberOfTheTask(58);

const emptyAsNull = (obj: StringValObj): Record<string, string | null> =>
  Object.fromEntries(
    Object.entries(obj).map((pair) =>
      pair[1].trim() == "" ? [pair[0], null] : pair
    )
  );

console.log(emptyAsNull({ a: "a", b: "b", c: "" }));
console.log(emptyAsNull({ a: "", b: "b", c: " ", d: "d" }));
console.log(emptyAsNull({ a: "a", b: "b ", c: " ", d: "" }));

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
logNumberOfTheTask(59);

const addUnits = (obj: StringOrNumberValObj): StringValObj =>
  Object.fromEntries(
    Object.entries(obj)
      .map((pair) => {
        switch (pair[0]) {
          case "size":
            return [pair[0], pair[1] + "cm"];
          case "weight":
            return [pair[0], pair[1] + "kg"];
          case "fn":
          case "ln":
            return pair;
          default:
            return null;
        }
      })
      .filter((pair) => pair != null)
  );

console.log(
  addUnits({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
);
console.log(
  addUnits({
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  })
);
console.log(
  addUnits({ fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71 })
);
console.log(
  addUnits({
    fn: "Matthew",
    ln: "Müller",
    age: 19,
    email: "matthew@mueller.de",
  })
);

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array
logNumberOfTheTask(60);

const addContinent = (objects: StringValObj[], str: string): StringValObj[] =>
  objects.map((obj) => ({ ...obj, continent: str }));

console.log(
  addContinent(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
);
console.log(
  addContinent(
    [
      { city: "Stockholm", country: "Sweden" },
      { city: "Paris", country: "France" },
    ],
    "Europe"
  )
);

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
logNumberOfTheTask(61);

const occurrencesInTheArray = (arr: number[]): NumberValObj => {
  let result: any = {};
  for (let num of arr) {
    if (result[num]) {
      result[num] += 1;
    } else {
      result[num] = 1;
    }
  }
  return result;
};

console.log(occurrencesInTheArray([1, 2, 2, 3]));
console.log(occurrencesInTheArray([9, 9, 9, 99]));
console.log(occurrencesInTheArray([4, 3, 2, 1]));

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
logNumberOfTheTask(62);

const equalDates = (date1: Date, date2: Date): boolean =>
  date1.getTime() == date2.getTime();

console.log(
  equalDates(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
console.log(
  equalDates(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
console.log(
  equalDates(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
logNumberOfTheTask(63);

const dateDifferenceDays = (date1: Date, date2: Date): number =>
  Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

console.log(dateDifferenceDays(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(dateDifferenceDays(new Date("2000-01-01"), new Date("2020-06-01")));

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
logNumberOfTheTask(64);

const datesOnTheSameDay = (date1: Date, date2: Date): boolean =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

console.log(datesOnTheSameDay(new Date("2000/01/01"), new Date("2000/01/01")));
console.log(datesOnTheSameDay(new Date("2000/01/01"), new Date("2000/01/02")));
console.log(datesOnTheSameDay(new Date("2001/01/01"), new Date("2000/01/01")));
console.log(datesOnTheSameDay(new Date("2000/11/01"), new Date("2000/01/01")));

// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays
logNumberOfTheTask(65);

const arrayWithinAnother = (arr1: number[], arr2: number[]) => [
  ...arr1,
  ...arr2,
];

console.log(arrayWithinAnother([1, 2], [3, 4]));
console.log(arrayWithinAnother([1, 2], [3, 4, 5, 6]));

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element
logNumberOfTheTask(66);

const pushString = (arr: any[], str: string): any[] => [...arr, str];

console.log(pushString(["Apple", "Orange", "Banana"], "Kiwi"));

// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element
logNumberOfTheTask(67);

const unshiftString = (arr: any[], str: string): any[] => [str, ...arr];

console.log(unshiftString(["Apple", "Orange", "Banana"], "Kiwi"));

// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects
logNumberOfTheTask(68);

const mergeObjects = (
  obj1: NumberValObj,
  obj2: NumberValObj
): NumberValObj => ({
  ...obj1,
  ...obj2,
});

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string
logNumberOfTheTask(69);

const addMovie = (
  obj: StringOrNumberValObj,
  str: string
): StringOrNumberValObj => ({
  ...obj,
  favoriteMovie: str,
});

console.log(addMovie({ eyeColor: "green", age: 10 }, "Garfield"));
console.log(addMovie({ eyeColor: "blue", age: 15 }, "Twilight"));
