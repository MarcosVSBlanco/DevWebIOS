const myForm = document.querySelector('#my-form');
const item = document.querySelector('#item');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dataNasc = document.querySelector('#date')

const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || dataNasc.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {

        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${item.value} : ${nameInput.value} : ${emailInput.value}  `
            )
        );
        userList.appendChild(li);
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elmento
    }
}