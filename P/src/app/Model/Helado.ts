export class Helado{
    public id : number;
    public sabor : string;
    public kilos : string;
    public tipo : string;
    public rutaFoto : string;

    constructor(data : Partial<Helado>){
        Object.assign(this, data);
    }
}