<?php
$data = [
    'message' => 'Bonjour, ceci est une réponse du serveur sans en-têtes CORS.'
];
header('Content-Type: application/json');
echo json_encode($data);
?>
