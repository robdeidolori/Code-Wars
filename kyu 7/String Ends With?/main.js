//my solution
function solution(str, ending){
    let strArr = str.split('').reverse()
    let endArr = ending.split('').reverse()
    
    for (let i = 0; i < endArr.length; i++){
      if (strArr[i] !== endArr[i]){
        return false
      }
    }
    return true;
  }

//better solution:
function solution(str, ending){
    return str.endsWith(ending);
  }