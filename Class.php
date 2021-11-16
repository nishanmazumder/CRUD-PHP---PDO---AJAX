<?php

class Data
{
    protected $con;
    protected $host = 'localhost';
    protected $db = 'js_server';
    protected $user = 'root';
    protected $pw = '';

    public function __construct()
    {
        $this->nm_db_connect();
    }

    //Database Connection
    protected function nm_db_connect()
    {
        try {
            $this->con = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db, $this->user, $this->pw);
        } catch (PDOException $err) {
            exit('Error:' . $err->getMessage());
        }
    }

    //Read data
    public function nm_read_data(string $sql)
    {
        //$sql = "SELECT * FROM nm_data";
        $query = $this->con->prepare($sql);
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_OBJ);

        if($query->rowCount() > 0){
            return $result;
        }else{
            return "No Data found!";
        }
        
    }











}
