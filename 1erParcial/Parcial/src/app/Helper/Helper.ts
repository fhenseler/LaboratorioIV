export abstract class Helper{
    public static BorrarEspacios(cadena : string):string{
        return cadena.replace(/ /g, '');
    }
}