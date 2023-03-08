<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $name = $_POST["sName"];
        $roll = $_POST["roll"];
        $year = $_POST["year"];
        $percent = $_POST["percentage"];

         //server details
         $server = "localhost";
         $username = "root";
         $passwd = "";
         $database = "attendance";
 
         //connecting to server
         $conn = mysqli_connect($server, $username, $passwd, $database);

         if (!$conn)
         {
            die("Sorry connection failed". mysqli_connect_error());
         }
         else
         {
            $sql = "INSERT INTO `students` (`Name`, `Roll No.`, `Year`, `Percentage`) 
                    VALUES ('$name', '$roll', '$year', '$percent')";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success!</strong> Your entry has been submitted successfully!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>';
              
            } else {
                // echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
                echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> We are facing some technical issue and your entry ws not submitted successfully! We regret the inconvenience caused!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>';
            }
         }
    }
?>