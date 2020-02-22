<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
include_once './Services/UsuarioAPI.php';

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

$app->post('/Usuarios/registrar[/]', \UsuarioAPI::class . ':RegistrarUsuario');
$app->get('/Usuarios/listar[/]', \UsuarioAPI::class . ':ListarUsuarios');
$app->delete('/Usuarios/{id}[/]', \UsuarioAPI::class . ':BajaUsuario');

$app->run();