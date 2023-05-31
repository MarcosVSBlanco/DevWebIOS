let pos1 = document.getElementById('pos1');
let botoes = [false,false,false,false,false,false]

const alterarBack = () => {
    botoes[0] = !botoes[0]
    if (botoes[0])
    pos1.style.backgroundColor = '#7e88f2';
    else
    pos1.style.backgroundColor = '#fff';
};

let item = document.getElementsByClassName('item');

const alterarFonte = () => {
    item[1].style.fontWeight = 'bold';
}

let li = document.getElementsByTagName('li');

const efeitoZebra = () => {
    for (let i = 0; i < li.length; i++) {
        if (i % 2) li[i].style.backgroundColor = '#d95e1c';
        else li[i].style.backgroundColor = '#e3a381';
        }
}

let lista = document.getElementsByTagName('li');
console.log(lista);
console.log(lista[0])
const bBottom = () => {
    lista[4].style.borderBottom = 'dashed 3px #ff0000'
}

let pos2 = document.getElementById('pos2')
console.log(pos2)
const remove = () => {
    pos2.remove();
}

let todos = document.getElementById('lista')
let item3 = document.getElementById('pos3')

const retorno = () => {
    todos.insertBefore(pos2, item3.nextSibling)
}