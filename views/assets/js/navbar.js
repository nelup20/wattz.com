var toggled = false;
$(".glyphicon.glyphicon-search").click(function () {
  toggled = !toggled;
  if (toggled) {
    $("#searchInput").css({
      width: "50%",
      borderBottom: "1px  solid white"
    });
    $(".glyphicon.glyphicon-search").css("color", "limegreen");
    $("form.navbar-form button").css("opacity", "1");
  } else {
    $("#searchInput").css({
      width: "0%",
      borderBottom: "0px solid white"
    });
    $(".glyphicon.glyphicon-search").css("color", "white");
    $("form.navbar-form button").css("opacity", "0");
  }
});