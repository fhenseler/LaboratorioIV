import { Juego } from '../clases/juego'

export class JuegoTateti extends Juego {
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Tateti",gano,jugador);
      }

   
    public verificar() {
        return true;
     }
}