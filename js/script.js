function togNav() {
  var x = document.getElementById("sidenav");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
