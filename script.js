let numa = ""
let numb = ""
let temp = ""
let operator = ""
let result = ""

let historyAction = document.getElementById("historyAction")
let mainAction = document.getElementById("mainAction")


// Process keyboard input
document.addEventListener("keydown", (input) => { 
    const key = input.key;

    // Number / decimal input
    if (!isNaN(key) || key == ".") { 
        processDigits(key);
    }

    // Operator input
    if (key == "+"){
        processOperators("add");
    } 
    if (key == "-"){
        processOperators("sub");
    } 
    if (key == "*"){
        processOperators("mul");
    } 
    if (key == "/"){
        processOperators("div");
    } 
    if (key == "%"){
        processOperators("pro");
    } 
    if (key == "Enter" || key === "=") {
        processOperators("eqv")
    }
    if (key == "Escape"){
        processOperators("clr")
    }
    if (key === "Backspace") { // Remove digits one at a time, fallback to zero if empty
        if (operator == "") {
            numa = numa.slice(0, -1);
            mainAction.textContent = numa || "0";
        } else {
            numb = numb.slice(0, -1);
            mainAction.textContent = numb || "0"; 
        }
    }

})


// Event listeners for button clicks
const operands = document.querySelectorAll(".operands") 
operands.forEach((button) => {
    button.addEventListener("click", () => {
        processDigits(button.id)
    })
})

const operators = document.querySelectorAll(".operators") 
operators.forEach((button) => {
    button.addEventListener("click", () => {
        processOperators(button.id)
    })
})


// Handle various cases of number inputs
function processDigits(digit){ 

    if (numa == "" && operator == ""){
        numa = digit
        console.log(numa)
        mainAction.textContent = (numa)
    }
    else if (operator == ""){
        console.log(numa)
        numa += digit
        console.log(numa)
        mainAction.textContent = (numa)
    }
    else if (numa == ""){
        numa = 0
        numb = digit
        console.log(numb)
        mainAction.textContent = (numb)
    }
    else if (numb == ""){
        numb = digit
        console.log(numb)
        mainAction.textContent = (numb)
    }
    else{
        numb += digit
        console.log(numb)
        mainAction.textContent = (numb)
    }
        
}

// Handle different operator behavior
function processOperators(digit){ 

    if (digit == "eqv"){
        if(numb == "" && temp != ""){ // Uses the previous second number (temp) to allow repeating previous operation
            numb = temp
        }
        operate(numa, numb, operator)
    }
    else if (digit == "pro"){
        operate(numa, 100, "div")
    }
    else if (digit == "clr"){
        numa = ""
        numb = ""
        operator = ""
        result = ""
        historyAction.textContent = ""
        temp = ""
        mainAction.textContent = (0)
    }
    else{
        operator = digit
        console.log(operator)
        
        if (!historyAction.textContent.trim()){ // Check if there is content in the history
            historyAction.textContent = (mainAction.textContent)
        }
        else{
            historyAction.textContent += "" + (mainAction.textContent)
        }
        mainAction.textContent = (document.getElementById(operator).textContent)
    }
}


function operate(na,nb,op){
    na = parseFloat(na)
    nb = parseFloat(nb)
    switch(op){
        case "add":
            result = na + nb
            console.log(result)
            break
        case "sub":
            result = na - nb
            console.log(result)
            break
        case "mul":
            result = na * nb
            console.log(result)
            break
        case "div":
            if (nb == 0){
                result = "ERROR"
                break
            }
            result = na / nb
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
    mainAction.textContent = (numa)

    if (numa == "ERROR"){
        numa = ""
    }

}

