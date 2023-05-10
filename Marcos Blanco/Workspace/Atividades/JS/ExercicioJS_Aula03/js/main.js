let fruta1 = " Banana";
let fruta2 = "Laranja";
let fruta3 = "Melancia";
let fruta4 = "Abacaxi";
let fruta5 = "Maça";

fruta1 = fruta1.trim();

console.log(fruta1.length);
console.log(fruta2.length);
console.log(fruta3.length);
console.log(fruta4.length);
console.log(fruta5.length);

console.log(`Quantidade letras ${fruta1.length}, ${ fruta2.length}, ${fruta3.length}, ${fruta4.length} e ${fruta5.length}`)

console.log(fruta1.substring(0, 3));
console.log(fruta2.substring(0, 3));
console.log(fruta3.substring(0, 3));
console.log(fruta4.substring(0, 3));
console.log(fruta5.substring(0, 3));

fruta1 = fruta1.toLowerCase();
console.log(fruta1);
fruta2 = fruta2.toLowerCase();
console.log(fruta2);
fruta3 = fruta3.toLowerCase();
console.log(fruta3);
fruta4 = fruta4.toLowerCase();
console.log(fruta4);
fruta5 = fruta5.toLowerCase();
console.log(fruta5);

console.log(`As frutas são ${fruta1}, ${fruta2}, ${fruta3}, ${fruta4} e ${fruta5} `);