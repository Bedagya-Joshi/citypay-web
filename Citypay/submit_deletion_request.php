<?php

$db_host = "localhost";
$db_name = "request";
$db_user = "root";
$db_pass = "";

try {
    $db = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create users table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS users (
            full_name VARCHAR(255),
            email VARCHAR(255),
            phone_number VARCHAR(255),
            wallet_id VARCHAR(255),
            date_of_birth DATE,
            deletion_reason TEXT NOT NULL 
          )";

    $db->exec($sql);

    // Prepare SQL statement for inserting data into the 'users' table
    $sql = "INSERT INTO users (full_name, email, phone_number, wallet_id, date_of_birth, deletion_reason) 
            VALUES (:full_name, :email, :phone_number, :wallet_id, :date_of_birth, :deletion_reason)";
    $stmt = $db->prepare($sql);

    // Bind parameters with form data
    $stmt->bindParam(":full_name", $_POST['full_name']);
    $stmt->bindParam(":email", $_POST['email']);
    $stmt->bindParam(":phone_number", $_POST['phone_number']);
    $stmt->bindParam(":wallet_id", $_POST['wallet_id']);
    $stmt->bindParam(":date_of_birth", $_POST['date_of_birth']);
    $stmt->bindParam(":deletion_reason", $_POST['deletion_reason']);

    $stmt->execute();

   $message = "Success"; 
     
    

    $db = null;
} catch (PDOException $e) {
    $message = "Error";
}

// Encode the message as JSON and output it
echo json_encode(array("message" => $message));