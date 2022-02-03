//loop from the second element arr[1] in the array.
//loop through the sorted array in reverse, in this case arr[0];
//check if it greater than arr[1], then move it to j+1;
const insertionSort = (arr) => {
    for(let i=1; i<arr.length; i++) {
        current = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j];
            console.log(arr);
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));
