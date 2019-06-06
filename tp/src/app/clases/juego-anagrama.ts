import { Juego } from "../clases/juego";

export class JuegoAnagrama extends Juego 
{
    public arrayDePalabras : string[] = ["Alemania","Italia","Brasil","Argentina","Colombia","Rusia","Grecia","Mexico"];
    public palabraDesordenada : string = "";
    public palabraOrdenada : string;
    public resultado : string;

    constructor(usuario ? : string, juego ? : string, gano ? : boolean)
    {
        super(usuario,"Anagrama",gano);
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
            this.resultado = "Ganó";
        }
        else
        {
            this.resultado = "Error";
        }
    }

    public verificarJuego()
    {
        return this.resultado;
    }
}
