$("a[data-product='flash'").click(function () {
    $(this).html("<i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>");
    $.ajax({
        url: "/buy",
        type: "POST",
        data: {
            product: "flash",
            price: "39.99"
        },
        success: function (data, textStatus, jqXHR) {
            window.location.href = data;
        }
    });
});
$("a[data-product='lumi'").click(function () {
    $(this).html("<i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>");
    $.ajax({
        url: "/buy",
        type: "POST",
        data: {
            product: "lumi",
            price: "120"
        },
        success: function (data, textStatus, jqXHR) {
            window.location.href = data;
        }
    });
});
$("a[data-product='flashPro'").click(function () {
    $(this).html("<i class='fa fa-refresh fa-spin fa-3x fa-fw'></i>");
    $.ajax({
        url: "/buy",
        type: "POST",
        data: {
            product: "flashPro",
            price: "79.99"
        },
        success: function (data, textStatus, jqXHR) {
            window.location.href = data;
        }
    });
});