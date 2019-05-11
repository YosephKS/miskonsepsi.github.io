// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function borderAppear() {
  document.getElementById("option").style.border = "2px black solid";
}

function borderDisappear() {
  document.getElementById("option").style.border = "0px";
}

function borderAppear2() {
  document.getElementById("option2").style.border = "2px black solid";
}

function borderDisappear2() {
  document.getElementById("option2").style.border = "0px";
}

function borderAppear3() {
  document.getElementById("option3").style.border = "2px black solid";
}

function borderDisappear3() {
  document.getElementById("option3").style.border = "0px";
}