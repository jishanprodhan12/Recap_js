const numbers = [3, 78, 4, 83, 84, 2, 5, 1];
console.log(numbers);

// now we are trying this array using sort method 

// ascending order sort 
const sorted_num_asc = [...numbers].sort(function (a, b) { return a - b });

console.log(sorted_num_asc);

// descending order sort 
// here we are using arrow function
const sorted_num_dsc = [...numbers].sort((a, b) => b - a);

console.log(sorted_num_dsc);

