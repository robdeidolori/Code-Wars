
//my solution
function filter_list(l) {
  return l.filter(x=> x === +x)
}   


//alt solution:
function filter_list2(l){
    return l.filter(x=> typeof x == 'number')
}