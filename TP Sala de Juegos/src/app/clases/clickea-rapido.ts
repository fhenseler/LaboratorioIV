import { Juego } from '../clases/juego'

export class JuegoClickea extends  Juego {
    contador: number = 0;
    timeLeft: number = 5;
    timerStarted: boolean = false;
    timeOut;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Clickea rápido",gano,jugador);
      }
    public verificar() {
        return false;
     }


public startTimer() {
    if(this.timerStarted == false && this.contador == 0)
    {
        let intervalId = setInterval(() => {
            if(this.timeLeft > 0)
            {        
                this.timerStarted = true;
                this.timeLeft--;
                console.log(this.timeLeft);
            }
        }, 1000)
        
        if(this.timeLeft == 0) 
        {
            clearInterval(intervalId);
            this.timeLeft = 0;
        }
    }
  }
    
    public startCount()
    {
        if(this.timeLeft > 0)
        {
            this.contador += 1;
        }
    }

}
