/*
        Grading System
A student gets marks out of 100. Print:

A+ if marks ≥ 90

A if 80–89

B if 70–79

C if 60–69

F if < 60
*/
const  mark = 40 ;
if(mark >= 0 && mark <=100){
    if(mark >= 90 ){
        console.log("congratulations you got A+");
    }
    else if(mark >=80 && mark <90){
        console.log("congratulations you got A");
    }
    else if(mark >=70 && mark <80){
        console.log("congratulations you got B");
    }
    else if(mark >=60 && mark <70){
        console.log("congratulations you got C");
    }
    else{
        console.log("You have Failed");
        console.log("Better Luck next time");
    }
}
else{
    console.log("Invalid number ");
}