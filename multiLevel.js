/**
 * ===> biriany er dam hoilo 500 
 * 1. jodi baccha hoy taile biriany free 
 * 2. jodi motaMotiMorobi hoy taile 5% discount 
 * 3. jodi morobi hoy taile 10% discount 
 * 4. jodi old person hoy taile free 
 * ==> baccha er age 12 
 * ==> morobi er age 50
 * ==> motaMotiMorobi er age 60
 * ==> old er age 75
 */
let age = 73 ;
let price = 500 ;
const  baccha = 12 ;
const motaMotiMorobi = 50 ;
const morobi = 60 ;
const old = 75 ;
console.log("Regular biriany price "+price+" tk");
if(age <= baccha){
    console.log("tumar tk lagbo nah tumi free biriany paiba ");
}
// 5% discount 
else if(age >=motaMotiMorobi && age < morobi){
    let dicsount = price * 5 / 100 ;
    let payPrice = price - dicsount ;
    console.log("discount 5% a hoilo : "+dicsount);
    console.log("biriany er dam : "+payPrice+" tk");
    
}
// 10% discount 
else if(age >= morobi){
    let dicsount = price * 10 / 100 ;
    let payPrice = price - dicsount ;
    console.log("discount 10% a hoilo : "+dicsount);
    console.log("biriany er dam : "+payPrice+" tk");
}
else {
    console.log('biriany er dam '+price+' tk');
}