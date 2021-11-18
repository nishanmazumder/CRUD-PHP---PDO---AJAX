<?php

class Data
{
    protected $con;
    protected $host = 'localhost';
    protected $db = 'js_server';
    protected $user = 'root';
    protected $pw = '';

    public $pdo_constant;

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
        $columns = implode(',', $col);
        $columns = rtrim($columns);

        // Get binding values
        $values = '';
        //$sql_bind = [];
        foreach ($col as $values) {
            $values .= ":" . $values . ",";
            $sql_bind[] = ":" . $values;
        }
        $values = rtrim($values, ',');

        // Ger Predifined constatn
        $this->nm_get_prdf_const($val);

        // Query statement
        $query = $this->con->prepare('INSERT INTO ' . $tbl . ' (' . $columns . ') VALUES(' . $values . ')');

        // return $query;

        $bind = array_combine($sql_bind, $val);
        // $bind_param= '';
        foreach ($bind as $column => $values) {
            //$bind_param .= ":".$column;
            $query->bindParam($column, $values, $this->pdo_constant);
        }

        // $query->bindParam(":mname", $pdo, PDO::PARAM_STR);
        // $query->bindParam(":msg", $pdo2, PDO::PARAM_STR);

        // return $test_d;

        // foreach($val as $values){
        //     $query->bindParam($bind_param, $values, $pdo_cons);
        // }


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

    // Get Predefined Constant
    public function nm_get_prdf_const(array $val)
    {
        foreach ($val as $item) {
            if (is_int($item)) {
                $this->pdo_constant = PDO::PARAM_INT;
            } elseif (is_string($item)) {
                $this->pdo_constant = PDO::PARAM_STR;
            } elseif (is_bool($item)) {
                $this->pdo_constant = PDO::PARAM_BOOL;
            } else {
                $this->pdo_constant = PDO::PARAM_NULL;
            }
        }
    }

    public function nm_delete_data(int $id)
    {
        $query = $this->con->prepare("DELETE FROM nm_data WHERE id = :id");
        $query->bindParam(':id', $id, PDO::PARAM_STR);
        $query->execute();

        return "Data Deleted!";
    }
}
