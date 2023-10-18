import Persona from './Models/persona'
import Estudiante from './Models/estudiante'

(
    function datosIniciales(){
        const persona1 = new Persona("Fonts", "Ignacio Esteban")
        const persona2 = new Persona("Maza", "Sebastian Agustin")
        const persona3 = new Persona("Mercado","Mariano Agustin")
        const persona4 = new Persona("Sarmiento", "Joaquin Esteban")

        const estudiante1 = new Estudiante(53524 ,persona1.getApellidos, persona1.getNombres, 10)
        const estudiante2 = new Estudiante(50240 ,persona2.getApellidos, persona2.getNombres, 10)
        const estudiante3 = new Estudiante(53843 ,persona3.getApellidos, persona3.getNombres, 10)
        const estudiante4 = new Estudiante(50152 ,persona4.getApellidos, persona4.getNombres, 10)

        return [estudiante1, estudiante2, estudiante3, estudiante4];
    }
)();