let numa = ""
let numb = ""
let temp = ""
let operator = ""
let result = ""


const operands = document.querySelectorAll(".operands") // Handles different cases of number inputs
operands.forEach((button) => {
    button.addEventListener("click", () => {
        if (numa == "" && operator == ""){
            numa = button.id
            console.log(numa)
            document.getElementById("mainAction").textContent = (numa)
        }
        else if (operator == ""){
            console.log(numa)
            numa += button.id
            console.log(numa)
            document.getElementById("mainAction").textContent = (numa)
        }
        else if (numb == ""){
            numb = button.id
            console.log(numb)
            document.getElementById("mainAction").textContent = (numb)
        }
        else{
            numb += button.id
            console.log(numb)
            document.getElementById("mainAction").textContent = (numb)
        }
        

    })
})

const operators = document.querySelectorAll(".operators") // Handles operations
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "eqv"){
            if(numb == "" && temp != ""){ // Uses the previous second number (temp) to allow repeating previous operation
            
                numb = temp
            }
            operate(numa, numb, operator)
        }
        else if (button.id == "pro"){
            operate(numa, 100, "pro")
        }
        else if (button.id == "clr"){
            numa = ""
            numb = ""
            operator = ""
            result = ""
            temp = ""
            document.getElementById("mainAction").textContent = (0)
        }
        else{
            operator = button.id
            console.log(operator)
            document.getElementById("mainAction").textContent = (document.getElementById(operator).textContent)
        }

    })
})

function operate(na,nb,op){
    switch(op){
        case "add":
            result = parseFloat(na) + parseFloat(nb)
            console.log(result)
            break
        case "sub":
            result = parseFloat(na) - parseFloat(nb)
            console.log(result)
            break
        case "mul":
            result = parseFloat(na) * parseFloat(nb)
            console.log(result)
            break
        case "div":
            result = parseFloat(na) / parseFloat(nb)
            console.log(result)
            break
        case "pro":
            result = parseFloat(na) / nb
            console.log(result)
            break
        default:
            result = 0
            break

    }


    if (result != 0){
        numa = result.toString()
    }
    temp = numb
    numb = ""

    document.getElementById("mainAction").textContent = (numa)

}

