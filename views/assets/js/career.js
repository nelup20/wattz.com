$(document).ready(function() {
  var date = new Date();
  date = date.toLocaleDateString();
  date = date.split("/");
  console.log(date);

  var day = date[0];
  var month = date[1];
  var year = date[2];

  $("#bday").attr("max", year - 18 + "-" + month + "-" + day);
});
