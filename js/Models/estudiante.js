import persona from './persona.js'

export default class estudiante extends persona {
    constructor(legajo, apellidos, nombres, nota) {
        super(apellidos, nombres)
        this.legajo = legajo;
        this.nota = nota;
    }


    get getLegajo() {
        return `${this.legajo}`;
    }


    get getNota() {
        return `${this.nota}`;
    }
}