function mergeArray(arr1, arr2) {
    let result = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] > arr2[0]) {
            result.push(arr2[0]);
            arr2.shift();
        } else if (arr1[0] < arr2[0]) {
            result.push(arr1[0]);
            arr1.shift();
        }
    }
    if(arr1.length) {
        result = [...result, ...arr1]
    } else if (arr2.length) {
        result = [...result, ...arr2]
    }
    return result;
}