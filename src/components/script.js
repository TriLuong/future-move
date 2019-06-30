var elemt = document.getElementsByClassName("navbar-opacity")[0];
if (elemt.scrollTop > 0) {
  elemt.classList.add("scrolled");
} else {
  elemt.classList.remove("scrolled");
}
