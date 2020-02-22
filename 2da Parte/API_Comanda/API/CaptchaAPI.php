<?php
include_once("Entidades/Captcha.php");
class CaptchaApi extends Captcha
{  
    ///Valida la respuesta del captcha.
    public function PostCaptcha($request, $response, $args)
    {
        $json = $request->getBody();
        $data = json_decode($json, true);
        $key = $data["key"];
        $color = $data["color"];

        $respuesta = Captcha::Validar($key, $color);
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }

    ///Envía un desafío de captcha
    public function GetCaptcha($request, $response, $args)
    {
        $respuesta = Captcha::Obtener();
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }
}