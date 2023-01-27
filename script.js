function mic(array){
    let i = 0;
    while(array[i] % 3 != 1 && i < array.length){
        i++;
    }if( i === array.length){
        return -1;
    }
    let min = array[i];
    for(j = i + 1; j < array.length; j++){
        if(array[j] % 3 == 1 && array[j] < min){
            min = array[j];
        }
    }return min;
}

console.log(mic([3, 12, 0, 4, 5]))