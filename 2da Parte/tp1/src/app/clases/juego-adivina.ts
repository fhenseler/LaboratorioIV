import { Juego } from "../clases/juego";

export class JuegoAdivina extends Juego
{
    public numeroSecreto : number = 0;
    public numeroIngresado : number = 0;
    public intentos : number = 0;
    public resultado : string;

    constructor(usuario ? : string, juego ? : string, gano ? : boolean)
    {
        super(usuario,"Adivina el número",gano);
    }

    public verificarJuego()
    {
        if(this.numeroIngresado == this.numeroSecreto && this.intentos < 9)
        {
            this.intentos++;
            this.resultado = "Ganó";
        }
        else
        {
            if (this.intentos < 9)
            {
                this.intentos++;
                this.resultado = "Erró";
            }
            else
            {
                this.intentos++;
                this.resultado = "Perdió";
            }
        }

        return this.resultado;
    }

    public generarNumero()
    {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    }

    public retornarAyuda()
    {
        if(this.numeroIngresado < this.numeroSecreto)
        {
            return "¡Falta un poco más!";
        }

        return "¡Te pasaste!";
    }
}
