var modals = document.getElementsByClassName("myModal");
var btns = document.getElementsByClassName("openmodal");
var spans = document.getElementsByClassName("close");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    modals[i].style.display = "block";
    document.querySelector("body").style.overflow = 'hidden';
  };
}
for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = () => {
    modals[i].style.display = "none";
    document.querySelector("body").style.overflow = 'visible';
  };
}

$(document).keydown((e) => {
    if(e.keyCode == 27) {
        $(".myModal").hide(300);
        document.querySelector("body").style.overflow = 'visible';
    }
    });
