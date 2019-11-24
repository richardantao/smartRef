function sortSpec(Array){
    var sortedArray = [];
    var rank;
    for(var i = 0; i < length(Array);i++){
        rank = Array[i].ranking;
        sortedArray[rank-1] = Array[i]; 
    }
    return sortedArray;
}

function limitTen(arraySorted){
    var limArray = [];
    for(var i = 0; i < 10; i++){
        limArray[i] = arraySorted[i];
    }
    return limArray;
}