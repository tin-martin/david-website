var drawRipple = function(ev) {
    if (document.getElementById("home").contains(ev.target)){
      //  if(ev.target.tagName == "A"){
      //      return;
   //     }
        var x = ev.clientX;
        var y = ev.clientY;
        var node = document.querySelector(".ripple");
        var newNode = node.cloneNode(true);
        newNode.classList.add("animate");
        newNode.style.left = ev.clientX - 5 + "px";
        newNode.style.top = ev.clientY - 5 + "px";
        node.parentNode.replaceChild(newNode, node);
    }
}

var container = document.getElementById('home');
document.addEventListener('click', drawRipple);

var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function(e) {
    document.getElementById("cursor").style.left = e.clientX + "px",
    document.getElementById("cursor").style.top = e.clientY + "px";
});

var cursor = document.getElementById("iCursor");
document.addEventListener("mousemove", function(e) {
    document.getElementById("iCursor").style.left = e.clientX + "px",
    document.getElementById("iCursor").style.top = e.clientY + "px";
});

// if on this part of the document add a event listener for scroll, 
//when scroll: change the css of pictures (from hidden to visible, change y), 
//if on the very bottom or scroll or very top, then remove event listener


document.addEventListener("scroll",function(){
    if(window.pageYOffset >= 821){
        window.pageYOffset = 821;
    };
});
//window.pageYOffset == 821