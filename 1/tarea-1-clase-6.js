/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/



function createNewMember(amount){
    const $div = document.createElement("div")
    $div.className = "member"

    const $label = document.createElement("label")
    $label.textContent = "Ingrese la edad del familiar Nº" + (amount + 1) + ":"
    const $input = document.createElement("input")
    $input.className = "age"
    $input.type = "number"
    $input.placeholder = "Edad del familiar"
    let $listOfMembers = document.querySelector("#list-Of-Members")

    $div.appendChild($label)
    $div.appendChild($input)
    $div.appendChild($divButtonAdd)
    $div.appendChild($divButtonRemove)
    $listOfMembers.appendChild($div)
}


function createNewMember2(numberOfMembers){
    for(let i=0; i < numberOfMembers; i++){
        createNewMember(i)
    }
}

document.querySelector("#button-Next").onclick = function(){
    const $numberOfMembers = document.querySelector("#number-Of-Members")
    const numberOfMembers = $numberOfMembers.value
    createNewMember2(numberOfMembers)
    return false
}


const allRelatives = document.querySelectorAll("p")

function convertMembersToArray(){
    let $members = document.querySelectorAll(".age")
    let array = []
    for(let i = 0; i < $members.length; i++){
        array.push(Number($members[i].value))
    }
    return array
}

function calculateYoungerAge(array){
    let youngerAge = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < youngerAge){
            youngerAge = array[i]
        }
    }
    return youngerAge
}

function calculateAverageOfFamily(array){
    let average = 0
    for(let i = 0; i < array.length; i++){
        average = average + Number(array[i])
    }
    average = average / array.length
    return average
}

function calculateOlder(array){
    let older = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > older){
            older = array[i]
        }
    }
    return older
}

document.querySelector("#button-Calculate").onclick = function(){
    const arrayOfMembers = convertMembersToArray()
    const youngerAge = calculateYoungerAge(arrayOfMembers)
    const averageFamily = calculateAverageOfFamily(arrayOfMembers)
    const older = calculateOlder(arrayOfMembers)

    document.querySelector("#average-family").textContent = `El promedio del grupo familiar es de ${averageFamily} años`
    document.querySelector("#younger-age").textContent = `La edad mas baja de la familia es de ${youngerAge} años`
    document.querySelector("#older").textContent = `La edad mas alta de la familia es de ${older} años`
}

document.querySelector("#reset").onclick = function(){
    let $members = document.querySelectorAll(".member")
    for (let i = 0; i < $members.length; i++) {
        $members[i].remove();
    }
    document.querySelector("#average-family").textContent = ""
    document.querySelector("#younger-age").textContent = ""
    document.querySelector("#older").textContent = ""
}




/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
