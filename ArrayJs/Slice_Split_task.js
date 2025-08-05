// Goal: Use .slice() to extract the first 5 characters from a string.

// let text = "JavaScriptIsFun";
// let result = // your code here
// console.log(result); // Output: "JavaS"

let text = 'JavaScriptIsFun' ;
let newText = text.slice(0,5);
console.log(newText);

let fruits = ["apple", "banana", "cherry", "date", "mango"];
let firstTwo  = fruits.slice(0,2);
console.log(fruits);
console.log(firstTwo);

// try to reverse a text 
const str = 'I am trying to reverse this str';
console.log(str);
// there are three way to reverse this str 
// 1. using for loop 
let rev = '';
for(let st of str){
    rev = st + rev;
}
console.log(rev);
// 2. using revserse function and split and join method 
// we can not use reverse method directly cause reverse method use on Array 
const method2 = 'this is second method of reversing a string ';
console.log(method2);
const revShort = method2.split('').reverse().join('');
console.log(revShort);
