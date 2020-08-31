//1. Worked with group during lab
function calculateCube(size){
    return Math.pow(size,3);
}

console.log(calculateCube(6))

//2. Worked with group during lab
function isAVowel(char){
    const vowelList = ["a","e","i","o","u",'A','E','I','O','U'];
    for(letter of vowelList){
      if (letter === char.toLowerCase()){
        return true;
      }
    }
    return false;
  }

console.log(isAVowel("1"))

//3. Worked with group during lab
function getTwoLengths(str1,str2){
    return [str1.length,str2.length];
  }
  
console.log(getTwoLengths("Hank", "Hippopopalous"));

//4. Worked with group during lab
function getMultipleLengths(wordList){
    var toRet = [];
    for(word of wordList){
        toRet.push(word.length);
    }
    return toRet;
    }
    
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//Part2

//1. Worked with group during lab
function maxOfThree(n1,n2,n3){
    const nums = [n1,n2,n3];
    var max = nums[0];
    for(var i = 1; i < nums.length; i++){
      if (max < nums[i]){
        max = nums[i];
      }
    }
    return max;
  }
  
console.log(maxOfThree(6, 9, 1));

//2. Worked with group during lab
function printLongestWord(wordList){
    var maxL = wordList[0].length;
    var maxS = wordList[0]
    for(var i = 1; i < wordList.length; i++){
      if (maxL < wordList[i].length){
        maxL = wordList[i].length;
        maxS = wordList[i];
      }
    }
    return maxS;
  }

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
  
//3. Worked with group during lab
function transmogrify(num1,num2,pow){
    return Math.pow((num1 * num2),pow)
}

console.log(transmogrify(5, 3, 2));
 
//4. Worked with group during lab
//4 - Part 1
function fibonacci(num){
    var seqStart = [1,2];
    if (num === 0){
      return seqStart[0]
    }else if(num === 1){
      return seqStart[1]
    }else{
      var i = 2;
      while(num >= seqStart[i-2] + seqStart[i-1]){
        seqStart.push(seqStart[i-2] + seqStart[i-1]);
        i++;
      }
    }
    return getSumOfListEvenLEFourMil(seqStart);
  }

  console.log(fibonacci(21));

  // 4 - Part 2
  function getEvens(numList){
      var toRet = [];
      for(num of numList){
          if (num % 2 == 0){
              toRet.push(num);
          }
      }
      return toRet;
  }

  console.log(getEvens(fibonacci(5)))

  // 4 - Part 3
  function getSumOfList(numList){
    var toRet = 0;
    for(num of numList){
        toRet += num;
    }
    return toRet;
  }

  console.log(getSumOfList((fibonacci(5))))

  // 4 - Part 4
  function getSumOfListEvenLEFourMil(numList){
    var nnumList = getEvens(numList);
    var toRet = 0;
    for(num of nnumList){
        if (num < 4000000){
            toRet += (num);
        }
    }
    return toRet;
  }

  console.log(getSumOfListEvenLEFourMil((fibonacci(5)))) 

//5.
function findNeedle(wordList){
    for(var i = 0; i < wordList.length; i++){
        if (wordList[i] === "needle"){
            return "Found the needle at position " + i;
        }
    }
    return "Not in list";
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

//6.
function sumPos(numList){
    var toRet = 0;
    for(num of numList){
        if(num > 0){
            toRet += num;
        }
    }
    return toRet;
}

console.log(sumPos([1, -4, 7, 12]))