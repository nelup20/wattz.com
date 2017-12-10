var imgNumber = 1;
$("#investmentsBtn").click(function() {
  imgNumber++;
  if (imgNumber === 4) {
    imgNumber = 1;
  };
  $("#handShakeImg").attr("src", "/images/handShake" + imgNumber + ".jpg");
  for (var i = 1; i <= $("#investmentLastElem .fa.fa-circle").length; i++) {
    if (i === imgNumber) {
      var previousElem;
      i === 1 ? (previousElem = 3) : (previousElem = i - 1);
      $("#investmentLastElem :nth-child(" + i + ")").addClass("activeCircle");
      $("#investmentLastElem :nth-child(" + previousElem + ")").removeClass(
        "activeCircle"
      );
    }
  }
});
