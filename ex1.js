//ex5. 노드 조작하기
window.addEventListener("load",function(){
    var section = document.querySelector("#ex5");

    var container = section.querySelector(".container");
    var btnAdd = section.querySelector(".btn-add");
    var btnDel = section.querySelector(".btn-del");
    var btnClone = section.querySelector(".btn-clone");
    
    btnAdd.onclick = function(){
        //1.엘리먼트 객체를 생성하기
        var img = document.createElement("img");
        // document.createTextNode//텍스트만들기
        var div = document.createElement("div");
        
        //2. 엘리먼트객체의 속성 설정하기
        img.src="../../images/1.jpg";
        // div.style["background-color"]= "blue";
        // div.style.backgroundColor = "blue";
        // div.style.width = "100px";
        // div.style.height = "100px";
        // div.style.borderRadius = "50px";

        //3. 엘리먼트 객체를  추가하기
        container.appendChild(img);
        // container.appendChild(div);
    };
    btnDel.onclick = function(){
        
    };
    btnClone.onclick = function(){
        
    };
    

});

// ex4.css 속성 다루기
window.addEventListener("load",function(){
    // var section = document.getElementById("ex3");
    var section = document.querySelector("#ex4");

    var container = section.querySelector(".container");//id인지 class인지 표기
    var boxes = section.querySelectorAll(".box");//모두선택
    var button = section.querySelector("input[value='click']");
    
    button.onclick = function(){
        var box = boxes[0];//왼쪽좌표위치 0, 원래있던 위치에서부터 증가하려면 ?
        let boxStyle = window.getComputedStyle(box);

        var left = parseInt(boxStyle.getPropertyValue('left'));//현재위치
        var tid = window.setInterval(function(){
            
            left++;
            box.style.left = left + "px"; 
            if(left==400){
                clearInterval(tid);

            }

        },17);
    };
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
// window.addEventListener("load",function(){
//     var section = document.getElementById("ex1");

//     var submitButtons= section.getElementsByClassName("submit-button");
//     var submitButton = submitButtons[0];
//     // var submitButton = section.getElementsByClassName("submit-button")[0];

//     submitButton.onclick = function(){
//     console.log("테스트중~");

//     }
// })