<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postData = file_get_contents('php://input');
    $data = html_entity_decode($postData);
    $data1 = json_decode($data, true);
    var_dump($data1);
    echo is_array($data1) && count($data1 )? 'true' : 'false';
  }

