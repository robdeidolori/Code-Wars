
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.




function count(string) {
    const count = string.split('').reduce((obj, character)=>{
      if(!obj[character]){
        obj[character] = 0
      }
      obj[character]++;
      return obj;
    }, {})
    return count;
  }



  //alternate solution from another user:
  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }