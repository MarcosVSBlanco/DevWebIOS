console.clear()

//operadores aritméticos
var num1 = 5
var num2 = 4
//adição
var adicao = num1 + num2
console.log("resultado da adição é: " + adicao)
//subtração
var subtracao = num1 - num2
console.log("resultado da subtração é: " + subtracao)
//divisão
var divisao = num1 / num2
console.log(divisao)
//multiplicação
var divisao = num1 * num2
console.log(divisao)
console.clear()

//precedência de operadores
// () / * + -
var numero3 = (3+5) / 4 + 6
console.log(numero3)
console.clear()
//operadores de comparação(relacionais)
var compara = num1 < num2 //false
console.log(compara)

//terceiro tipo comparação
var variavel1 = 3
var variavel2 = "3"
var compara2 = variavel1 === variavel2
console.log(compara2)
console.clear

var variavel3 = 3
var variavel4 = 3
var comparaTudo = variavel3 == variavel4 != variavel3 >= variavel4
                        //true       OU             false
console.log(comparaTudo)

console.clear

// X = 2 + 4
var X = 2

X += 4
console.log(X)