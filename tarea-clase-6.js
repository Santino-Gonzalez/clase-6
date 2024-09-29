/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let cantidadIntegrantes = document.querySelector("#cantidadIntegrantes");
let formEdades = document.querySelector("#inputsEdades");

document.querySelector("#botonSiguiente").onclick = function () {
    
    if (cantidadIntegrantes.value > 0) {
        
        document.querySelector("#botonSiguiente").style.display = "none";
        cantidadIntegrantes.disabled = true;
        
        let label = document.createElement("label");
        let br = document.createElement("br");
        let br2 = document.createElement("br");
        let botonCalcular = document.createElement("button");
        let botonReset = document.createElement("button");

        botonReset.id = "botonReset";
        botonReset.textContent = "Resetear";
        botonCalcular.textContent = "Calcular";
        label.innerHTML = "Ingrese la edad de sus familiares:";
        label.id = "labelEdad";
        
        formEdades.appendChild(label);
        formEdades.appendChild(br);
        formEdades.appendChild(br2);
        
        for (let i = 0; i < cantidadIntegrantes.value; i++) {
            let br = document.createElement("br");
            let br2 = document.createElement("br");
            let input = document.createElement("input");
            input.placeholder = `Edad del familiar Nº${i + 1}`;
            input.id = `edadIntegrante${i+1}`;
            formEdades.appendChild(input);
            formEdades.appendChild(br);
            formEdades.appendChild(br2);
        }
        
        formEdades.appendChild(botonCalcular);
        formEdades.appendChild(botonReset);

        document.querySelector("#botonReset").onclick = function(){

            label.remove();
            botonCalcular.remove();
            botonReset.remove();

            for (let i = 0; i < cantidadIntegrantes.value; i++) {
                let input = document.getElementById(`edadIntegrante${i+1}`);
                input.remove();
            }

            while (document.getElementById("inputsEdades").childNodes.length != 0) {
                document.getElementById("inputsEdades").removeChild(document.getElementById("inputsEdades").firstChild);
            }

            document.querySelector("#botonSiguiente").style.display = "";
            cantidadIntegrantes.disabled = false;

            return false;
        }
        
    }else{
        alert("La cantidad de integrantes de su familia debe ser de al menos 1.");
    }
    return false;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
