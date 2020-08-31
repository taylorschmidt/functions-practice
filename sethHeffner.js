// 1. Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (n) =>{
  console.log(n*n*n)
}
calculateCube(3)

// 2. Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// const isAVowel = (s) => { 
//   function vowelTest(s) {
//     return (/^[aeiou]$/i).test(s);
//     // console.log(animal)
//   }
// }

// console.log(isAVowel())


// function vowelTest(s) {
//   return (/^[aeiou]$/i).test(s);
// }

// console.log(vowelTest())

let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const isAVowel = (letter) => {
  if (vowels.indexOf(letter.toLowerCase()) !== -1) {
    return true;
  }
  return false;
}
console.log(isAVowel('a'));



// 3. Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (string1,string2) => {
   let arr = [string1.split('').length, string2.split('').length]
   return arr

  console.log(string1.length, string2.length)
}

getTwoLengths('Name something else', 'Names')


// 4. Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]


const getMultipleLengths = (arr) => {

  var num = [];
  var numLet = '';

  let i = 0;
  while(i < arr.length){
    numLet = arr[i].split('')
    num.push(numLet.length)
    i++
  }
   return num
}



// getMultipleLengths(['This', 'is', 'an', 'array', 'of', 'strings'])

// I am having a hard time figuring out how to get my code to return the lenght of the strings in an array. I was thinking .split() or .slice() would do it, but they do not. 




// Part 2 Question 2 Courtesy of help from Trez Crawford and Edward Pizzaro

function printLongestWord(word) {
  let word1 = word[0]
    for (i = 0; i < word.length; i++) {
    if (word[i].length > word1.length) {
      word1 = word[i];
    }
  }
  return word1;
}
console.log(printLongestWord(arr));

// // Part 2 Question 3 courtesy of help from Trez Crawford

// //Transmogrify the Numbers/

const transmogrify = (num1,num2,num3) => {
    let newNum = num1 * num2;
    let newNum2 = Math.pow(newNum,num3)
return newNum2;
}
transmogrify(1,2,3)


transmogrify = (num1, num2, num3) => {
  return Math.pow(num1 * num2, num3)
}





// // Part 2 Question 5

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
findNeedle(['hay', 'junk', 'hay', 'needle', 'moreJunk', 'ne', 'randomJunk'])

printLongestWord = (arr) => {
  arr.sort((a,b) b.length-a.length)
}

// console.log(printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'blog']));

const fib = (limit) => {
  let arr = [ 0 ];
  // let eventArr = [];

  for(let i =0; i < 100; i++){
    if(arr[arr.length-1] <= limit){
      if(i > 1){
        arr.push(arr(i -1) + arr[i -2]);
      } else {
        arr.push(i)
      }
    }
  }

// return arr;

// }

// console.log(fib(40))


const findNeedle = (arr) => {

  if(arr.indexOf('needle') !== -1 ){
    return 'Found the needle at position ' + arr.indexOf('needle')
  }
}

console.log(findNeedle(['hey', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


let currentTemp = Math.floor(Math.random() * 100);
let desiredTemp = 70; 
let isDesiredTemp = false;

console.log('The Current Temperature is now ' + currentTemp + 'F')

// part for of this question uses a loop

while(!isDesiredTemp){
  if(desiredTemp === currentTemp) {
    isDesiredTemp = true
  } else if (currentTemp < desiredTemp) {
    currentTemp++
    console.log('The Current Temperature is now ' + currentTemp + 'F')
  } else if(currentTemp > desiredTemp){
    currentTemp--
    console.log('The Current Temperature is now ' + currentTemp + 'F')
    
  }
}