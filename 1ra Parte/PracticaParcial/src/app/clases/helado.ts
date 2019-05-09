export class Helado {
  public sabor: string;
  public tipo: string;
  public kilos: number;

  constructor(sabor?: string, tipo?: string, kilos?: number) {
    if (sabor){
      this.sabor = sabor;
    }

    if (tipo){
      this.tipo = tipo;
    }

    if (kilos){
      this.kilos = kilos;
    }
  }

}
