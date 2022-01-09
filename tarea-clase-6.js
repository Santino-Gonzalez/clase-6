/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
let $div 
let $input

function createNewMember(amount){
    $div = document.createElement("div")
    $div.className = "member"

    const $label = document.createElement("label")
    $label.textContent = "Ingrese la edad del familiar Nº" + (amount + 1) + ":"
    $input = document.createElement("input")
    $input.className = "age"
    $input.type = "number"
    $input.placeholder = "Edad del familiar"
    let $listOfMembers = document.querySelector("#list-Of-Members")

    $div.appendChild($label)
    $div.appendChild($input)
    $listOfMembers.appendChild($div)
}

function createNewMember2(numberOfMembers){
    for(let i=0; i < numberOfMembers; i++){
        createNewMember(i)
    }
}

document.querySelector("#button-Next").onclick = function(){
    const $numberOfMembers = document.querySelector("#number-Of-Members").value
    createNewMember2($numberOfMembers)
    document.querySelector("#button-Next").disabled = true
    document.querySelector("#add-salaries").disabled = false
    if ($numberOfMembers <= 0){
        document.querySelector("#button-Next").disabled = false
    }
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

document.querySelector("#button-calculate").onclick = function(){
    const arrayOfMembers = convertMembersToArray()
    const youngerAge = calculateYoungerAge(arrayOfMembers)
    const averageFamily = calculateAverageOfFamily(arrayOfMembers)
    const older = calculateOlder(arrayOfMembers)

    document.querySelector("#average-family").textContent = `El promedio del grupo familiar es de ${averageFamily} años`
    document.querySelector("#younger-age").textContent = `La edad mas baja de la familia es de ${youngerAge} años`
    document.querySelector("#older").textContent = `La edad mas alta de la familia es de ${older} años`

    const $salaries = document.getElementsByClassName("input-salaries")
    const arrayOfWages = convertWagesToArray($salaries)
    const lowerWage = calculateLowerSalary(arrayOfWages)
    const higherSalary = calculateHigherSalary(arrayOfWages)
    const averageSalary = calculateAverageSalary(arrayOfWages)
    const averageMonthlySalary = calculateAverageMonthlySalary(arrayOfWages)

    const $emLowerWage = document.querySelector("#lower-wage")
    const $emHigherSalary = document.querySelector("#higher-salary")
    const $emAverageSalary = document.querySelector("#average-salary")
    const $emAverageMonthlySalary = document.querySelector("#average-monthly-salary")

    $emAverageMonthlySalary.textContent = `El salario mensual promedio de la familia es de $${averageMonthlySalary}`
    $emLowerWage.textContent = `El salario mas bajo de la familia es de $${lowerWage}`
    $emHigherSalary.textContent = `El salario mas alto de la familia es de $${higherSalary}`
    $emAverageSalary.textContent = `El salario promedio de la familia es de $${averageSalary}`
}

document.querySelector("#reset").onclick = function(){
    let $members = document.querySelectorAll(".member")
    const $label = document.querySelectorAll(".salaries")
    for (let i = 0; i < $members.length; i++) {
        $members[i].remove();
    }
    for (let i = 0; i < $label.length; i++) {
        $label[i].remove();
    }
    document.querySelector("#average-family").textContent = ""
    document.querySelector("#younger-age").textContent = ""
    document.querySelector("#older").textContent = ""
    document.querySelector("#add-salaries").disabled = false
    document.querySelector("#button-Next").disabled = false
}




/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#add-salaries").onclick = function(){
    const $inputs = document.querySelectorAll(".age")
    const $salaryList = document.querySelector("#list-salaries")

    for(let i = 0; i < $inputs.length; i++){
        const $input = document.createElement("input")
        const $p = document.createElement("p")
        const $label = document.createElement("label")
        $label.textContent = `Salario del familiar Nº${i + 1}`
        $input.className = "input-salaries"
        $input.placeholder = "Salario del familiar"
        $input.type = "number"
        $label.className = "label-salaries"
        $label.appendChild($input)
        $p.appendChild($label)
        $salaryList.appendChild($p)
    }
    document.querySelector("#add-salaries").disabled = true
}

document.querySelector("#remove-salaries").onclick = function(){
    const $salaries = document.querySelectorAll(".salaries")
    for (let i = 0; i < $salaries.length; i++) {
        $salaries[i].remove();
    }
    document.querySelector("#add-salaries").disabled = false
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convertWagesToArray(listOfWages){
    let array = []
    for(let i = 0; i < listOfWages.length; i++){
        if(listOfWages[i].value != 0){
            array.push(Number(listOfWages[i].value))
        }
    }
    return array
}

function calculateLowerSalary(array){
    let lowWage = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < lowWage){
            lowWage = array[i]
        }
    }
    return lowWage
}

function calculateHigherSalary(array){
    let highSalary = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > highSalary){
            highSalary = array[i]
        }
    }
    return highSalary
}

function calculateAverageSalary(array){
    let average = 0
    for(let i = 0; i < array.length; i++){
        average = average + Number(array[i])
    }
    average = average / array.length
    return average
}

function calculateAverageMonthlySalary(array){
    let average = 0
    for(let i = 0; i < array.length; i++){
        average = average + (Number(array[i]) / 12)
    }
    average = average / array.length
    return average
}
