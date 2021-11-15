<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header('Access-Control-Allow-Methods: GET, POST');

$con = mysqli_connect('localhost', 'root', '', 'js_server');

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$name = $_POST['nm_name'];
$msg = $_POST['nm_msg'];

$sql = "INSERT INTO nm_data (mname, msg) VALUES('$name', '$msg')";
$result = $con->query($sql) or die("Query not proceed!");

$con->close();

if ($result) {
    echo json_encode("Data Updated!");
    echo json_encode($name);
    echo json_encode($msg);
} else {
    echo json_encode("Something went wrong!");
}
