/**
 * Created by bcuser on 2/5/15.
 */

function myPageChanger() {

    $('#firstName').html('Bess');

    $('#changeFirstName').click(function() {
        $('#firstName').html('Terry');
    });

};

$(document).ready(function() {

    myPageChanger();

});