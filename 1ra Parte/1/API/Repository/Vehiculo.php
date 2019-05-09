<?php
include_once("DataAccess/AccesoDatos.php");
class Vehiculo
{
    public $id;
    public $modelo;
    public $marca;
    public $cantidadPuertas;
    public $rutaFoto;

    ///Registrar / Alta
    public static function Registrar($modelo, $marca, $cantidadPuertas)
    {
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
        $respuesta = "";
        try {            
            $consulta = $objetoAccesoDato->RetornarConsulta("INSERT INTO Vehiculos (modelo, marca, cantidadPuertas) 
            VALUES (:modelo, :marca, :cantidadPuertas)");

            $consulta->bindValue(':modelo', $modelo, PDO::PARAM_STR);
            $consulta->bindValue(':cantidadPuertas', $cantidadPuertas, PDO::PARAM_STR);
            $consulta->bindValue(':marca', $marca, PDO::PARAM_STR);

            $consulta->execute();

            $respuesta = array("Estado" => "OK", "Mensaje" => "Registrado correctamente.");

        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }

    ///Baja.
    public static function Baja($id)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

            $consulta = $objetoAccesoDato->RetornarConsulta("DELETE FROM Vehiculos WHERE id = :id");

            $consulta->bindValue(':id', $id, PDO::PARAM_INT);

            $consulta->execute();

            $respuesta = array("Estado" => "OK", "Mensaje" => "Baja correcta.");

        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }

    ///Modificación.
    public static function Modificar($id, $modelo, $marca, $cantidadPuertas)
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
            
            $consulta = $objetoAccesoDato->RetornarConsulta("UPDATE Vehiculos set modelo = :modelo, marca = :marca, cantidadPuertas = :cantidadPuertas
                                                            WHERE id = :id");

            $consulta->bindValue(':modelo', $modelo, PDO::PARAM_STR);
            $consulta->bindValue(':marca', $marca, PDO::PARAM_STR);
            $consulta->bindValue(':id', $id, PDO::PARAM_INT);
            $consulta->bindValue(':cantidadPuertas', $cantidadPuertas, PDO::PARAM_INT);

            $consulta->execute();

            $respuesta = array("Estado" => "OK", "Mensaje" => "Modificado correctamente.");

        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }

    ///Listar.
    public static function Listar()
    {
        try {
            $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

            $consulta = $objetoAccesoDato->RetornarConsulta("SELECT id, modelo, marca, cantidadPuertas, rutaFoto FROM Vehiculos");

            $consulta->execute();

            $respuesta = $consulta->fetchAll(PDO::FETCH_CLASS, "Vehiculo");
        } catch (Exception $e) {
            $mensaje = $e->getMessage();
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "$mensaje");
        }
        finally {
            return $respuesta;
        }
    }
}
?>