import { Juego } from "../clases/juego";

export class JuegoAnagrama extends Juego 
{
    public arrayDePalabras : string[] = ["Alemania","Italia","Brasil","Argentina","Colombia","Rusia","Grecia","Mexico"];
    public palabraDesordenada : string = "";
    public palabraOrdenada : string;
    public gano : boolean;

    constructor(juego ? : string, gano ? : boolean, usuario ? : string)
    {
        super("Anagrama", gano, usuario);
    }

    public generarPalabra()
    {
        var numero = Math.floor((Math.random() * 6) + 1);
        this.palabraOrdenada = this.arrayDePalabras[numero];
        this.gano = false;

        this.palabraDesordenada = this.palabraOrdenada.split("").sort().join("");

        console.log(this.palabraDesordenada);

        return this.palabraDesordenada;
    }

    public comenzarJuego(palabraIngresada)
    {
        if(this.palabraOrdenada.toLowerCase() == palabraIngresada.toLowerCase())
        {
            this.gano = true;
        }
        else
        {
            this.gano = false;
        }
    }

    public verificar()
    {
        return this.gano;
    }
}