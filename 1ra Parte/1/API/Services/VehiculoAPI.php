<?php
header('Access-Control-Allow-Origin: *');
include_once("Repository/Token.php");
include_once("Repository/Vehiculo.php");
class VehiculoApi extends Vehiculo
{  
    ///Registrar / Alta
    public function RegistrarVehiculo($request, $response, $args)
    {
        $json = $request->getBody();
        $data = json_decode($json, true);

        $respuesta = Vehiculo::Registrar($data["modelo"],$data["marca"],$data["cantPuertas"]);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Modificación.
    public function ModificarVehiculo($request, $response, $args)
    {
        $parametros = $request->getParsedBody();
        $usuario = $parametros["usuario"];
        $id = $parametros["id"];
        $nombre = $parametros["nombre"];
        $tipo = $parametros["tipo"];

        $respuesta = Vehiculo::Modificar($id, $usuario, $nombre, $tipo);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Listar.
    public function ListarVehiculos($request, $response, $args)
    {
        $respuesta = Vehiculo::Listar();
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Baja
    public function BajaVehiculo($request, $response, $args)
    {
        $id = $args["id"];
        $respuesta = Vehiculo::Baja($id);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }
}