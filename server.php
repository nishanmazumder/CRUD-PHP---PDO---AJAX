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
    $data = [];
    $post_data = parse_str($_POST['data'], $data);
    $name = $data['nm_name'];
    $msg = $data['nm_msg'];

    $result = $con->nm_insert_data('nm_data', ['mname', 'msg'], [$name, $msg]);

    // try {

    //     if ($result) {
    //         echo json_encode($result);
    //     }
        
    // } catch (PDOException $e) {
    //     return 
    // }

    if ($result) {
        //echo json_encode($result);
        print_r($result);
        //echo $result;
    } else {
        echo json_encode("Error!");
    }

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
