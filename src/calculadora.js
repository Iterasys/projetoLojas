let somarDoisNumeros = function somarDoisNumeros(num1, num2){
    const resultado = num1 + num2;
    return resultado;
}

let somarDoisNumerosTdd = function somarDoisNumerosTdd(num1, num2){
    // ToDo: programar a soma de 2 numeros
    return 0;
}

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2){
    return num1 - num2;
}

const multiplicarDoisNumeros = (num1, num2) => num1 * num2;

const dividirDoisNumeros = (num1, num2) => num1 / num2;

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};