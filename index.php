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

        <form action="" method="POST" id="nmForm">
          <div class="mb-3">
            <label for="nmName" class="form-label">Name</label>
            <input type="text" class="form-control" name="nm_name" id="nmName" value="Nishan">
          </div>
          <div class="mb-3">
            <label for="nmMsg" class="form-label">Message</label>
            <input type="text" class="form-control" name="nm_msg" id="nmMsg" value="This is message">
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary mb-3 nm-submit">Send</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- <a href="javascript:void(0)" class="btn btn-success" id="nmGetData">Get</a> -->
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