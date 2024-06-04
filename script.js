function calcular(operacion) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado;
//isNaN verifica si num1 o num2 sea en verdad numero
    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor ingresa números válidos';
    } else {
        switch(operacion) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultado = 'No se puede dividir por cero';
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = 'La Operación no es válida';
        }
    }

    document.getElementById('operacion').innerHTML = num1 + ' ' + operacion + ' ' + num2 + ' = ' + resultado;
}

