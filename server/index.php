<?php

require_once('Headers.php');
require_once('PDOConnexion.php');



$method = $_SERVER['REQUEST_METHOD'];

// var_dump($method);
// var_dump($_POST['title']);
// die();
switch ($method) {
    case 'POST':
        $db = new PDOConnexion();
        $conn = $db->getConnexion();
        $title = $_POST['title'];
        $description = $_POST['description'];
        $image = $_POST['image'];

        $insert = "INSERT INTO movie(title, description, image) VALUES (:title, :description, :image)";
        $request = $conn->prepare($insert);

        $res = $request->execute(array(
            'title' => $title,
            'description' => $description,
            'image' => $image
        ));

        echo json_encode([
            'data' => $res,
            'message' => 'Send with success'
        ]);
}
