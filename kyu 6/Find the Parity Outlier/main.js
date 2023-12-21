// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)




function findOutlier(integers){
    let absIntegers = integers.map(x => Math.abs(x))
   let first = absIntegers[0];
    if(first % 2 === absIntegers[1] % 2 || first % 2 === absIntegers[2] % 2){
      var outlier = absIntegers.find(x => x % 2 !== first % 2);
      var outlierIndex = absIntegers.findIndex(x => x % 2 !== first % 2);
    } else{
      var outlier = first;
      var outlierIndex = 0;
    };
    if (outlier !== integers[outlierIndex]){
      outlier = -outlier;
    };
    return outlier; 
  }

  //better solutions:

//   function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }

//even better because it uses only one loop:

// function findOutlier(integers){
//     let odds = [];
//     let evens = [];
    
//     for(let integer of integers) integer % 2 === 0 ? evens.push(integer) : odds.push(integer);
    
//     return odds.length === 1 ? odds[0] : evens[0];
    
//   }