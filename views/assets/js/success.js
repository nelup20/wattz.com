$(document).ready(function() {
  $(".container h2,h3,#envelopeDiv").fadeIn(900);
  var open = false;
  setInterval(function() {
    open = !open;
    if (!open) {
      $("#envelopeDiv i")
        .removeClass("fa-envelope-o")
        .addClass("fa-envelope-open-o");
    } else {
      $("#envelopeDiv i")
        .removeClass("fa-envelope-open-o")
        .addClass("fa-envelope-o");
    }
  }, 500);
});
