export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador = 'Sin Nombre';
  public gano = false;

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.nombre = nombre;
    if (gano)
      this.gano = gano;
    if(jugador)
      this.jugador=jugador;

  }


  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "No hay Ayuda definida";
  }
}
