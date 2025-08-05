
const person = {
    name : 'jishan',
    age  : 21 ,
    height : 5.7,
    weight : 68,
    isStudent : true,
    isDeveloper : true ,
    programmingLanguages : [
        "HTML" , "CSS", "JavaScrept","Java","C","C++"
    ]
};
// console.log(person);
person.programmingLanguages[6] = 'bangla' ;
const JishanKnwonLanguage  = person.programmingLanguages ;
// console.log(JishanKnwonLanguage) ;

//  now i want to reverse the array inside the oboject 
// console.log(person);
const langu = person.programmingLanguages ;
console.log(langu);
let rev_langu = [];
for(let i = langu.length-1 ; i >= 0 ; i--){
    rev_langu.push(langu[i]);

}
console.log(rev_langu);