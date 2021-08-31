/*
Given an array of integers, find the pair of adjacent elements 
that has the largest product and return that product.
Guaranteed constraints:
    2 ≤ inputArray.length ≤ 10,
    -1000 ≤ inputArray[i] ≤ 1000.

*/

export const adjacentElements = (arr) => {

    if(arr.length == 1) return 0;

    let product = arr[0] * arr[1];
        
    for(let i = 0; i < arr.length; i++) {
 
        if( (arr[i] * arr[i + 1]) > product) {
           product = arr[i] * arr[i + 1]; 
        };
    };
    return product;
}


