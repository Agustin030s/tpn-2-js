export default class Persona{
    constructor(apellidos, nombres){
        this.apellidos = apellidos;
        this.nombres = nombres;
    }

    get getApellidos(){
        return `${this.apellidos}`
    }

    get getNombres(){
        return `${this.nombres}`
    }
}