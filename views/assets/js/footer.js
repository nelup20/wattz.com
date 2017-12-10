$(document).ready(function(){
    $("#newsletterForm").submit(function(e){
        e.preventDefault();
        var email = $("#newsletterEmail").val();
        $.post("/newsletter", {
            email: email
        });
        $("#newsletterEmail").val("");
        alert("We hope you enjoy our weekly newsletter !")
    });
});