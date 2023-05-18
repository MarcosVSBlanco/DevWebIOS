// Funções
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
let x = addNums(4, 5); // Chamada da função addNums
console.log(x);
let z = myFunc(4, 5); // Chamada da função myFunc
console.log(z);
function myFunc(num1, num2) {
    return num1 * num2;
}
//Arrow functions
console.clear();
const hello = () => {
    return 'Olá Arrow Function!';
};
console.log(hello); // Retorna o objeto função
console.log(hello()); // Executa a função e imprime a string no return

//adicionando atributo a var const
//console.clear();
const hello2 = (nome) => {
    return `Olá ${nome}, Bem vindo ao exemplo de arrow funcion!`;
};
console.log(hello2); // Retorna o objeto função
console.log(hello2("Marcos")); // Executa a função e imprime a string no return

//console.clear();
const addNums2 = (num1 = 1, num2 = 1) => {
return num1 + num2;
};
let soma = addNums2(5, 10);
console.log(soma);
