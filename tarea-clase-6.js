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
    let $listOfMembers = document.querySelector("#list-of-members")

    $div.appendChild($label)
    $div.appendChild($input)
    $listOfMembers.appendChild($div)
}

function createNewMembers(numberOfMembers){
    for(let i=0; i < numberOfMembers; i++){
        createNewMember(i)
    }
}

document.querySelector("#button-next").onclick = function(){
    const $numberOfMembers = document.querySelector("#number-of-members").value
    const $buttonSalaryAdd = document.querySelector("#add-salaries")
    const $buttonSalaryRemove = document.querySelector("#remove-salaries")
    const $buttonCalculate = document.querySelector("#button-calculate")
    const $buttonReset = document.querySelector("#reset")
    createNewMembers($numberOfMembers)
    document.querySelector("#button-next").disabled = true
    document.querySelector("#add-salaries").disabled = false
    if ($numberOfMembers <= 0){
        document.querySelector("#button-next").disabled = false
    }
    if ($numberOfMembers > 0){
        $buttonSalaryAdd.className = ""
        $buttonSalaryRemove.className = ""
        $buttonCalculate.className = ""
        $buttonReset.className = ""
    }
    return false
}

function convertMembersToArray(){
    let $members = document.querySelectorAll(".age")
    let array = []
    for(let i = 0; i < $members.length; i++){
        array.push(Number($members[i].value))
    }
    return array
}

function calculateLowestNumber(number){
    let lowestNumber = number[0]
    for(let i = 0; i < number.length; i++){
        if(number[i] < lowestNumber){
            lowestNumber = number[i]
        }
    }
    return lowestNumber
}

function calculateAverageNumber(number){
    let average = 0
    for(let i = 0; i < number.length; i++){
        average = average + Number(number[i])
    }
    average = average / number.length
    return average
}

function calculateLargerNumber(number){
    let largerNumber = number[0]
    for(let i = 0; i < number.length; i++){
        if(number[i] > largerNumber){
            largerNumber = number[i]
        }
    }
    return largerNumber
}

document.querySelector("#button-calculate").onclick = function(){
    const arrayOfMembers = convertMembersToArray()
    const youngest = calculateLowestNumber(arrayOfMembers)
    const averageAgeOfTheFamily = calculateAverageNumber(arrayOfMembers)
    const oldest = calculateLargerNumber(arrayOfMembers)

    document.querySelector("#average-age-of-the-family").textContent = `El promedio del grupo familiar es de ${averageAgeOfTheFamily} años`
    document.querySelector("#youngest").textContent = `La edad mas baja de la familia es de ${youngest} años`
    document.querySelector("#oldest").textContent = `La edad mas alta de la familia es de ${oldest} años`

    const $salariesInputs = document.getElementsByClassName("input-salaries")

    if($salariesInputs.length > 0){
        const $salaries = document.getElementsByClassName("input-salaries")
        const arrayOfSalaries = convertSalariesToArray($salaries)
        const lowerSalary = calculateLowestNumber(arrayOfSalaries)
        const higherSalary = calculateLargerNumber(arrayOfSalaries)
        const averageSalary = calculateAverageNumber(arrayOfSalaries)
        const averageMonthlySalary = calculateAverageMonthlySalary(arrayOfSalaries)

        const $emLowerSalary = document.querySelector("#lower-salary")
        const $emHigherSalary = document.querySelector("#higher-salary")
        const $emAverageSalary = document.querySelector("#average-salary")
        const $emAverageMonthlySalary = document.querySelector("#average-monthly-salary")

        $emAverageMonthlySalary.textContent = `El salario mensual promedio de la familia es de $${averageMonthlySalary}`
        $emLowerSalary.textContent = `El salario mas bajo de la familia es de $${lowerSalary}`
        $emHigherSalary.textContent = `El salario mas alto de la familia es de $${higherSalary}`
        $emAverageSalary.textContent = `El salario promedio de la familia es de $${averageSalary}`
    }
}

document.querySelector("#reset").onclick = function(){
    let $members = document.querySelectorAll(".member")
    const $label = document.querySelectorAll(".label-salaries")

    for (let i = 0; i < $members.length; i++) {
        $members[i].remove();
    }

    for (let i = 0; i < $label.length; i++) {
        $label[i].remove();
    }

    document.querySelector("#average-age-of-the-family").textContent = ""
    document.querySelector("#youngest").textContent = ""
    document.querySelector("#oldest").textContent = ""

    document.querySelector("#lower-salary").textContent = ""
    document.querySelector("#higher-salary").textContent = ""
    document.querySelector("#average-salary").textContent = ""
    document.querySelector("#average-monthly-salary").textContent = ""

    document.querySelector("#add-salaries").disabled = false
    document.querySelector("#button-next").disabled = false
    
    const $buttonSalaryAdd = document.querySelector("#add-salaries")
    const $buttonSalaryRemove = document.querySelector("#remove-salaries")
    const $buttonCalculate = document.querySelector("#button-calculate")
    const $buttonReset = document.querySelector("#reset")

    $buttonSalaryAdd.className = "hidden"
    $buttonSalaryRemove.className = "hidden"
    $buttonCalculate.className = "hidden"
    $buttonReset.className = "hidden"

    document.querySelector("#number-of-members").value = ""
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
    const $salaries = document.querySelectorAll(".input-salaries")
    const $label = document.querySelectorAll(".label-salaries")
    for (let i = 0; i < $salaries.length; i++) {
        $salaries[i].remove();
    }
    for (let i = 0; i < $label.length; i++) {
        $label[i].remove();
    }
    document.querySelector("#add-salaries").disabled = false

    document.querySelector("#lower-salary").textContent = ""
    document.querySelector("#higher-salary").textContent = ""
    document.querySelector("#average-salary").textContent = ""
    document.querySelector("#average-monthly-salary").textContent = ""
}

function convertSalariesToArray(listOfSalaries){
    let array = []
    for(let i = 0; i < listOfSalaries.length; i++){
        if(listOfSalaries[i].value != 0){
            array.push(Number(listOfSalaries[i].value))
        }
    }
    return array
}

function calculateAverageMonthlySalary(salaries){
    let average = 0
    for(let i = 0; i < salaries.length; i++){
        average = average + (Number(salaries[i]) / 12)
    }
    average = average / salaries.length
    return average
}
