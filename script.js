function calculate(operation) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result;

    switch(operation) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;

        case '/':
            if (num2 != 0) {
                result = Number(num1) / Number(num2);
            } else {
                result = "Erro: Divisão por zero não é permitida";
            }
            break;
        
        case '*':
            result = Number(num1) * Number(num2);
            break;

    }

    document.getElementById('result').innerHTML = 'Resultado: ' + result;
}
