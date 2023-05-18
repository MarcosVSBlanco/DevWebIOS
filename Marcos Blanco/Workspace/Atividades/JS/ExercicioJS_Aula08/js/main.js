const a = 1
const b = -7
const c = 10
const delta = b * b - 4 * a * c;

const boasVindas = () => {
    alert("x² - 7x + 10 = 0");
    console.log("Equação Segundo Grau");
}
const eventClique = () => {
    alert("5")
    console.log(x1());
};
const eventClique2 = () => {
    alert("2")
    console.log(x2());
};
function x1(){
return (-b + Math.sqrt(delta)) / (2 * a);
}
function x2(){
return(-b - Math.sqrt(delta)) / (2 * a);
}