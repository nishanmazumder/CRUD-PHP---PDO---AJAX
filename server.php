<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: GET, POST');

$con = mysqli_connect('localhost', 'root', '', 'js_server');

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

//Get data
if (isset($_GET['get_data'])) {
    $sql = "SELECT * FROM nm_data";
    $result = $con->query($sql) or die('Unable to get data!');
    $response['data'] = [];
    if ($result) {
        while ($data = $result->fetch_all()) {
            $response['data'] += $data;
        }

        echo json_encode($response);
    }
}

//Insert
if (isset($_POST['nm_name']) && isset($_POST['nm_msg'])) {
    $name = $_POST['nm_name'];
    $msg = $_POST['nm_msg'];

    $sql = "INSERT INTO nm_data (mname, msg) VALUES('$name', '$msg')";
    $result = $con->query($sql) or die("Query not proceed!");

    $con->close();

    if ($result) {
        echo json_encode('Data Updated!');
    } else {
        echo json_encode("Something went wrong!");
    }
}
