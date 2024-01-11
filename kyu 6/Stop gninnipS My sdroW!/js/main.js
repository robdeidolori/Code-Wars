// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


//best solution

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

//.reverse reverses the order of an array

//no good

// function spinWords(string){
//     let words = string.split(" ");
//     let spun = words.forEach( (x) =>{
//       if (x.length >= 5){
//         for(let i = 0; i < x.length; i++){
//           x[i] = x[x.length - (i+1)]
//         }
//       }
//     });
//     let newString = spun.join(" ");
//     return newString;
//   }
