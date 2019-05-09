import { Juego } from "../clases/juego";

export class JuegoAgilidad extends Juego
{
    public numeroUno : number;
    public numeroDos : number;
    public numeroIngresado : number;
    public cantCuentas : number = 0;
    public cantAciertos : number = 0;
    public total : number;
    public resultado : boolean;
    public operador : any;
    public cuenta : any;

    constructor(juego ? : string, gano ? : boolean, usuario ? : string)
    {
        super("Agilidad aritmética", gano, usuario);
    }

    public comenzarJuego()
    {
        this.numeroUno = Math.floor((Math.random() * 10) + 1);
        this.numeroDos = Math.floor((Math.random() * 10) + 1);
        this.operador = Math.floor((Math.random() * 4) + 1);

        switch (this.operador) 
        {
            case 1:
                this.cuenta = "+";
                break;
            case 2:
                this.cuenta = "-";
                break;
            case 3:
                this.cuenta = "*";
                break;
            case 4:
                this.cuenta = "/";
                break;
            default:
                break;
        }

        switch (this.operador)
        {
            case 1:
                this.cuenta = "+";
                this.total = this.numeroUno + this.numeroDos;
                break;
            case 2:
                this.cuenta = "-";
                this.total = this.numeroUno - this.numeroDos;
                break;
            case 3:
                this.cuenta = "*";
                this.total = this.numeroUno * this.numeroDos;
                break;
            case 4:
                this.cuenta = "/";
                this.total = this.numeroUno / this.numeroDos;
                break;
            default:
                break;
        }
    }

    public verificar()
    {
        if(this.numeroIngresado == this.total && this.cantCuentas <= 5)
        {
            this.cantAciertos++;
            this.cantCuentas++;
        }
        else
        {
            this.cantCuentas++;
        }
        return true;
    }
}