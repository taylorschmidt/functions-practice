//Excercise # 1
const multiply = (num1, num2) => {
    console.log(num1 * num2)
}
multiply (25*5)




//Excercise # 2
function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

// See if "A" is a vowel
var char = "A";

if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}




//Excercise # 3
const getTwolengths = (string1,string2) => {
  let arr = [string1.split('').length, string2.split('').length]
  return arr
}

console.log(getTwolengths("Hank", "Hippopopalous"));

//Exercise # 4

 const getMultpleLenghts = (arr) => {

   var num = []; 
   var numLet = ""; 

let i =0;
   while ( i < arr.length) {
     numLEt = arr[i].split ('')
     nu.push(numLet.length)
     i++
   }
return num 
}


console.log(getMultiplelengths(["hello", "what", "is", "up", "dude"]));




//part 2 

//Excercise 1:
function maxOfThree (num1, num2, num3) {     
        return Math.max (num1, num2, num3); 
    }
      
    console.log (maxOfThree (6,9,3));

    //Excercise 2: 



    printLongestWord = (arr) => {

       arr.sort(a,b) b.length - a.length)
       return arr[0] 
    }

    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

    //Excerise 3

    transmogrify = (num1, num2, num3)  => {
      return Math.pow(num1 * num2, num3)
    }

    console.log (transmogrify (5,3,2));



    //Project Euler Problem 2 

   // get the fib seq
  for(let i = 0; i < 100; i++){
      if(arr[arr.length - 1] <= limit){
        if(i > 1){
          arr.push(arr[i - 1] + arr[i - 2]);
        } else{
          arr.push(i)
        }
      }
  }
// get the even
  for(index of arr){
    if(index % 2 === 0){
      evenArr.push(index)
    }
  }
// get the sum of all
  let sum = arr.reduce((acc, current) => {
    return acc + current;
  });
// gettig the sum of the evens
  let sumEven = evenArr.reduce((acc, current) => {
    return acc + current
  })
return sumEven;
}
console.log(fib(40))



// Excercise # 5

const findNeedle = (arr) => {
  if(arr.indexOf("needle") !== -1 ){
        return "found the needle at position " + arr.indexOf("needle")
  }
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

//Excersice # 6 


//I did not even know where to start with this.  This is my problem, Idk what function to best use and then I get fustrated I can code but can't tell what and why I'm doing something. 