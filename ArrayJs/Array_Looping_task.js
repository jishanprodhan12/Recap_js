/**
 Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

 */
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors);
// reverse this array without using reverse method and unshift  method
let rev_colors = [];
for (let i = 0; i < colors.length; i++) {
    let tempColor = colors[i];
    rev_colors.unshift(tempColor);

}
console.log(rev_colors);
console.log("using reverse loop ");
console.log(colors);
let rev_for_color = [];
// using reverse for loop 
for (let i = colors.length - 1; i >= 0; i--) {
    let rev_for = colors[i]
    rev_for_color.push(rev_for);
}
console.log(rev_for_color);