
//my solution
function arrayDiff(a, b) {
  b.forEach((x,i)=>{
    for (let j = 0; j < a.length; j++){
        if (x === a[j]){
            a.splice(j, 1);
            j--;
        }
    }
  })
  return a;
}

//best solution
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }