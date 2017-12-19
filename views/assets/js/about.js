var title = $("#aboutWattz h3")
  .text()
  .split("");
var charNumber = 0;
var textCharNumber = 0;
$(document).ready(function () {
  if (window.innerWidth < 768) {
    $("#whoAreWe h2").css({
      "padding-top": "150px",
      opacity: "1",
      transition: "all 1s"
    });
  } else if (window.innerWidth < 1340) {
    $("#whoAreWe h2").css({
      "padding-top": "277px",
      opacity: "1",
      transition: "all 1s"
    });
  } else {
    $("#whoAreWe h2").css({
      "padding-top": "40vh",
      opacity: "1",
      transition: "all 1s"
    });
  }
  setTimeout(function () {
    var wholeTitle = "";
    $("#aboutWattz i.fa.fa-spinner.fa-pulse.fa-3x.fa-fw").fadeOut(100);
    $("#aboutWattz h3")
      .text("")
      .fadeIn(700);
    var interval = setInterval(function () {
      wholeTitle += title[charNumber];
      $("#aboutWattz h3").text(wholeTitle);
      if (charNumber < title.length - 1) {
        charNumber++;
      } else {
        clearInterval(interval);
        charNumber = 0;
      }
    }, 400);
    (function () {
      var wholeText = "";
      var text = $("#aboutWattz :nth-child(3)")
        .text()
        .split("");
      $("#aboutWattz :nth-child(3)")
        .text("")
        .fadeIn(700);
      var textInterval1 = setInterval(function () {
        wholeText += text[textCharNumber];
        $("#aboutWattz :nth-child(3)").text(wholeText);
        if (textCharNumber < text.length - 1) {
          textCharNumber++;
        } else {
          clearInterval(textInterval1);
          textCharNumber = 0;
          wholeText = "";
          text = $("#aboutWattz :nth-child(4)")
            .text()
            .split("");
          $("#aboutWattz :nth-child(4)")
            .text("")
            .fadeIn();
          var textInterval2 = setInterval(function () {
            wholeText += text[textCharNumber];
            $("#aboutWattz :nth-child(4)").text(wholeText);
            if (textCharNumber < text.length - 1) {
              textCharNumber++;
            } else {
              clearInterval(textInterval2);
              textCharNumber = 0;
              wholeText = "";
              text = $("#aboutWattz :nth-child(5)")
                .text()
                .split("");
              $("#aboutWattz :nth-child(5)")
                .text("")
                .fadeIn();
              var textInterval3 = setInterval(function () {
                wholeText += text[textCharNumber];
                $("#aboutWattz :nth-child(5)").text(wholeText);
                if (textCharNumber < text.length - 1) {
                  textCharNumber++;
                } else {
                  clearInterval(textInterval3);
                  textCharNumber = 0;
                  wholeText = "";
                }
              }, 40);
            }
          }, 40);
        }
      }, 40);
    })();
  }, 3500);
});