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
        $query = $this->con->prepare($sql);
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_OBJ);

        if ($query->rowCount() > 0) {
            return $result;
        } else {
            return "No Data found!";
        }
    }

    // Insert Data
    public function nm_insert_data(string $tbl, array $col, array $val)
    {
        // Get column
        $column = implode(',', $col);

        // Set values
        $values = '';
        $pdo_cons = '';
        foreach ($col as $item) {
            $values .= ':' . $item . ',';

            // Predefined Constant
            if (is_int($item)) {
                $pdo_cons = PDO::PARAM_INT;
            } elseif (is_string($item)) {
                $pdo_cons = PDO::PARAM_STR;
            } elseif (is_bool($item)) {
                $pdo_cons = PDO::PARAM_BOOL;
            } else {
                $pdo_cons = PDO::PARAM_NULL;
            }
        }

        $pdo = "PDO";
        $pdo2 = "PDO PDO PDO";
        //Query statement
        //$query = $this->con->prepare('INSERT INTO' . $tbl . ' (' . $column . ') VALUES(' . $values . ')');
        $query = $this->con->prepare('INSERT INTO nm_data (mname, msg) VALUES(:mname, :msg,)');

        //return $query;

        // $bind = array_combine($col, $val);
        // $bind_param= '';
        // foreach($bind as $column => $values){
        //     $bind_param .= ":".$column;
        //     $query->bindParam($bind_param, $values, $pdo_cons);
        // }

        $query->bindParam(":mname", $pdo, PDO::PARAM_STR);
        $query->bindParam(":msg", $pdo2, PDO::PARAM_STR);

        // return $test_d;


        $query->execute();

        // if ($this->con->lastInsertId()) {
        //     echo "Inserted!";
        // }else{
        //     echo "Not inserted!";
        // }

        if ($this->con->lastInsertId()) {
            return "Inserted!";
        } else {
            return "Not inserted!";
        }


        //return $items;
    }

    public function nm_delete_data(int $id)
    {
        $query = $this->con->prepare("DELETE FROM nm_data WHERE id = :id");
        $query->bindParam(':id', $id, PDO::PARAM_STR);
        $query->execute();

        return "Data Deleted!";
    }
}
