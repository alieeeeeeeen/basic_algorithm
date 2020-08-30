function binarySearch(arr, value){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;
    let middle;
   
    while(end - start > -1) {
         middle  = Math.floor((start + end) / 2);
        if(arr[middle] > value) {
          end = middle - 1;
        } else if(arr[middle] < value) {
            start = middle + 1;
        } else if(arr[middle] === value){
            return middle;
        }  
    }
    return -1;
  }