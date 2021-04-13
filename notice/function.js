function calculate(command,a,b){
    if(command === 'add'){
        printAdd();
    }else if(command ==='subtract'){
        printSubtract();
    }else if(command === 'divide'){
        printDivide();
    }else if(command === 'multiply'){
        printMultiply();
    }else(command ==='remainder'){
        printRemainder();
    }
}
const printAdd = function(){
    console.log(a+b);
}
const printSubtract = function(){
    console.log(a-b);
}
const printDivide = function(){
    console.log(a/b);
}
const printMultiply = function(){
    console.log(a*b);
}
const printRemainder = function(){
    console.log(a%b);
}