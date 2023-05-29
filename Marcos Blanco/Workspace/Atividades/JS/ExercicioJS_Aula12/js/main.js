function calcular(){
    let numero = document.querySelector('input#numero').value;
    let resposta = document.querySelector('div#resposta');
    let calcular ='';

    for(let count=1; count<=10 ; count++)
    calcular += numero+" x "+count+" = "+ numero*count+"</br>";
    resposta.innerHTML = calcular;
}