<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
include_once './Services/HeladoAPI.php';

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails' => true
    ]
]);

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->post('/Helados/registrar[/]', \HeladoAPI::class . ':RegistrarHelado');
$app->get('/Helados/listar[/]', \HeladoAPI::class . ':ListarHelados');
$app->delete('/Helados/{id}[/]', \HeladoAPI::class . ':BajaHelado');
$app->post('/Helados/modificar[/]', \HeladoAPI::class . ':ModificarHelado');


$app->run();