import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego {
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra papel tijera",gano,jugador);
      }

   
    public verificar() {
        return true;
     }
}