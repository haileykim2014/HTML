window.addEventListener("load",function(){
    var header = document.querySelector("#header"); 
    console.log(header);  
    var menuButton = header.querySelector(".icon-menu");
    console.log(menuButton);

    menuButton.onclick = function(){
        console.log("click");
    }
})