var imgNumber = 1;
var changedTextAmount = 0;
$("#investmentsBtn").click(function() {
  $("#handShakeImg").fadeOut(50);
  $("#handShakeImg").fadeIn(200);
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
$("#newsPart button").click(function(){
  $(this.nextSibling.nextSibling).fadeOut(0);
  $(this.nextSibling.nextSibling).text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.")
  $(this.nextSibling.nextSibling).fadeIn();
});

$("#interruptionPart button").click(function(){
  changedTextAmount === 3 ? changedTextAmount = 3 : changedTextAmount++;
  $("#interruptionLastElem i:nth-child("+ changedTextAmount +")").addClass("activeCircle");
  $(this.nextSibling.nextSibling).fadeOut(0);
  $(this.nextSibling.nextSibling).text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.")
  $(this.nextSibling.nextSibling).fadeIn();
});

$(document).ready(function(){
  $("#emailForm").submit(function(e){
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    $.post("/email", {
      name: name,
      email: email,
      subject: subject,
      message: message
    });
    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val(" Message");
    alert("Thank you for your email. We will get back to you as soon as possible")
  });
});