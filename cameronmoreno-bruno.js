//1
const calculateCube = (num) => console.log(num * num * num);
calculateCube(5);

//2
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isAVowel = (letter) => {
  if (vowels.includes(letter)) {
    return true;
  }
  return false;
}
isAVowel('b');