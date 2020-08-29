/* PART ONE */
/* 1 Calculate the Cube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
  console.log(calculateCube(5));
  => 125 */

  const calculateCube = (num) => {
    console.log(Math.pow(num,3))
   }
   
   calculateCube(5)
   
   
   /*2 Is a Vowel?
   Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
     console.log(isAVowel("a"));
     => true */
   
   let vowels = ['a','e','i','o','u','A','E','I','O','U']
   
   const isAVowel = (letter) => {
     if(vowels.indexOf(letter.toLowerCase()) !==-1) {
       return true
     }
       return false
     }
   console.log(isAVowel('a'))
   
   
   //First answer
   // const isAVowel = (letter) => {
   //  if ((letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') || (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U')){
   //     return true
   //   } else {
   //     return false
   //   }
   // }
   
   
   /*3 Get Two Lengths
   Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
   
   console.log(getTwoLengths("Hank", "Hippopopalous"));
   => [4, 13] */
   
   const getTwoLengths = (str1, str2) => {
     let str1arr = str1.split('')
     let str2arr = str2.split('')
     let numLetters = [str1arr.length,str2arr.length]
     return numLetters
   }
   
   console.log(getTwoLengths('Hank','Hippopopalous'))
   
   /*4 Get Multiple Lengths
   Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
   
   console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
   => [5, 4, 2, 2, 4] */
   
   const getMultipleLengths = (arr) => {
     let numArr = []
     let numLet = ''
     let i = 0
     while (i < arr.length) {
       numLet = arr[i].split('')
       numArr.push(numLet.length)
       i++
   }
   return numArr
   }
   
   console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']))
   
   /* PART TWO */
   
   /*1 Maximum of Three Numbers
   Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
   
   console.log(maxOfThree(6, 9, 1));
   => 9 */
   
   const returnMax = (a, b) => {
     if (a > b) {
       return a
     } return b
   }
   
   const maxOfThree = (n1, n2, n3) => {
     let currentMax = 0
     maxOne = returnMax(n1,n2)
     currentMax = returnMax(maxOne, n3)
     return currentMax
   }
   
   //First Answer 
   // const maxOfThree = (n1, n2, n3) => {
   //   let currentMax = 0
   //   if (n1 > n2) {
   //     currentMax = n1
   //   } else {
   //     currentMax = n2
   //   }
   
   //   if (currentMax > n3) {
   //     return currentMax
   //   } else {
   //     return n3
   //   }
   // }
   
   console.log(maxOfThree(6, 9, 1))
   
   /*2 Print Longest Word
   Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
   
   console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
   => "Peanutbutter" */
   
   const printLongestWord = (arr) => {
     let numArr = getMultipleLengths(arr)
     let newMax = 0
     let i = 0
     let longWord = arr[i]
   
     const retNewMax = (max) => {
       return max >= newMax
     }
   
     while (i < numArr.length){
       let numMax = returnMax(numArr[i], newMax)
       newMax = numMax
       if(numArr[i] === newMax){
       let index = numArr.findIndex(retNewMax)
        longWord = arr[index]
       }
       i++
     } 
     return longWord
   }
   
   console.log(printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'blob']))
   
   //array.find() // will return first one
   //array.filter() // will return all matches
   //array.findIndex() // will return index
   
   //It works now! Woo-hoo!
   console.log(printLongestWord(['abc', '1bcde', 'a', '2bcde', 'bc', 'efg']))
   
   /*3. Transmogrify the Numbers
   Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
   
   The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
   
   For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
   
   console.log(transmogrify(5, 3, 2));
   => 225 */
   
   const transmogrify = (num1,num2,num3) => {
     let product = num1*num2
     return Math.pow(product,num3)
   }
   
   console.log(transmogrify(5, 3, 2))
   
   
   
   /*4. Project Euler Problem 2
   Project Euler problem #2
   
   Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
   
   Adjust the function to push the even numbered values into an array.
   
   Adjust the function to return the summed value of the array.
   
   Find the sum of the even numbered values that do not exceed four million. */
   
   //Standard Fibonacci
   
   const fibonacci = (num) => {
   let i = 0
   let j = 1
   let k = 1
   let fibArr = [1,1]
   while (i <= num && j<=num && k<=num) {
     i = j + k
     if (i<= num) fibArr.push(i)
     if (i > num) return fibArr
     j = k + i
     if (j<= num) fibArr.push(j)
     if (j > num) return fibArr
     k = i + j
     if (k <= num) fibArr.push(k)
     if (k > num) return fibArr
     i++
   }
   return fibArr
   }
   
   console.log(fibonacci(500))
   
   //Even numbers only
   
   const evenFib = (num) => {
   let i = 0
   let j = 1
   let k = 1
   let fibArr = []
   while (i <= num && j<=num && k<=num) {
     i = j + k
     if (i % 2 === 0 && i <= num) fibArr.push(i)
     if (i > num) return fibArr
     j = k + i
     if (j % 2 === 0 && j <= num) fibArr.push(j)
     if (j > num) return fibArr
     k = i + j
     if (k % 2 === 0 && k <= num) fibArr.push(k)
     if (k > num)return fibArr
     i++
   }
   return fibArr
   }
   
   console.log(evenFib(500))
   
   //Even summed array
   
   const evenFibSum = (num) => {
   let i = 0
   let j = 1
   let k = 1
   let total = 0
   while (total <= num) {
     i = j + k
     if (i % 2 === 0 && total <= num) total += i
     if (total > num) {
       total -= i
       return total
     }
     j = k + i
     if (j % 2 === 0 && total <= num) total += j
     if (total > num) {
       total -= j
       return total
     }
     k = i + j
     if (k % 2 === 0 && total <= num) total += k
     if (total > num){
       total -= k
       return total
     }
     i++
   }
   return total
   }
   
   console.log(evenFibSum(4000000))
   
   /* 5
   A Needle in the Haystack
   From Codewars
   
   Can you find the needle in the haystack?
   
   Write a function findNeedle() that takes an array full of junk but contains one "needle"
   
   After your function finds the needle it should return a message (as a string) that says:
   
   "found the needle at postition" plus the index it found the needle so:
   
   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
   
   Should return:
   
   "found the needle at position 5" */
   
   const findNeedle = (arr) => {
     for (i = 0; i < arr.length; i++) {
       if (arr[i] === 'needle') console.log(`found the needle at position ${i}`)
     } 
   }
   
   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
   
   /* 6 Sum the Positive
   From Codewars
   
   Given an array, return the sum of only the positive numbers
   
   [1, -4, 7, 12] => 1 + 7 + 12 = 20 */
   
   const sumPositive = (arr) => {
     let total = 0
     for (i=0; i < arr.length; i++){
       if (arr[i] > 0) total += arr[i]
     }
     return total
   }
   
   console.log(sumPositive([1, -4, 7, 12]))