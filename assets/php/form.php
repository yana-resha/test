<?php
$name = $_POST['name'];
$vacation = $_POST['vacation'];
$age = $_POST['age'];
$email = $_POST['email'];
$description = $_POST['competence'];

echo "$name";
 
json_encode(["ok"=>"Заявка отправлена"]);