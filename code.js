function flip(array, n) {
    
    var tempArray = [0];
    if (n > array.length){
        array.reverse();
        return array;
    }
    else{
        for (let i = 0; i < n; i++){
            tempArray.push(array[i]);
        }
        tempArray.reverse();
        
        for(let i = 0; i < n; i++){
            array[i] = tempArray[i];
        }
        return array;
    }
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {

    let numSort = 0;
    if (array.length == 0){
        return array;
    }
    while (numSort != array.length){
        let largest = array[0];
        for (let i = 0; i < (array.length - numSort); i++){
            if (array[i] > largest){
                largest = array[i];
            }
        }
        if ( largest != array[0]){
            let n = 0;
            while (n <= array.indexOf(largest)){
                n++;
            }
            flip(array, n);
            if (numSort == 0){
                flip (array, (array.length + 1));
                numSort++;
            }
            else{
                flip(array, (array.length - numSort));
                numSort++;
            }
        }
        else{
            if (numSort == 0){
                flip(array, (array.length + 1));
                numSort++;
            }
            else{
                flip(array, (array.length - numSort));
                numSort++;
            }
        }
    }
    return array;
}
