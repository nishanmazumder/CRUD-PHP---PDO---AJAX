$(document).ready(function () {
    var url = 'server.php';

    // Insert Data
    $('.nmAlert').css('display', 'none')
    $('#nmForm').on('submit', function (e) {
        e.preventDefault()

        $.ajax({
            //contentType: "application/json; charset=utf-8",
            type: 'POST',
            url: url,
            data: $(this).serialize(),
            // dataType : 'json',
            success: function (data) {
                //  console.log(data)
                $('.nmAlert').css('display', 'block')
                //data = JSON.parse(data)
                $('.nmAlert').text(data)
            },
            error: function (e) {
                console.log(e)
            }
        })
    })

    // Get data
    $('#nmGetData').on('click', function (e) {
        e.preventDefault()

        $.ajax({
            type: 'GET',
            url: url,
            data: {
                get_data: 'AJAX'
            },
            success: function (response) {
                for (let i = 0; i <= response.length; i++) {
                    console.log(response.name[i])
                }


            },
            error: function (err) {
                console.log(err)
            }
        });
    })
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