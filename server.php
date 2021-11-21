<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: GET, POST');

require_once "Class.php";
$con = new Data();

//Read data
if ($_GET['reference'] === "READ") {
    $response = $con->nm_read_data("nm_data");
    echo json_encode($response);
}

//Insert
// if ($_POST['reference'] === "INSERT") {
if ($_SERVER['REQUESTED_METHOD'] === 'POST') {
    $data = [];
    $post_data = parse_str($_POST['data'], $data);
    $name = $data['nm_name'];
    $msg = $data['nm_msg'];

    $response = $con->nm_insert_data('nm_data', ['mname' => $name, 'msg' => $msg]);
    echo json_encode($response);
}

//Update data
if ($_GET['reference'] === "UPDATE") {
    $response = $con->nm_update_data("nm_data", $_GET['data']);
    echo json_encode($response);
}

//Delete data
if ($_GET['reference'] === "DELETE") {
    $response = $con->nm_delete_data("nm_data", $_GET['data']);
    echo json_encode($response);
}
