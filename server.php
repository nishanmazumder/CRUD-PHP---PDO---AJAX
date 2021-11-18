<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: GET, POST');

require_once "Class.php";
$con = new Data();

//Read data
// if ($_GET['reference'] === "READ") {
//     $result = $con->nm_read_data("SELECT * FROM nm_data");

//     if ($result) {
//         echo json_encode($result);
//     } else {
//         echo json_encode("Error!");
//     }
// }

//Insert
if ($_POST['reference'] === "INSERT") {
    //  $name = $_POST['nm_name'];
    //  $msg = $_POST['nm_msg'];

    //  $result=$con->nm_insert_data('nm_data', ['mname', 'msg'], [$name, $msg]);


    // if ($result) {
    //     echo json_encode($result);
    // } else {
    //     echo json_encode($result);
    // }
    $data = $_POST['reference'].$_POST['nm_name'].$_POST['nm_msg'];

    echo json_encode($data);
}

//Delete data
// if ($_GET['reference'] === "DELETE") {
//     $result = $con->nm_delete_data($_GET['data']);

//     if ($result) {
//         echo json_encode($result);
//     } else {
//         echo json_encode("Error!");
//     }
// }
