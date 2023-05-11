var notaMarcos = 5;
var notaMinima = 7;

if(notaMarcos >= notaMinima){
    console.log("Você está aprovado")
}else{
    console.log("Você está reprovado")
}

// impar ou par
//se a sobra da divisão do numero por 2 for 0 é par
//se a sobra da divisão do numero por 2 for 1 é impar

var imparPar = 10;
if(imparPar % 2 == 1){
    console.log("é impar")
}else{
    console.log("é par")
};

//primeira validação se é par
//segunda validação número maior que 10
//o numero é par e maior que 10
//o numero é par porem é menor que 10
var imparPar2 = 10;
if(imparPar2 % 2 == 1){
    console.log("é impar");
}else{
    if(imparPar > 10){
        console.log("o número é par e maior que 10");
    }else console.log("o número é par porém menor que 10 ");
};

//ternário
//var resultado = impar2 % 2 == 1 ? console.log("é impar") : console.log("é par")

//se é maior que 7 apresentar "Aprovado"
//se menor que 7 (6.9) apresentar "Reprovado"
//se esta entre 7 e 5 "Aprovado por conselho"
if( 4 > 7){
    console.log("Aprovado")
}else if(4 < 6.9 && 4 > 5){
    console.log("Aprovado por conselho")
}else{
    console.log("reprovado")
}
console.clear()
var notaMarcos = 5
switch(notaMarcos > 7){
    case true:
    console.log("Aprovado")
    break;
    case false:
    console.log("Reprovado")
    break;
}