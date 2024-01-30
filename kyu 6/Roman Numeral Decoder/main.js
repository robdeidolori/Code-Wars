
//my solution:
function solution (roman) {

    let arr = roman.split(" ");
    var counter = 0;
    let len = arr.length;
    
    for(let i = 0; i < len; i++){
        if(arr[i] === "M"){
          arr[i] = 1000;
        }else if (arr[i] === "D"){
          arr[i] = 500;
        }else if (arr[i] === "C"){
          arr[i] = 100
        }else if(arr[i] === "L"){
          arr[i] = 50
        }else if(arr[i] === "X"){
          arr[i] = 10;
        }else if(arr[i] === "V"){
          arr[i] = 5;
        }else if(arr[i] === "I"){
          arr[i] = 1;
        }
      }

    for(let i = 0; i < len; i++){
        if(arr[i] < arr[i + 1]){
            counter+= arr[i + 1] - arr[i];
            i++;
        }else{
            counter+= arr[i];
        }
    }
    
      return counter;
  }

  console.log(solution("XXI"))

   //best solution:
   //create an object to compare to array of strings

   function solution(roman)
{
	var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

	for(i = 0; i < numbers.length; i++)
  {
  	if(data[numbers[i]] < data[numbers[i+1]])
    {
    	sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else
    {
    	sum += data[numbers[i]];
    }
  }
  
  return sum;
}