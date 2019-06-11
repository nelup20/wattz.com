let notFound = 0;

$(document).ready(function () {
    $(".btn.btn-success").click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "/ticket/status",
            type: "POST",
            data: {
                ticketNumber: $(".form-control").val()
            },
            success: function (data, textstatus, jqXHR) {
                console.log(data)
                if (data === "None found") {
                    if (notFound === 0) {
                        $("#ticketStatusContainer button").css("margin-bottom", "50px");
                        $("#ticketStatusContainer").append('<h3 class="btn btn-danger form-control col-xs-12" id="wrongNumberWarning">Ticket not found! Please make sure you put in the correct ticket number.</h3>');
                        notFound = 1;
                    }
                } else {
                    $("#ticketStatusContainer").html("<i class='fa fa-cog fa-spin fa-3x fa-fw' id='loadingIcon'></i>");
                    $("#ticketStatusContainer").css("text-align", "center");
                    setTimeout(function () {
                        $("#ticketStatusContainer").css("text-align", "left");
                        let status;
                        data[0].solved === false ? status = "In progress" : status = "Closed";
                        $("#ticketStatusContainer").fadeOut(0);
                        $("#ticketStatusContainer").fadeIn();
                        $("#ticketStatusContainer").html(`
                            <div class="container" id="ticketStatusContainer">
                            <h1>Ticket Status</h1>
                            <h3>Ticket number: ${data[0].id}</h3>
                            <h3>Name: ${data[0].name}</h3>
                            <h3>Description: ${data[0].description}</h3>
                            <h3 id='ticketStatus'>Status: ${status}</h3>
                        </div>
                        `);
                    }, 2000);
                }
            }
        });
    });
});
