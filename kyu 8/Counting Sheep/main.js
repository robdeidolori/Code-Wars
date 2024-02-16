//my solution:
function countSheeps(sheep) {
    let count = 0;
    sheep.forEach(x=>{
      if (x === true){
        count++;
      }
    })
    return count;
  }

  //alternative:
  function countSheep(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }