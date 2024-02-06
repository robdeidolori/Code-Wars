function pickPeaks(arr){
    
    let obj ={
    pos: [],
    peaks: [],
    }

    arr.forEach((x,i)=>{
        if(i !== 0 && i !== arr.length - 1){
            if(x > arr[i - 1]){
                if(x > arr[i + 1]){
                obj.pos.push(i);
                obj.peaks.push(x);
                }else if (x === arr[i + 1]){
                   for ( j = 2; (j + i) < arr.length; j++){
                    if ( x < arr[j + i]){
                        return;
                    }else if ( x > arr[j + i]){
                        obj.pos.push(i);
                        obj.peaks.push(x);
                        return;
                    }
                   }
                }
            }
        }
    })
    return obj;
}



