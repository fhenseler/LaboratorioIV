import { Juego } from './juego';

export class JuegoPiedraPapelTijera extends Juego {
   public numeroSecreto: number = 0;
   public   numeroIngresado = 0;
   public    resultado: any;
    constructor(nombre?: string, Ganó?: any, jugador?: any) {
        super("Piedra Papel Tijera", Ganó, jugador);

        this.numeroSecreto = Math.floor((Math.random() * 90) + 1);

    }
    /**
     *  1 = piedra
     *  2 = papel 
     *  3 = tijeras 
     */
    jugar() {
        if(this.numeroSecreto <= 30)
        {
            this.numeroSecreto = 1;
        }
        if(this.numeroSecreto > 30 && this.numeroSecreto <= 60)
        {
            this.numeroSecreto = 2;
        }
        if(this.numeroSecreto > 60)
        {
            this.numeroSecreto = 3;
        }
        switch (this.numeroSecreto) {
            case 1:
                if (this.numeroIngresado == 2) {
                    this.resultado = "Ganó";
                }
                if (this.numeroIngresado == 3) {
                    this.resultado = "Perdió";
                }
                if (this.numeroIngresado == 1) {
                    this.resultado = "Empató";
                }
                break;
            case 2:
                if (this.numeroIngresado == 2) {
                    this.resultado = "Empató";
                }
                if (this.numeroIngresado == 3) {
                    this.resultado = "Ganó";
                }
                if (this.numeroIngresado == 1) {
                    this.resultado = "Perdió";
                }
                break;
            case 3:
                if (this.numeroIngresado == 2) {
                    this.resultado = "Perdió";
                }
                if (this.numeroIngresado == 3) {
                    this.resultado = "Empató";
                }
                if (this.numeroIngresado == 1) {
                    this.resultado = "Ganó";
                }
                break;
            default:
            this.resultado = "error";
                break;
        }
    }

    public verificarJuego() : any {
       this.jugar();
       return this.resultado;
       
    }
}
