//1 - Problem Solving w/ Functions
const calculateCube = (num) => console.log(num * num * num);
calculateCube(5);


//2 - Problem Solving w/ Functions
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isAVowel = (letter) => {
  if (vowels.includes(letter)) {
    return true;
  }
  return false;
}
isAVowel('b');

//3 - Problem Solving w/ Functions
const getTwoLengths = (string1, string2) => [string1.length, string2.length];
getTwoLengths('test', 'two');

//4 - Problem Solving w/ Functions
let wordLengths = [];

const getMultipleLengths = (arr) => {
  for(let string in arr) {
    console.log(arr[string]);
    wordLengths.push(arr[string].length);
  }
}

getMultipleLengths(['one', 'two', 'three']);

console.log(wordLengths);

//1 - Problem Solving w. functions pt 2

const maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3);

maxOfThree(1, 2, 3);

//2 - Problem Solving w. functions pt 2
const printLongestWord = (arr) => {
  let maxWordLength = 0;
  let largestWord = '';
  for(let word in arr) {
    currentWordLength = arr[word].length;
    if (maxWordLength < currentWordLength) {
      maxWordLength = currentWordLength;
      largestWord = arr[word];
    }
  }
  console.log(largestWord);
}

printLongestWord(['One', 'Two', 'Seventeen']);

//3 - Problem Solving w. functions pt 2
const transmogrify = (num1, num2, num3) => console.log((num1 * num2)**num3);

transmogrify(5,3,2);

//4 - Project Euler Problem 2
const fib = [0,       1,       1,       2,       3,
        5,       8,      13,      21,      34,
       55,      89,     144,     233,     377,
      610,     987,    1597,    2584,    4181,
     6765,   10946,   17711,   28657,   46368,
    75025,  121393,  196418,  317811,  514229,
   832040, 1346269, 2178309];

const euler = (num) => {
  let nums = [];
  let arrayTotal = 0;
  for(let i = 0; i < num; i++) {
    if (fib[i] % 2 === 0) {
      nums.push(fib[i]);
    }
  }
  for(let num in nums) {
    arrayTotal += nums[num];
  }
  console.log(arrayTotal);
}

euler();

//5 - A Needle in the HayStack