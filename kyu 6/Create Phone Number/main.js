// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


//My Solution:
let number1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function createPhoneNumber(numbers){
    numbers.splice(6, 0, `-`);
    numbers.splice(3, 0, `) `);
    numbers.unshift(`(`);
    return numbers.join('');
  }

  console.log(createPhoneNumber(number1))


//Other solutions:
//1.
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

//2.
function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }

  //3. less elegant but extremely fast:
  function createPhoneNumber(numbers){
    var n = numbers;
    return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
  }