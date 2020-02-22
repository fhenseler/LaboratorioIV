import { Juego } from './juego'


export class JuegoClickea extends Juego {

    public resultado: number = 0;
    public timeLeft: number = 30;
    public timerStarted: boolean = false;
    public timeOut;
    // resultado: string;

      constructor(usuario?: string, nombre?: string, Ganó?: boolean) {
        super(usuario, "Clickeá rápido", Ganó);
    }



public startTimer() {
    if(this.timerStarted == false && this.resultado == 0)
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
            this.resultado += 1;
        }
    }

    public verificarJuego()
    {
        return this.resultado;
    }

}
