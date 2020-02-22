export abstract class Juego {
    public usuario : any = 'Sin nombre';
    public juego : any = 'Sin juego';
    public gano : any = false;

    constructor(usuario ? : string, juego ? : string, gano ? : boolean)
    {
        if(usuario)
        {
            this.usuario = usuario;
        }

        if(juego)
        {
            this.juego = juego;
        }

        if(gano)
        {
            this.gano = gano;
        }
    }
    
    //Verifica el resultado del juego
    public abstract verificarJuego() : any;

    //¿Ayuda? 
    public retornarAyuda()
    {
        return "No hay ayuda definida";
    }   
}
