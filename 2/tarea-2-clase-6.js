/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de 
la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y 
salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $div = document.createElement("div")
$div.className = "container"
document.querySelector("#family-salary").appendChild($div)

document.querySelector("#button-add").onclick = function(){
    const $input = document.createElement("input")  
    const $label = document.createElement("label")
    const $p = document.createElement("p")

    $input.type = "number"
    $input.setAttribute = ("id", "anual-salary")
    $input.className = "wages"
    $input.placeholder = "Salario anual del Familiar"
    $label.textContent = "Salario del Familiar"
    $label.className = "label-family-salary"
    $p.className = "paragraph"

    $label.appendChild($input)
    $p.appendChild($label)
    $div.appendChild($p)
}

function convertInputsToArray(listOfInputs){
    let array = []
    for(let i = 0; i < listOfInputs.length; i++){
        array.push(Number(listOfInputs[i].value))
    }
    return array
}
    
/*
-----Boton de quitar-----
document.querySelector("#button-remove").onclick = function(){
    const $dad = document.getElementsByClassName("container")
    const $child = document.getElementsByClassName("paragraph")
    $dad.removeChild($child)
}
*/

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

document.querySelector("#button-calculate").onclick = function (){
    const $wages = document.getElementsByClassName("wages")
    const arrayOfWages = convertWagesToArray($wages)
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
