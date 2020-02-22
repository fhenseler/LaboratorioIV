<?php
header('Access-Control-Allow-Origin: *');
include_once("Repository/Token.php");
include_once("Repository/Usuario.php");
class UsuarioApi extends Usuario
{  
    ///Registrar / Alta
    public function RegistrarUsuario($request, $response, $args)
    {
        $json = $request->getBody();
        $data = json_decode($json, true);

        $respuesta = Usuario::Registrar($data["nombre"],$data["apellido"],$data["tipo"],$data["foto"]);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Listar.
    public function ListarUsuarios($request, $response, $args)
    {
        $respuesta = Usuario::Listar();
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Baja
    public function BajaUsuario($request, $response, $args)
    {
        $id = $args["id"];
        $respuesta = Usuario::Baja($id);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }
}