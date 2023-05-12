let contador = 1;
while (contador <= 50) {
console.log(`Valor = ${contador}`);
contador++;
}

let i = 0,
    text = '';
do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);