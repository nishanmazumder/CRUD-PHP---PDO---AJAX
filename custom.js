$(document).ready(function () {
    var url = 'server.php';
    var reference = '';
    var data = '';

    // Insert Data
    $('#nmForm').on('submit', function (e) {
        e.preventDefault()
        reference = "INSERT"
        data = $(this).serialize()
        AJAX_POST(reference, data)
    })

    //Read Data
    read_data();

    function read_data() {
        reference = "READ";
        AJAX_GET(reference);
    }

    function get_data(response) {
        var html = '';
        var table = $('<table></table>');

        response.forEach(item => {
            html += '<tr><td>' + item.mname + '</td><td>' + item.msg + '</td>' + '<td><a href="javascript:void(0)" class="btn btn-danger delete-data" id="deleteData" data-id="' + item.id + '">Delete</a><a href="javascript:void(0)" class="btn btn-info update-data" id="updateData" data-id="' + item.id + '">Update</a></td>' + '</tr>';
        });

        $('.get-data').html(table.html(html));

        // Delete Data
        $('.delete-data').on('click', function (e) {
            e.preventDefault();
            reference = "DELETE";
            data = $(this).data('id');
            AJAX_GET(reference, data);
        })

        // Update Data
        $('.update-data').on('click', function (e) {
            e.preventDefault();
            reference = "UPDATE";
            data = $(this).data('id');
            AJAX_GET(reference, data);
        })
    }

    // Notifiaction
    $('.nmAlert').hide();

    function nm_notification_display(data) {
        $('.nmAlert').show();
        $('.nmAlert').text(data);
    }

    // Ajax Request - POST
    function AJAX_POST(reference, data) {
        $.ajax({
            //contentType: "application/json; charset=utf-8",
            type: 'POST',
            url: url,
            data: {
                reference: reference,
                data: data
            },
            // dataType : 'json',
            success: function (data) {
                nm_notification_display(data);
            },
            error: function (e) {
                console.log(e);
            }
        })
    }

    // Ajax Request - GET
    function AJAX_GET(reference, data) {
        $.ajax({
            type: 'GET',
            url: url,
            data: {
                reference: reference,
                data: data
            },
            success: function (response) {
                if (reference === "READ") {
                    get_data(response);
                }
                if (reference === "DELETE") {
                    AJAX_GET("READ");
                    nm_notification_display(response);
                }
                if (reference === "UPDATE") {
                    AJAX_GET("READ");
                    nm_notification_display("Please Update Data!");

                    console.log(response)
                    $('#nmName').val(response.mname)
                    $('#nmMsg').val(response.msg)
                    $('.nm-submit').text("Update");
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
})