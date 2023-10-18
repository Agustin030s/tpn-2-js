import persona from "./models/persona.js"
import estudiante from "./models/estudiante.js"


window.addEventListener("DOMContentLoaded", () => {

    const formularioEstudiantes = document.getElementById("formEstudiantes");
    const tablaEstudiantes = document.getElementById("tablaEstudiantes");

    function datosIniciales(){
        const persona1 = new persona("Fonts", "Ignacio Esteban")
        const persona2 = new persona("Maza", "Sebastián Agustín")
        const persona3 = new persona("Mercado","Mariano Agustín")
        const persona4 = new persona("Sarmiento", "Joaquín Esteban")

        const estudiante1 = new estudiante(53524 ,persona1.getApellidos, persona1.getNombres, 10)
        const estudiante2 = new estudiante(50240 ,persona2.getApellidos, persona2.getNombres, 10)
        const estudiante3 = new estudiante(53843 ,persona3.getApellidos, persona3.getNombres, 10)
        const estudiante4 = new estudiante(50152 ,persona4.getApellidos, persona4.getNombres, 10)

        return [estudiante1, estudiante2, estudiante3, estudiante4];
    }

    let arrayEstudiantes = datosIniciales();

    function agregarDatosIniciales(){
        arrayEstudiantes.forEach( e => {

            const tr = document.createElement('tr');

            const tdLegajo = document.createElement('td');
            let legajo = document.createTextNode(e.getLegajo);
            tdLegajo.appendChild(legajo);
            tdLegajo.className = "legajo";

            const tdApellido = document.createElement('td');
            let apellidos = document.createTextNode(e.getApellidos);
            tdApellido.appendChild(apellidos);
            tdApellido.className = "apellidos";

            const tdNombres = document.createElement('td');
            let nombres = document.createTextNode(e.getNombres);
            tdNombres.appendChild(nombres);
            tdNombres.className = "nombres";

            const tdNota = document.createElement('td');
            let nota = document.createTextNode(e.getNota);
            tdNota.appendChild(nota);
            tdNota.className = "nota";

            const tdAcciones = document.createElement('td');
            tdAcciones.innerHTML = '<button class="btn btn-danger"><i class="bi bi-person-x"></i></button>';
            tdAcciones.onclick = botonEliminar;

            tr.appendChild(tdLegajo);
            tr.appendChild(tdApellido);
            tr.appendChild(tdNombres);
            tr.appendChild(tdNota);
            tr.appendChild(tdAcciones);

            tablaEstudiantes.appendChild(tr);
        })
    }

    function botonEliminar(event){
        const tr = this.closest('tr')
        const legajo = tr.querySelector(".legajo").innerText;
        const nombres = tr.querySelector(".nombres").innerText;
        const apellidos = tr.querySelector(".apellidos").innerText;

        let respuesta = confirm("¿Seguro de eliminar al estudiante " + nombres + " " + apellidos +" con legajo: "+ legajo +"?");

        if(respuesta){
            tr.remove();
            arrayEstudiantes=arrayEstudiantes.filter((e) => e.getLegajo != legajo);
        }
    }

    function validarLegajo(legajo){
        let bandera = true;

        arrayEstudiantes.forEach( e =>{
            if(e.legajo === legajo){
                bandera = false
            }
        });

        return bandera;
    }

    agregarDatosIniciales();

    
});