import Persona from 'persona.js'

export default class Estudiante extends Persona{
    constructor(legajo, apellidos, nombres, nota){
        super(apellidos, nombres);
        this.legajo = legajo;
        this.nota = nota;
    }

    get getLegajo(){
        return `${this.legajo}`
    }

    get getNota(){
        return `${this.nota}`
    }
}