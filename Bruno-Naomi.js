// add a parameter for number and then multiply it by itself three times

const calculateCube= (num)=>{
  console.log(num * num * num) 

}
calculateCube(5)


let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const isAVowel = (letter) => {
  // use indexOf method too loop through array
if (vowels.indexOf(letter.toLowerCase()) !== -1) {
    		return true;
	}
return false;
}
console.log(isAVowel('p'));

const getTwoLengths = (string1, string2)=>{
  // get length of the string
  let stringLen= []
  stringLen=[ (string1.length), (string2.length)] 
  return stringLen
}
console.log(getTwoLengths(Hank, Hippopopalous));


const getMultipleLengths = (arr) =>{
let i= 0
  // first loop through the array to get the strings
  for(let i=0; i<arr.length; i++)

  // i don't understand why I get undefined when I pass arr[i] to a variable eg
  //  var stringLen= arr[i].length 
  // console.log(stringLen)

     console.log(arr[i].length) 
 
  // the get length of each string
  // arr[i].length

  // convert result to array- don't know how to do this
}
console.log(getMultipleLengths([hello, what, is, up, dude]));


const maxOfThree =(x, y, z) =>{
  
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else 
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

// I gave up trying to use Math.max method to find largest number in array
console.log(maxOfThree(8, 9, 11));



const printLongestWord = (arr)=>{

  let word = ;
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}
console.log(printLongestWord([BoJack, Princess, Diane, a, Max, Peanutbutter, big, blob]));

// found the solution in stack overflow don't understand how it works


const transmogrify = (num1, num2, power)=>{
console.log (Math.pow(num1 * num2, power))
}
console.log(transmogrify(5, 3, 2));

// found the solution on github, don't really understand how it work
