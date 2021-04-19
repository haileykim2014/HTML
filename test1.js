//ex8. 노드바꾸기
window.addEventListener("load",function(){
    var section = document.querySelector("#ex8");

    var container = section.querySelector(".container");
    var btnAdd =section.querySelector(".btn-add");
    var btnDel = section.querySelector("btn-del");
    var btnclone = section.querySelector("btn-clone");

    btnAdd.onclick = function(){
        //1.엘리먼트 객체생성
        var img = document.createElement("img");
        //2.엘리먼트 객체의 속성설정
        img.src="../../images/1.jpg";
        //3.엘리먼트객체를 추가하기
        container.appendChild(img);
    }
})
//ex7. css속성다루기
window.addEventListener("load",function(){
    var section = document.querySelector("#ex7");

    var container = section.querySelector(".container");
    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick=function(){
        var box = boxes[0];
        let boxStyle = window.getComputedStyle(box);
        console.log(boxStyle);
        var left = parseInt(boxStyle.getPropertyValue("left"));
        console.log(left);
    
        var tid = window.setInterval(function(){
            left++;
            box.style.left = left + "px";
            if(left==400){
                clearInterval(tid);
            }
        },17);

    }

});


// ex6.css 속성 다루기
window.addEventListener("load",function(){
    // var section = document.getElementById("ex3");
    var section = document.querySelector("#ex7");

    var container = section.querySelector(".container");//첫번째만선택, id인지 class인지 표기
    var boxes = section.querySelectorAll(".box");//모두선택
    var button = section.querySelector("input[value='click']");
    
    button.onclick = function(){
        var num = 0;
        
        window.setInterval(function(){
            boxes[0].style.left= num +'px';
            num += 1;
                        
        },17);

    }
});

//ex5 엘리먼트 노드의 속성변경
window.addEventListener("load", function(){
    var section = document.querySelector("#ex6");
    var span = section.querySelector(".span");
    var button = section.querySelector(".btn");

    button.onclick = function(){

        window.setTimeout(function(){
            var count = parseInt(span.innerText);
            count--;
            span.innerText = count;
        }, 1000);

    }
});

//ex5 엘리먼트 노드의 속성변경
window.addEventListener("load", function(){
    var section5 = document.querySelector("#ex5");
    var srcInput = section5.querySelector(".src-input");
    var imgSelect = section5.querySelector(".img-select")
    var changeButton = section5.querySelector(".change-button");
    var img = section5.querySelector(".img");
    var colorInput = section5.querySelector(".color-input");


    changeButton.onclick = function(){//텍스트 벨류를 넣으면 이미지가변경
        // img.src = "images/"+srcInput.value;
        img.src ="images/" + imgSelect.value;

        img.style.borderColor = colorInput.value;
    };
});

//ex4 childNodes를 이용한 노드선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#ex4");
    var box = section4.querySelector(".box");

    var input1= box.children[0];//.childNodes[1];
    var input2= box.children[1];//.childNodes[3];

    input1.value ="hello";
    input2.value ="what...";
});

//ex3 selecters API
window.addEventListener("load", function(){
    var section3 = document.getElementById("ex3");

    var xInput =section3.querySelector("input[name='x']");
    var yInput = section3.querySelector(".y-input");

    var submitButton = section3.getElementsByClassName("submit-button")[0];
    var result = section3.getElementsByClassName("result")[0];

    submitButton.onclick = function(){
        var x = parseInt(xInput.value);
        var y = parseInt(yInput.value);
        result.innerText = x+y;
        
    };
});

window.addEventListener("load", function(){
    var section2 = document.getElementById("ex2");

    var xInput =section2.getElementsByClassName("x-input")[0];
    var yInput = section2.getElementsByClassName("y-input")[0];

    var submitButton = section2.getElementsByClassName("submit-button")[0];
    var result = section2.getElementsByClassName("result")[0];

    submitButton.onclick = function(){
        var x = parseInt(xInput.value);
        var y = parseInt(yInput.value);
        result.innerText = x+y;
        
    };
});

// window.onload = function(){
//     var section = document.getElementById("ex2");
    
//     var xInput = section.getElementsByClassName("x-input")[0];
//     var yInput = section.getElementsByClassName("y-input")[0];
//     var submitButton = section.getElementsByClassName("submit-button")[0];
//     var result = section.getElementsByClassName("result")[0];

//     submitButton.onclick = function(){
//         var x = parseInt(xInput.value);
//         var y = parseInt(yInput.value);
//         result.innerText = x+y;
        
//     }
// }

window.addEventListener("load", function(){
        var section = document.getElementById("ex1");
    
        var submitButtons= section.getElementsByClassName("submit-button");
        var submitButton = submitButtons[0];
        // var submitButton = section.getElementsByClassName("submit-button")[0];
    
        submitButton.onclick = function(){
        console.log("테스트중~");
    
        };
});
