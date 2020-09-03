// --- PROBLEM SOLVING WITH FUNCTIONS -- PART ONE ---
// 1. CALCULATE THE CUBE 
function calculateCube (num) {
    return Math.pow(num, 3)
  }
  console.log(calculateCube(5)) // 125
  
  // 2. IS A VOWEL? 
  function isAVowel (char) {
    char = char.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true
    } else {
      return false 
    }
  }
  console.log(isAVowel("a")); // => true
  
  // 3. GET TWO LENGTHS
  function getTwoLengths (para1, para2) {
    return [para1.length, para2.length]
  }
  console.log(getTwoLengths("Hank", "Hippopopalous")); // => [4, 13]
  
  // 4. GET MULTIPLE LENGTHS 
  let newArray = new Array()
  function getMultipleLengths (stringarray) {
    for (let i = 0; i < stringarray.length; i++) {
      newArray.push(stringarray[i].length)
    }
   return newArray
  }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // => [5, 4, 2, 2, 4]
  
  // --- PROBLEM SOLVING WITH FUNCTIONS -- PART TWO ---
  // 1. MAXIMUM OF THREE NUMBERS 
  function maxOfThree (num1, num2, num3) {
    return Math.max(num1, num2, num3)
  }
  console.log(maxOfThree(6, 9, 1)); // 9
  
  // 2. PRINT LONGEST WORD 
  let newArray2 = new Array()
  function printLongestWord (stringarray2) {
    for (let i = 0; i < stringarray2.length; i++) {
      newArray2.push(stringarray2[i].length)
    } var max = Math.max.apply(null,newArray2) 
    //return max
    for (let i = 0; i<stringarray2.length; i++) {
      if (stringarray2[i].length === max) {
        return stringarray2[i]
      }
    }
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
  // MORE EFFICIENT METHOD FOR THIS PROBLEM -- a friend talked me through how to write a shorter code for this, so i won't take credit for it, but jotting it here for reference! :)
  // function printLongestWordEasier(stringArray) {
  //   var longestWord = "";
  //   for (let i = 0; i < stringArray.length; i++) {
  //     if(stringArray[i].length > longestWord.length){
  //       longestWord = stringArray[i];
  //     }
  //   }
  //   return longestWord;
  // }
  
  // 3. TRANSMOGRIFY THE NUMBER
  function transmogrify (num1, num2, num3) {
    return Math.pow(num1 * num2, num3)
  }
  console.log(transmogrify(5, 3, 2)); // 225
  
  // 4. PROJECT EULER PROBLEM 2
  let fibArray = [1, 2]
  let even = [2]
  function fibonacci (num) {
    while (num >= fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]) {
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
      if (fibArray[fibArray.length - 1] % 2 === 0 && fibArray[fibArray.length - 1] < 4000000) {
        even.push(fibArray[fibArray.length - 1])
      }
    } console.log(fibArray)
    return even.reduce(function(a, b) {
      return a + b}, 0)
    }
  fibonacci(4000) // should print the sequence up to that inputted number 
  
  // my thought process: when working on the fibonacci question, i first created two arrays. one to store the numbers for the fibonacci sequence and two to store the even numbers.
  //i initially used a method where i declared 3 variables (declared at 1, 1, and 0) and then made a for loop to have the first number and second number added, then store that into the third variable. then this would repeat within the loop until the inputted number (in the function argument) is reached.
  // after that, i created a conditional statement for storing the even numbers into the second array for even numbers. unfortunately my sequence was not stopping at the input (e.x. if the number plugged into the function was 89, it kept going...) i looked through methods on google.
  // eventually i saw justin share his code in slack and it was way cleaner than mine, so i rewrote mine similar to his which makes a lot more sense. i realize i was not limiting the length of the array based on the inputted number, which is what he did in his while loop.
  
  // 5. A NEEDLE IN THE HAYSTACK
  function findNeedle(junkarray) {
    for (let i = 0; i < junkarray.length; i++) {
      if (junkarray[i].match('needle')) {
        console.log('found the needle at position', i)
      }
    }
  }
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) //"found the needle at position 5"
  
  // 6. SUM THE POSITIVE
  let posarray = new Array()
  function sumPositive (numarray) {
    for (let i = 0; i < numarray.length; i++) {
      if (Math.sign(numarray[i]) === 1) {
        posarray.push(numarray[i])
      }
    } return posarray.reduce(function(a, b) {
      return a + b }, 0)
  }
  sumPositive([1, -4, 7, 12])