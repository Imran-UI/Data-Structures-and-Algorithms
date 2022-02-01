//loop through the array, find the min value, and swap it into the sorted position
//i =0 will be the first sorted position, it gets updated as we loop through 
const selectionSort = (arr) => {
    for(let i=0; i<arr.length; i++) {
        let min = i;
        for(let j = i +1; j< arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        //swap
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// time complexity : O[n2];

console.log(selectionSort([22,11,55,64,2,9,11,79]));