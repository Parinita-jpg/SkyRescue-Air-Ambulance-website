$(function(){
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});

$(document).ready(function(){
  // Include navbar
  $("#navbar").load("navbar.html");

  // Include footer
  $("#footer").load("footer.html");
});

// footer include
document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("site-footer");
  if (!f) return;

  fetch("footer.html")
    .then(r => r.text())
    .then(html => { f.innerHTML = html; })
    .catch(() => { /* fail silently */ });
});