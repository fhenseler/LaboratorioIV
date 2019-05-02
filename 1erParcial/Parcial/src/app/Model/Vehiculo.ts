export class Vehiculo{
    public id : number;
    public modelo : string;
    public marca : string;
    public cantidadPuertas : string;
    public rutaFoto : string;

    constructor(data : Partial<Vehiculo>){
        Object.assign(this, data);
    }
}