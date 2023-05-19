//CONTAGEM 1-50 while
let contador = 1;
while (contador <= 50) {
console.log(`Valor = ${contador}`);
contador++;
}

//CONTAGEM REGRESSIVA 10-0 do-while
let i = 10,
text = '';
do {
    text += `O número é ${i}\n`;
i--;
} while (i > -1);
console.log(text);

//FOR CONTAGEM PARES 1-100 for
for (let i = 2; i < 101; i++) console.log(`Laço For Pares: ${i++}`);