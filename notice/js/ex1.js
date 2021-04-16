// ex4.
window.addEventListener("load",function(){
    // var section = document.getElementById("ex3");
    var section = document.querySelector("#ex4");

    var container = section.querySelector(".container");//첫번째만선택, id인지 class인지 표기
    var boxes = section.querySelectorAll(".box");//모두선택
    var button = section.querySelector("input[value='click']");
    
    button.onclick = function(){

        boxes[0].style.left = "10px";
        boxes[0].style.left = "11px";
        //1700ms
        // window.setInterval(function(){
        // //    boxes[0].style.left = "1px";/*절대위치지정*/
        // var move = boxes[0].style.left;
        // move += "1px";
        // }, 1700);

    }
});
// ex3.
window.addEventListener("load",function(){
    // var section = document.getElementById("ex3");
    var section = document.querySelector("#ex3");

    var span = section.querySelector(".span");//첫번째만선택, id인지 class인지 표기
    var button = section.querySelector(".btn");
    
    button.onclick = function(){

       window.setInterval(function(){
        var count = parseInt(span.innerText);
        count--;
        span.innerText = count;
       }, 1000);

    }
});
//------------------------------------------------------------------
// window.onload =function(){
window.addEventListener("load",function(){
    var section = document.getElementById("ex2");
    console.log(section);

    var xInput = section.getElementsByClassName("x-input")[0];
    var yInput = section.getElementsByClassName("y-input")[0];
    var submitButton = section.getElementsByClassName("submit-button")[0];
    var result = section.getElementsByClassName("result")[0];

    
    submitButton.onclick = function(){
        var x = parseInt(xInput.value);/*xInput클래스의 벨류값*/
         console.log(x);
        var y = parseInt(yInput.value);
         console.log(y);
        result.innerText = x+y;        
    }
});
//------------------------------------------------------------------
// window.onload = function(){
window.addEventListener("load",function(){
    var section = document.getElementById("ex1");

    var submitButtons= section.getElementsByClassName("submit-button");
    var submitButton = submitButtons[0];
    // var submitButton = section.getElementsByClassName("submit-button")[0];

    submitButton.onclick = function(){
    console.log("테스트중~");

    }
});