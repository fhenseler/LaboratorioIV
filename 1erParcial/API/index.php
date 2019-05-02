<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
include_once './Services/VehiculoAPI.php';

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

$app->post('/Vehiculos/registrar[/]', \VehiculoAPI::class . ':RegistrarVehiculo');
$app->get('/Vehiculos/listar[/]', \VehiculoAPI::class . ':ListarVehiculos');
$app->delete('/Vehiculos/{id}[/]', \VehiculoAPI::class . ':BajaVehiculo');
$app->post('/Vehiculos/modificar[/]', \VehiculoAPI::class . ':ModificarVehiculo');


$app->run();