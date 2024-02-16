//my solution (recursion):
function persistence(num) {
    let counter = 0;

    function multiply(num){
      let numArray = num.toString().split('').map(x=> + x);
       
      if (numArray.length === 1){
            return;
        }else{
            counter++;
            let newNum = numArray.reduce((a, c) => a * c, 1);

            multiply(newNum);
        }
    }

    multiply(num);
    return counter;
}


//cleaner:
function persistence1(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }

 //cleaner still:
 function persistence2(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 }