//my solution:
function squareDigits(num){
    let arr = num.toString().split('')

    return Number(arr.map(x => x * x).join(''))
  }

//can combine onto one line:

function squareDigits(num){
    return Number(num.toString().split('').map(x => x * x).join(''))
  }
