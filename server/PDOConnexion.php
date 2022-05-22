<?php

class PDOConnexion
{
    private $host = "db";
    private $user = "root";
    private $password = "example";
    private $db = "db_imdb";
    public $connexion;

    public function __construct()
    {
        try {
            $this->connexion = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db, $this->user, $this->password);
        } catch (Exception $e) {
            die('Error:' . $e->getMessage());
        }
    }

    public function getConnexion(): PDO
    {
        return $this->connexion;
    }
}
