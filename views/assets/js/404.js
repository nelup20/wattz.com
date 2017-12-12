var timer = 5;
$(document).ready(function() {
  setInterval(function() {
    timer--;
    $("#Text404 .container span").text(timer + "...");
    if (timer === 0) {
      window.location.href = "/";
    }
  }, 1000);
});
