// CALCULATE CUBE

function calculateCube (num) {
    console.log(Math.pow(num, 3))
  }
  
  calculateCube(5)
  
  
  // IS A VOWEL
  
   function isAVowel(char) {
     var vowels = ['a', 'e', 'i', 'o', 'u','A','E','O','I','U']
  
     if (vowels.includes(char)) {
       return true
     } else {
       return false
     }
   }
   console.log(isAVowel('a'));
   console.log(isAVowel('b'));
  
  // GET TWO LENGTHS
  
   const getTwoLengths = (a, b) => {
    const lengths = []
    lengths.push(a.length)
    lengths.push(b.length)
    return lengths
   }
  
   console.log(getTwoLengths('pepperoni', 'pizza'))
  
   const getMultipleLengths = (array) =>{
    const lengths = [];
    for(let i =0;i<array.length;i++){
      lengths.push(array[i].length)
    }
    return lengths;
  }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  
  //MAX OF THREE
  
  const maxOfThree = (num,num1,num2) => {
    let max = num
    if (max < num1){
      max = num1
    } 
    if (max < num2){
      max = num2
    }
    return max
  }
  
  console.log(maxOfThree(1, 5, 10))
  console.log(maxOfThree(7, 5, 3))
  console.log(maxOfThree(4, 4, 4))
  console.log(maxOfThree(2, 99, 25))
  
  
  
  
  // PRINT LONGEST WORD
  
  function printLongestWord(array) {
  
    //declare maximum length variable
    let max = array[0].length
    //loop to find the max length
    for (let i = 1; i < array.length; i++){
      if (max < array[i].length) {
        max = array[i].length
      }
    }
    //loop through to find first word of max length
    for (let i = 0; i < array.length; i++) {
      if (array[i].length == max) {
        return array[i]
      }
    }
  }
  
  console.log(printLongestWord(['hey', 'whats', 'up', 'my', 'guyyy']))
  
  // TRANSMOGRIFY
  
  const transmogrify = (a, b, c) => {
    return Math.pow((a*b), c)
  }
  
  console.log(transmogrify(5, 3, 2))
  
  // EULER
  
  function euler(num) {
  
    const evens = []
  
    //declare the two numbers that we'll need to sum every step of the sequence
    let a = 0
    let b = 1
    console.log(a)
    console.log(b)
  
    //declare a copy to help assign both above values and move through fib
    let copy = 0
  
    //calculate fib up to the num argument, b will equal the highest number reached in fib
    while(num > b){
      copy = b
      b = a + b
      a = copy
  
    //conditional to make sure a value higher than the argument is not printed
      if (b > num){
        break
      }
  
      if (b % 2 == 0){
        evens.push(b)
      }
    
      console.log(b)
    }
      console.log(evens)
  
      //loop to sum evens array
    let sums = 0
    for (let i = 0; i < evens.length; i++){
      //ensure a number above 4 mil is not summed
      if (evens[i] > 4000000){
        break
      }
      sums += evens[i]
    }
    console.log(sums)
  
  }
  
  
  euler(300)
  euler(9000)
  euler(120000)
  
  //FIND NEEDLE
  
  function findNeedle(array){
    for(let i = 0; i < array.length; i++){
      if (array[i] === 'needle'){
        return 'found the needle at position ' + i
      }
    }
  }
  
  console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))
  
  //SUM POSITIVE
  
  const sumPositive = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++){
      if (array[i] > 0){
        sum += array[i]
      }
    }
    return sum
  }
  
  console.log(sumPositive([1, -4, 7, 12]))