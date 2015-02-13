1
/**
 * Created by bcuser on 2/12/15.
 */

$(document).ready(function () {

    $("#debug").html("It's loading");

    $("#inputFirstName").val('Patricia');

    $("#buttonFirstName").click(function () {
        var firstName = $("#inputFirstName").val();
        console.log(firstName);
        $("#firstName").html(firstName);
    });

    $("#getPresidents").click(function () {
        $.getJSON('Presidents.json', function (result) {
            console.log(JSON.stringify(result, null, 4));
            for (var i = 0; i <result.length; i++) {
                $("#displayPresidents").append("<li>" + result.firstName + "</li>>")
            }
        });
    });
});