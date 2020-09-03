// #######
// Parts 1-3 worked on with Gabby Tam at end of lab time --DLinden
// ########

//Part 1: 1 Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(num) {
    //console.log(num*num*num);
    return Math.pow(num, 3);
    //using built in exponent method 
    //console.log(Math.pow(num,3));
  }
  console.log(calculateCube(5));
  
  
  
  // Part 1: 2 Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
  // a, e, i, o, u
  function isAVowel(a) {
    if (a === 'a' || a === 'e' || a === 'i'|| a === 'o' || a === 'u'){
      return true;
    } else {
      return false;
    }
  }
  
  //this works but its not efficient 
  console.log(isAVowel('e'));
  
  
  //Part 1: 3 Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
  
  function getTwoLengths(first, second) {
    let arrayNum= [];
    arrayNum.push(first.length);
    arrayNum.push(second.length);
    return arrayNum;
  }
  //but why is in not .length-1?? 
  //answer: -1 and +1 comes into play when you are using for loops, declaring your variable at 0 or at 1 will make a difference as to what add on youll need to .length property 
  // .length counts string and arrays starting at index 0
   
  console.log(getTwoLengths("Hank", "Hippopopalous"));
  
  // Part 1: 4 Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array of strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.
  
  const getMultipleLengths = (arr) => {
  let numArr = []
  arr.forEach(item => numArr.push(item.length))
  return numArr
  }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  
  //Part 2: 1
  // ## Maximum of Three Numbers
  // Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
  
  const maxOfThree = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
  }
  
  console.log(maxOfThree(6, 9, 1));
  
  // Part 2: 2
  // ## Print Longest Word
  // Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
  const printLongestWord = (arrStr) => {
    arrStr.forEach(item =>  console.log(arrStr[item.length]))
    
  }
  /*
  #######
  Still struggling at times to even run through arrays, particularly strings, let alone find and return specific values. Requires more review. Reading through some search results, it seems like perhaps the reduce  method, but I don't quite understand how that works.
  --DLinden
  #######
  */
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
  
  // Part 2: 3
  // ## Transmogrify the Numbers
  // Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
  
  // The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
  
  // For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
  // power of 2` is 225.
  
  const transmogrify = (x, y, z) => {
    return Math.pow((x*y), z)
  }
  
  console.log(transmogrify(5, 3, 2));
  
  // Part 2: 4
  // ## Project Euler Problem 2
  // [Project Euler problem #2](https://projecteuler.net/problem=2)
  
  // * Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
  const fib = (num) => {
    let start = 1
    while (start != num) {
      console.log(
    }
  }
  
  fib(13)
  /*
  Need more time/review to figure out how to sequence integers in a specific way like this
  --DLinden
  */
  
  
  // Part 2: 5
  // ## A Needle in the Haystack
  
  // Write a function `findNeedle()` that takes an array full of junk but contains one `"needle"`
  
  // After your function finds the needle it should return a message (as a string) that says:
  
  // `"found the needle at position"` plus the index it found the needle so:
  const findNeedle = (arrJunk) => {
    arrJunk.find(element => element = "needle")
    console.log("Found the needle at position", arrJunk.indexOf("needle"))
  }
    
  
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  
  // Should return:
  
  // `"found the needle at position 5"`
  
  // # 6 
  // ## Sum the Positive
  
  // Given an array, return the sum of only the positive numbers
  
  const sumPositive = (arrNum) => {
    let arrPos = []
    arrNum.forEach(item => (item % 2 === 0))
   //grabbed the sum code from https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    var sum = arrPos.reduce(function(a, b){
          return a + b;
      }, 0);
      
      return sum
  }
  /*
  Not quite there. Need to review how to write array loops to grab certain elements that meet certain conditions in order to sum only the requested integers.
  */
  sumPositive([1, -4, 7, 12]) 
  // => 1 + 7 + 12 = 20