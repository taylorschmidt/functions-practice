//question 1, Calculate the Cube

const calculateCube = (num) => {
  console.log(num*num*num);
};
calculateCube(5);


//question 2, Is a Vowel?

const letters = ['a','e','i','o','u'];

 const isAVowel = (vowels) => {
  if (letters.includes(vowels)) {
    console.log("true");
  } else {
    console.log("false");
  }
 }
console.log(isAVowel("a"));

// const isAVowel = (letter) => {
//   if (letter === "a" ||"e" || "i" ||"o" || "u") {
//     console.log("true");
//   } else {
//     console.log("false")
//   }
// console.log(isAVowel("a");
//this this might work but nooooopppeeee


//question 3, get two lengths

const getTwoLengths = (parameter1, parameter2) =>
[parameter1.length, parameter2.length]; 
console.log(getTwoLengths("testing", "ok"));

//used this website: https://www.w3schools.com/js/js_function_parameters.asp


//question 4, get multiple lengths


let arr = ["these", "are", "multiple", "lengths", "wee"];
for ( var i = 0; i < arr.length; i++) {
  if (arr[i].length >= 1) {
     console.log(arr[i].length);
  }
}
//this took me 4 hours. >_<.  website used https://stackoverflow.com/questions/47520543/return-multiple-strings-from-an-array-of-strings-in-javascript


//Problem Solving w/ functions part 2


//question 1 Maximum of Three Numbers

function maxOfThree(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    answer.push(Math.max(...arr[i]))
  }
  return answer
}
maxOfThree([[4,7,30,57]])

//question 2 Print Longest Word

function printLongestWord(...strs) {  //  ...  syntax allows us to represent an indefinite number of arguments as an array.
  return strs.sort(function(a, b) {return b.length - a.length})[0];
}

console.log(printLongestWord('BoJack', 'Princess', 'MacNCheese'));

//question 3 Transmogrify the Numbers


//var z = (x * y);
// var pow = p

// console.log(z)

// math.pow(z) or you can do ** used https://github.com/TaylorDarneille/functions-practice


const transmogrify = (num1, num2, num3) => {
    console.log((num1 * num2)**num3);
}

console.log(transmogrify(5, 3, 2));


//question 4. Project Euler Problem 2

//extremmelly confused with this one


//question 5 A Needle in the Haystack'


const findNeedle = (arr) => {
  for(let word in arr) {
    if (arr[word] ==='needle') {
      console.log('found the needle at postition', + word); //tried using .indexOf but didnt work
    }
  }
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);


//question 6 

var array = [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52 ],
    positive = array.filter(function (a) { return a >= 0; }),
    sum = positive.reduce(function (a, b) { return a + b; });

console.log(sum);


//source:
//https://stackoverflow.com/questions/40227381/how-to-target-e-negative-number-from-an-array-and-get-the-sum-of-all-positive-n