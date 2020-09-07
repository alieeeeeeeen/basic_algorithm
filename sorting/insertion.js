function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var curretnVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > curretnVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = curretnVal;
    }
    return arr;
}