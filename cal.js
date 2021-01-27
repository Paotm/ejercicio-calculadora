const numberButton = document.getElementsByName("dataNumber");
const buttonOp = document.getElementsByName("dataOp");
const buttonC = document.getElementsByName("dataDelete")[0];
const buttonI = document.getElementsByName("dataIgual")[0];
let result = document.getElementById("result");
let opActual = "";
let oPAnterior = "";
let operation = undefined;


numberButton.forEach(function (boton) {
    boton.addEventListener("click",function () {
          addNumber(boton.innerText);
                   })
    });

buttonOp.forEach(function (boton) {
        boton.addEventListener("click",function () {
            selectionOp(boton.innerText);
                       })
        });

buttonI.addEventListener("click", function () {
    calcular();
    resetDisplay();
    
});

buttonC.addEventListener("click", function () {
    clear()
    resetDisplay()
    
});

function selectionOp(op) {
    if (opActual === "") return;
    if (oPAnterior != ""){
        calculate()
    } 
    operation = op.toString();
    oPAnterior = opActual;
    opActual = "";
};

function calcular() {
    let calculo;
    const anterior = parseFloat(oPAnterior);
    const actual = parseFloat (opActual); 
    if(isNaN(anterior) || isNaN (actual))return;
    switch (operation) {
        case "+":
        calculo = anterior + actual;    
            break;
    
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;        
    }
    opActual = calculo ;
    operation = undefined;
    oPAnterior = "";
}

function addNumber(num) {
    opActual = opActual.toString() + num.toString();
    resetDisplay()
    };


function resetDisplay() {
    result.value = opActual;
        
}

function clear() {
    opActual = "";
    oPAnterior = "";
    operation = undefined;
}