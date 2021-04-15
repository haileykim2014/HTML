window.onload = function (){
    var asideTitle= window.document.getElementById("aside-title");
    var a1 = document.getElementById("a1");

    asideTitle.onclick = function(){
    var x = prompt('x값을 입력하세요');
    var y = prompt('y값을 입력하세요');
    x = parseInt(x);
    y = parseInt(y);
    asideTitle.innerText = x+y;
    a1.value = x+y;
    }
}