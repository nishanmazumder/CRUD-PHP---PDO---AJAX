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
            $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $err) {
            exit('Error:' . $err->getMessage());
        }
    }

    //Read data
    public function nm_read_data(string $tbl)
    {
        try {
            $query = $this->con->prepare('SELECT * FROM ' . $tbl . '');
            $query->execute();
            $result = $query->fetchAll(PDO::FETCH_OBJ);

            if ($query->rowCount() > 0) {
                return $result;
            } else {
                return "No Data found!";
            }
        } catch (PDOException $err) {
            return 'Error:' . $query . ' ' . $err->getMessage();
        }
    }

    // Insert Data
    public function nm_insert_data(string $tbl, array $data)
    {
        foreach ($data as $column => $value) {
            $col[] = $column;
            $val[] = $value;
        }
        // Get column
        $columns = implode(',', $col);

        // Get binding values
        foreach ($col as $bind_val) {
            $bind_values[] = ":" . $bind_val;
        }
        $bind_values = implode(',', $bind_values);

        // Query
        try {
            $query = $this->con->prepare('INSERT INTO ' . $tbl . ' (' . $columns . ') VALUES(' . $bind_values . ')');
            $query->execute($data);

            if ($this->con->lastInsertId()) {
                return "Inserted!";
            } else {
                return "Not inserted!";
            }
        } catch (PDOException $err) {
            return "Error:" . $query . " " . $err->getMessage();
        }
    }

    public function nm_update_data(string $tbl, int $id)
    {
        try {
            $query = $this->con->prepare('SELECT * FROM ' . $tbl . ' WHERE id=' . $id . '');
            $query->execute();
            $result = $query->fetch(PDO::FETCH_ASSOC);

            if (!empty($result)) {
                return $result;
            } else {
                return "Not found!";
            }
        } catch (PDOException $err) {
            return "Error:" . $query . " " . $err->getMessage();
        }
    }

    public function nm_delete_data(string $tbl, int $id)
    {
        try {
            $query = $this->con->prepare('DELETE FROM ' . $tbl . ' WHERE id = ' . $id . '');
            //$query->bindParam(':id', $id, PDO::PARAM_STR);
            $query->execute();

            return "Data Deleted!";
        } catch (PDOException $err) {
            return "Error:" . $query . " " . $err->getMessage();
        }
    }
}
