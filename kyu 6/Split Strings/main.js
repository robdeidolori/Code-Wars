// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//my solution
function solution(str){

    let letters = str.split('');
    let limit = letters.length;
    var newArr = [];
    
    for(let i = 0; i < limit; i += 2){
      if(i + 2 > limit){
          newArr.push(`${letters[i]}_`);
          return newArr;
      }else{
          newArr.push(`${letters[i]}${letters[(i+1)]}`);
        }
    }
    return newArr;
  }

 //more efficient solution:
 //(because loop does not have to check first condition from my solution each time)
 function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }