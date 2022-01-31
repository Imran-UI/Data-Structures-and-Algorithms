// its not commonly used in production 
// largest value will bubble to the top, 1 at a time.
// Implementation:
//loop through the array, comparate i with i+1. if i+1 is less than i then swap.

const bubbleSort = (arr) => {
    let len = arr.length;
    let isSwaped = false;
    for(let i = 0; i<=len; i++) {
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwaped = true
            }
        }
        len--;
        if(!isSwaped) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([37,45,29,8]));