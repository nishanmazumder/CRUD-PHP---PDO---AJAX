<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: GET, POST');

require_once "Class.php";
$con = new Data();

//Read data
if (isset($_GET['data']) && $_GET['data'] = "GET") {
    $result = $con->nm_read_data("SELECT * FROM nm_data");

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode("Error!");
    }
}

//Delete data
if (isset($_GET['data'])) {
    $result = $con->nm_delete_data($_GET['data']);

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode("Error!");
    }
}

// //Insert
// if (isset($_POST['nm_name']) && isset($_POST['nm_msg'])) {
//     $name = $_POST['nm_name'];
//     $msg = $_POST['nm_msg'];

//     $sql = "INSERT INTO nm_data (mname, msg) VALUES('$name', '$msg')";
//     $result = $con->query($sql) or die("Query not proceed!");

//     $con->close();

//     if ($result) {
//         echo json_encode('Data Updated!');
//     } else {
//         echo json_encode("Something went wrong!");
//     }
// }
