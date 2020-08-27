
//Part 1
//#1
//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(num) {
    console.log(Math.pow(num, 3))
  }
  calculateCube(2)
  
  //#2
  //Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
  
  function isAVowel(letter) {
    if (letter === 'a') {
      return true
    } else if (letter === 'e'){
      return true
    } else if (letter === 'i') {
      return true
    } else if (letter === 'o') {
      return true 
    } else if (letter === 'u') {
      return true
    } else {
      return false
    }
  }
  console.log(isAVowel('a'))
  
  //#3
  //Write a function getTwoLengths that accepts two parameters (strings). 
  //The function should return an array of numbers where each number is the length of the corresponding string.
  
  function getTwoLengths(str1, str2) {
   let length = [];
   length.push(str1.length)
   length.push(str2.length)
   return length
  }
  console.log(getTwoLengths("hi", "hello"))
  
  //#4
  // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
  
  function getMultipleLengths(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[i].length) 
    }
    return newArray
  }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
  
  //Part 2
  //#1
  //Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
  
  function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1
    } else if (num2 > num1 && num2 > num3) {
  return num2 
   } else if (num3 > num2 && num3 > num1) {
      return num3
    } else {
      return num1
    }
  } 
  console.log(maxOfThree(1, 2, 3))
  
  //#2
  //Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
  
  function printLongestWord(arr) {
   let longestWord = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i]
      }
    }
    return longestWord
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))
  
  //#3
  //Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
  // The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
  // For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
  
  function transmogrify(num1, num2, num3) {
    return Math.pow((num1*num2), num3)
  }
  console.log(transmogrify(5, 3, 2));
  
  //#4
  // Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
  // Adjust the function to push the even numbered values into an array.
  // Adjust the function to return the summed value of the array.
  // Find the sum of the even numbered values that do not exceed four million.
  function fibonacci(num) {
      let array = [1, 2]
      let even = [2]
      while (num >= array[array.length-1] + array[array.length-2]){
          array.push(array[array.length-1] + array[array.length-2])
          if(array[array.length - 1] % 2 === 0 && array[array.length - 1] < 4000000) {
              even.push(array[array.length - 1] )
          }
      } 
      return even.reduce((a, b) => a + b, 0)
  }
  console.log(fibonacci(120))
  
  
  
  
  
  
  //#5
  //Can you find the needle in the haystack?
  // Write a function findNeedle() that takes an array full of junk but contains one "needle"
  // After your function finds the needle it should return a message (as a string) that says:
  // "found the needle at postition" plus the index it found the needle so:
  // findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  
  function findNeedle(arr) {
    console.log ('found the needle at position ' + arr.indexOf('needle'));
  }
  
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  
  //#6
  //Given an array, return the sum of only the positive numbers
  function sumPos(arr) {
    return arr.reduce(function(accum,current){
      if (current>0) {
        return accum + current;
      } else {
        return accum;
      }
    }, 0)
  }
 console.log(sumPos([1, -4, 7, 12]))