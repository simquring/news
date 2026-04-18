<?php
$apiKey = "82fe453f3d7b40c8a22c312bb441a17f";
$url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=$apiKey";

$response = file_get_contents($url);
$data = json_decode($response, true);

echo json_encode($data);
?>
