import { Juego } from "./juego";

export class JuegoTateti extends Juego {
    lugares = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    resultado: string;
    espacio = 0;

    constructor(usuario?: string, nombre?: string, Ganó?: boolean) {
        super(usuario, "Tateti", Ganó);
    }

    verificarJuego() {
        console.log(this.resultado);

    }

   signo(signo, jugador) {
        let x: string = "";

        if (this.lugares[0] == signo && this.lugares[1] == signo && this.lugares[2] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }
        }
        else if (this.lugares[3] == signo && this.lugares[4] == signo && this.lugares[5] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }
        }
        else if (this.lugares[6] == signo && this.lugares[7] == signo && this.lugares[8] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }

        }
        else if (this.lugares[0] == signo && this.lugares[3] == signo && this.lugares[6] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }

        }
        else if (this.lugares[1] == signo && this.lugares[4] == signo && this.lugares[7] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }

        }
        else if (this.lugares[2] == signo && this.lugares[5] == signo && this.lugares[8] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }
        }
        else if (this.lugares[0] == signo && this.lugares[4] == signo && this.lugares[8] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }
        }
        else if (this.lugares[2] == signo && this.lugares[4] == signo && this.lugares[6] == signo) {
            if (jugador == "jugador") {
                x = "Ganó";
            }
            if (jugador == "maquina") {
                x = "Perdió";
            }
        }

        for (let i = 0; i < 10; i++) {
            if (this.lugares[i] != "-") {
                this.espacio = this.espacio + 1;
            }
        }
        
        if (x == "" && this.espacio == 10)
            x = "Empate";

        this.espacio = 0;
        console.log(x);
        return x;
    }
}
