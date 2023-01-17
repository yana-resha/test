<?php
$name = $_POST['name'];
$vacation = $_POST['vacation'];
$age = $_POST['age'];
$email = $_POST['email'];
$description = $_POST['competence'];
 
json_encode(["ok"=>"Заявка отправлена"]);