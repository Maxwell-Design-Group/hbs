var modals = document.getElementsByClassName("modal");
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
        $(".modal").hide(300);
        document.querySelector("body").style.overflow = 'visible';
    }
    });
