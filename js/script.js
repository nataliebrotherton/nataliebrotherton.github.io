function nav_bar() {
  var nav_width = document.getElementById("sidenav").style.width;
  if (nav_width === "0") {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
