let number1 = Number(prompt("Oi usuário, Digite o primeiro número:"))
let number2 = Number(prompt(
    `Primeiro número digitado: ${number1}
    Agora digite o segundo número:`
    ))

    
let sum, sub, mult, div, rest

sum = "Soma: " + (number1 + number2)
sub = "Subtração: " + (number1 - number2)
mult = "Multiplicação: " + (number1 * number2)
div = "Divisão: " + (number1 / number2)
rest = "Resto da Divisão: " + (number1 % number2)

let listOfOperations = [sum, sub, mult, div, rest]

for(let operation of listOfOperations){
    alert(`Primeiro Número = ${number1} | Segundo Número = ${number2}
    ${operation}`)
}

let verifyEqual = (number1, number2) => {
    if(number1 == number2){
        alert("Os dois números digitados são iguais.")
    }else{
        alert("Os dois números digitados são diferentes.")
    }
}

let verifyPair = function(number1, number2) {
    sum = number1 + number2
    const aux = sum % 2
    if(aux == 0){
        alert("A soma dos dois números é par.")
    }else{
        alert("A soma dos dois números é ímpar.")
    }
}

verifyEqual(number1, number2)
verifyPair(number1, number2)