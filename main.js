
/* Varibles*/

var resultado = 0;
var primerOperador = 0;
var segundoOperador = 0;
var operacion;
var log = [ ];
const labelResult = document.getElementById('LblResult')

/* Funciones */
function Limpiar() {
    document.getElementById('txtDisplay').value = 0;
}

function ValidarType() {
    jQuery('.text-display').keypress(function (tecla) {
        var valor = document.getElementById('txtDisplay').value;

        if (isNaN(valor)) {
            return alert("Solo debes Ingresar Numeros")
        }
    });

}

function agregarOperador(operador) {
    primerOperador = txtDisplay.value;
    operacion = operador;
    //console.log(operacion);
    txtDisplay.value = '0';
   
}


function AgregarNumeros(number) {
    if (txtDisplay.value == 0) {
        txtDisplay.value = number;
       // console.log(number);
       //log.push([number]);
    }
    else {
        txtDisplay.value = txtDisplay.value + number;
    }
   
}
function Resultado() {
    segundoOperador = txtDisplay.value;
}
function CalculoDeoperacion() {

    segundoOperador = txtDisplay.value;
    //console.log(segundoOperador);
    log.push([primerOperador,operacion,segundoOperador]);
    switch (operacion) {
        case '+':
            resultado = Number(primerOperador) + Number(segundoOperador);
            break;
        case '-':
            resultado = Number(primerOperador) - Number(segundoOperador);
            break;
        case 'x':
            resultado = Number(primerOperador) * (segundoOperador);
            break;
        case '/':
            resultado = Number(primerOperador) / (segundoOperador);
            break;
        case '%':
            resultado = Number(primerOperador) * (segundoOperador) / 100;
            break;

        default:
            break;
    }
    
    //log.push([operacion,segundoOperador])
    for (let i = 0; i < log.length; i++) {
        const element = log[i];
        console.log(element);
        labelResult.innerText = element;
        
    }
   
    txtDisplay.value = resultado;
}
console.log(labelResult)
//labelResult.innerText = log;
//console.log(array)

function agregarPuntoDecimal() {

    if (txtDisplay.value.indexOf('.') == -1) {
        txtDisplay.value = txtDisplay.value + '.'
    }
}
function cambioDeSigno() {
  if (txtDisplay.value.indexOf(operador)== -1) {
    txtDisplay.value =  operador * operador ; 
      
  }

}