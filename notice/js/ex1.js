window.onload =function(){
    var section = document.getElementById("ex2");
    console.log(section);

    var xInput = section.getElementsByClassName("x-input")[0];
    var yInput = section.getElementsByClassName("y-input")[0];
    var submitButton = section.getElementsByClassName("submit-button")[0];
    var result = section.getElementsByClassName("result")[0];

    
    submitButton.onclick = function(){
        var x = parseInt(xInput.value);
         console.log(x);
        var y = parseInt(yInput.value);
         console.log(y);
        result.innerText = x+y;
        
    }

}

// window.onload = function(){
//     var section = document.getElementById("ex1");

//     var submitButtons= section.getElementsByClassName("submit-button");
//     var submitButton = submitButtons[0];
//     // var submitButton = section.getElementsByClassName("submit-button")[0];

//     submitButton.onclick = function(){
//     console.log("테스트중~");

//     }
// };