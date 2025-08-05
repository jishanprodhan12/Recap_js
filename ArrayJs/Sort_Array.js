const friends = ['Rasel','rayhan','niloy','setu','abir','babul','habul'];
console.log(friends);

// now we are try to sort this array using sort method 

const sorted_friends = [...friends].sort(); // [...] using this we are copy this array 
// if we can't copy this array then  we will lost this orginal array cz sort method mute the original array 

console.log(friends);
console.log(sorted_friends);

