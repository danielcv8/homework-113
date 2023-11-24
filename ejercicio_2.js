//  calcular la combinatoria

function calcularFactorial(numero) {
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function combinatoria() {
    var n = parseInt(document.getElementById('n').value);
    var r = parseInt(document.getElementById('r').value);
    var resta = n - r;

    var fact_n = calcularFactorial(n);
    var fact_r = calcularFactorial(r);
    var fact_resta = calcularFactorial(resta);

    var resultado = ((fact_n) / ((fact_r) * (fact_resta))).toFixed(0);

    document.getElementById("res").innerHTML = "El resultado final de la combinatoria es: " + resultado;
}
