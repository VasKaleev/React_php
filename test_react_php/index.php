<?php
header('Access-Control-Allow-Origin: *');
$data = file_get_contents('./omar.txt');
echo $data;
