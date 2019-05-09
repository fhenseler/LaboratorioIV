<?php
header('Access-Control-Allow-Origin: *');
// include_once("Repository/Token.php");
include_once("Repository/Helado.php");
class HeladoAPI extends Helado
{  
    ///Registrar / Alta
    public function RegistrarHelado($request, $response, $args)
    {
        $json = $request->getBody();
        $data = json_decode($json, true);

        $respuesta = Helado::Registrar($data["sabor"],$data["kilos"],$data["tipo"]);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Modificación.
    public function ModificarHelado($request, $response, $args)
    {
        $parametros = $request->getParsedBody();
        $usuario = $parametros["usuario"];
        $id = $parametros["id"];
        $nombre = $parametros["nombre"];
        $tipo = $parametros["tipo"];

        $respuesta = Helado::Modificar($id, $usuario, $nombre, $tipo);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Listar.
    public function ListarHelados($request, $response, $args)
    {
        $respuesta = Helado::Listar();
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Baja
    public function BajaHelado($request, $response, $args)
    {
        $id = $args["id"];
        $respuesta = Helado::Baja($id);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }
}