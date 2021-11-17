<?php // require_once "server.php" ?> 
<?php  

// require_once "tester.php";

// $con = new Tester();


// $name = '';
// $msg = '';

// if(isset($_POST)){
//     $name = $_POST['nm_name'];
//     $msg = $_POST['nm_msg'];


//    // $result = $con->nm_insert_data("INSERT INTO nm_data (mname, msg) VALUES(:mname, :msg)", [$name, $msg]);
//     $result = $con->nm_insert_data('nm_data', ['mname', 'msg'], [$name, $msg]);

//     //echo $result;

//     print_r($result);
// }

// $persons = ['my', 'your', 'our'];
// $colors = ['red', 'yellow', 'green'];

// $string = "book color is";

// $combine = array_combine($persons, $colors);


// foreach($combine as $person => $color){
//   echo '<pre>'; 

//   echo $person.$string.$color;
// }

?> 

<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <title>JS</title>
</head>

<body>

  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <div class="alert alert-info nmAlert" role="alert"></div>

        <form action="" method="POST" id="">
          <div class="mb-3">
            <label for="nmMail" class="form-label">Name</label>
            <input type="text" class="form-control" name="nm_name" value="Nishan">
          </div>
          <div class="mb-3">
            <label for="nmMsg" class="form-label">Message</label>
            <input type="text" class="form-control" name="nm_msg" value="This is message">
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary mb-3">Send</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <a href="javascript:void(0)" class="btn btn-success" id="nmGetData">Get</a>
        <div class="get-data"></div>
      </div>
    </div>
  </div>

  <div class="body"></div>

  <!-- Optional JavaScript; choose one of the two! -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="custom.js"></script>

  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>