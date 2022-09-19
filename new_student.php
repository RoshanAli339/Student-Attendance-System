<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit']) )
    {
        $conn = mysqli_connect('localhost','root', '', 'attendance') or die("Connection failed" .mysqli_connect_error());
        if(isset($_POST['name']) && isset($_POST['number']) && isset($_POST['year']) && isset($_POST['attendance']))
        {
             $name = $_POST['name'];
             $number = $_POST['number'];
             $year = $_POST['year'];
             $attendance = $_POST['attendance'];

             $sql = "INSERT INTO 'students' ('Name', 'Regd. No.', 'Year of study', 'Percentage') VALUES ('$name', '$number', '$year', '$attendance')";

             $query = mysqli_query($conn, $sql);
             if($query)
             {
                echo 'Entry Successful';
             }
             else
             {
                echo 'Error occurred';
             }
        }
    }
?>