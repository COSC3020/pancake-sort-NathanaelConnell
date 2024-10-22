function flip(array, n) {
    
    let tempArray = new array;
    for (let i = 0; i < n; i++){
        tempArray.push(array[i]);
    }
    tempArray.reverse();
    array.unshift(tempArray);

    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {

    let numSort = 0;
    while (numSort != array.length){
        let largets = array[0];
        for (let i = 0; i < (array.length - numsSort); i++){
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
                flip (array, array.length + 1);
                numSort++;
            }
            else{
                flip(array, array.length - numSort);
                numSort++;
            }
        }
        else{
            if (numSort == 0){
                flip(array, array.length + 1);
                numSort++;
            }
            else{
                flip(array, array.length - numSort);
                numSort++;
            }
        }
    }
    return array;
}
