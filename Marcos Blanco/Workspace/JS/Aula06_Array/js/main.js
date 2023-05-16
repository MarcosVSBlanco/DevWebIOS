//array unidimensional
var abraao = true

var grimaldo = [true, 171, "Gabriel", 3.14]
console.log(abraao);
console.log(grimaldo[1]);
console.clear();

//array bidimensional
const turma = [
    ["turma 1", "Gabriel", 7], //linha 0
    ["turma 1", "Carina", 10], //linha 1
    ["turma 1","Felipe", 9]    //linha 2
//coluna 1         2     3
]
console.log(turma[1][1]);
// console.table(turma); exibir o array em uma tabela
console.log(turma);
console.clear();
//alterar valor do array

const array1 = ["Maçã","Kiwi", "Pera", "Tomate"]
console.log(array1);
array1[2] = "Melão" //Para alterar bidimensional usamos conchetes duas vezes[][]
console.log(array1);

//Convertendo array em String
console.log(array1.toString());
 console.clear();

//metodo join
var atrasados = ["Matheus", "Abraao", "Erick", "Jhonnatan"]
console.log(atrasados.join('*'));
//tamanho array
console.log(atrasados.length);
//remover elemento no array (pop remove o ultimo item)
let atrasados2 = atrasados.pop(); //removeu o ultimo elemento e atribuiu ao atrasados2
console.log(atrasados2); //mostra o item removido
console.log(atrasados); //mostra apos a mudança
//inserir elemento no array (push adiciona um elemento)
let atrasado2min = atrasados.push("Fequer");
console.log(atrasado2min);
console.log(atrasados);
//remover elemento do inicio do array (shift remove o elemento do inicio)
let atrasada3min = atrasados.shift();
console.log(atrasada3min);
console.log(atrasados);
//inserir elemento no inicio do array (unshift adiciona elemento no inicio)
let outroatrasado = atrasados.unshift("Adrielly");
console.log(outroatrasado);
console.log(atrasados);
console.clear()
//apagando um elemento de posição especifica
delete atrasados[2] //APAGA A INFORMAÇÃO MAS DEIXA UM ESPAÇO INDEFINIDO
console.log(atrasados);


