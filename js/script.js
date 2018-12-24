function togNav() {
  var nav = document.getElementById("sidenav");
  if (nav.style.width == '100%') {
    nav.style.width = '0';
  } else {
    nav.style.width = "200%";
  }
}

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
