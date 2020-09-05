function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i;
    
        for(var j= i + 1; j < arr.length; j++) {
            console.log(arr[j], arr[min], j , min)
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
    
        if(min != i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    
    }
    return arr;
}