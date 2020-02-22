<?php
    class Foto{
        public static function GuardarFoto($foto,$ruta){
            $foto->moveTo($ruta);
        }

        public static function ObtenerExtension($foto){
            $mediaType = $foto["filetype"];
            $retorno = "";
            switch($mediaType){
                case "image/jpeg":
                    $retorno = ".jpg";
                    break;
                case "image/png":
                    $retorno = ".png";
                    break;
                case "image/gif":
                    $retorno = ".gif";
                    break;
                default:
                    $retorno = "ERROR";
                    break;
            }

            return $retorno;
        }
    }
?>