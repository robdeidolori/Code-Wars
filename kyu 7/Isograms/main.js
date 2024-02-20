//my solution
function isIsogram(str){
    let strLowerCase = str.toLowerCase();

    for(let i = 0; i < strLowerCase.length; i++){
        for(let j = 1; j < strLowerCase.length - i; j++){
            if (strLowerCase[i] === strLowerCase[i + j]){
                return false
            }
        }
    }
    return true;
}

//best solution:
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
//(.size returns number of unique elements in a Set)