// // Task 1 - factorial

// function getFactorial(num){

//     let result = 1;
//     if (num === 1) return result;
//     else {
//         for (let i = 0; i <= num; i++){
//             result =  num * getFactorial(num - 1);
//         }
//         return result;
//     }
// }

// console.log(getFactorial(3));

// // Task 2 - pow 

// function pow(x, n) {
//     if (n === 1) return x;
//     else return x * pow(x, n - 1);
// }

// console.log(pow(3, 3));

// // Task 3 - sum 

// function getSum(a, b) {
//     if (b === 0) return a;
//     else return getSum(a + 1, b - 1);
// }

// console.log(getSum(41, 10));