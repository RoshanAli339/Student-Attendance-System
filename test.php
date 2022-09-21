<?php
function clean_text($string)
{
 $string = trim($string);
 $string = stripslashes($string);
 $string = htmlspecialchars($string);
 return $string;
}

$name = clean_text($_POST["name"]);
$number = clean_text($_POST["number"]);
$year = clean_text($_POST["year"]);
$percentage = clean_text($_POST["percentage"]);

$file_open = fopen("attendance.csv", "a");
$no_rows = count(file("attendance.csv"));
$form_data = array(
   'sr_no'  => $no_rows,
   'name'  => $name,
   'email'  => $email,
   'subject' => $subject,
   'message' => $message
);
fputcsv($file_open, $form_data);
?>