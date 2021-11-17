$(document).ready(function () {
    var url = 'server.php';

    // Notifiaction
    $('.nmAlert').css('display', 'none')

    function nm_notification_display(data) {
        $('.nmAlert').css('display', 'block')
        $('.nmAlert').text(data)
    }

    // Insert Data

    $('#nmForm').on('submit', function (e) {
        e.preventDefault()

        $.ajax({
            //contentType: "application/json; charset=utf-8",
            type: 'POST',
            url: 'tester.php',
            data: $(this).serialize(),
            // dataType : 'json',
            success: function (data) {
                nm_notification_display(data)
            },
            error: function (e) {
                console.log(e)
            }
        })
    })

    // Get data
    $('#nmGetData').on('click', function (e) {
            e.preventDefault()
            var reference = "GET"
            // Ajax call 
            ajax_get_data(reference);
        }

    )

    function get_data(response) {
        var html = '';
        var table = $('<table></table>')

        response.forEach(item => {
            html += '<tr><td>' + item.mname + '</td><td>' + item.msg + '</td>' + '<td><a href="javascript:void(0)" class="btn btn-danger" id="deleteData" data-id="' + item.id + '">Delete</a><a href="javascript:void(0)" class="btn btn-info" id="updateData" data-id="' + item.id + '">Update</a></td>' + '</tr>'
        });

        $('.get-data').append(table.html(html))

        // Delete Data
        $('.nm-btn-delete').on('click', function (e) {
            e.preventDefault()

            var id = this.data('id')

            // Ajax call 
            ajax_get_data(id);
        })



    }

    // Ajax Request Get
    function ajax_get_data(reference) {
        $.ajax({
            type: 'GET',
            url: url,
            data: {
                data: reference
            },
            success: function (response) {
                get_data(response)
            },
            error: function (err) {
                console.log(err)
            }
        });
    }


})

$('.body').append(
    $('<div/>')
    .attr('id', 'lightContainer')
    .addClass('nm-light')
    .text('i am inner text!')
)

$(".body").after('<a href="javascript:void(0)">Check Data</a>')
$(".body").next().addClass('nmClick')


var person = {
    fname: "Nishan",
    lname: "Mazumder",
    location: "Mirpur",
    age: 40,
    fullname: function () {
        return this.fname + ' ' + this.lname
    }
}

person.age = 28
person.job = "Jobless"

$('#lightContainer').empty().text(person.fullname())

$('<div/>', {
    id: 'data',
    class: 'nm-data'
}).appendTo('.body')

$('.nmClick').on('click', function () {
    $('#data').text(person.fullname())
})

// My car
let x = ''
const myCar = {
    name: "Nishan",
    cars: [{
            name: "Ford",
            models: ["Fiesta", "Focus", "Mustang"]
        },
        {
            name: "BMW",
            models: ["320", "X3", "X5"]
        },
        {
            name: "Fiat",
            models: ["500", "Panda"]
        }
    ]
}

for (let i in myCar.cars) {
    x += '<h2>' + myCar.cars[i].name + '</h2>' + '<br />'
    for (let j in myCar.cars[i].models) {
        x += '<span>' + myCar.cars[i].models[j] + '</span>'
    }
}

var carContainer = $('<div/>', {
    id: 'myCar',
    html: x
})

$('.body').append(carContainer)

function Students(name, age) {
    this.name = name
    this.age = age
}

//const myStudent = new Students("Nishan", "28")