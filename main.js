// function multiply(arr, n){
//     let product = 1;
//     for(let i = 0; i<n; i++){
//         product *= arr[i];
//     }
//     return product;
// }
// myArr = [2,4,6];
// console.log(multiply(myArr,2-1)*myArr[2-1]);

// function multiply(arr, n){
//     if(n <= 0){
//         return 1;
//     }else{
//         return multiply(arr, n-1) * arr[n-1]
//     }
// }
// console.log(multiply(myArr,2));

// function pow(x, n){
//     let result = 1;
//     for (let i = 0; i<n; i++){
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(2,3));

function pow(x, n){
    if( n == 1){
        return x;
    }else{
        return x * pow(x, n-1);
    }
}

console.log(pow(2,3));

alert("Something something")