const form = document.getElementById('form');
const userName = document.getElementById('username');
const email= document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const userNameValue = userName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(userNameValue === ''){
        setErrorFor(userName, 'O nome é obrigatório.');
    } else{
        setSucessFor(userName);
    }

    if(emailValue === ''){
        setErrorFor(email, 'O email é obrigatório');
    } else if(!checkEmail(emailValue)){
        setErrorFor(email, 'email inválido');
    } else {
        setSucessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'A senha é inválida');
    } else if(passwordValue.length < 7){
        setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres');
    } else{
        setSucessFor(password);
    }

    if(passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória')

    }else if(passwordConfirmation.value !== passwordValue){
        setErrorFor(passwordConfirmation, 'As senhas não conferem')
    } else{
        setSucessFor(passwordConfirmation)
    }

    const formControls = form.querySelectorAll('.form-control');

    const formValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control sucess"
    });
    if(formValid){
        console.log('O formulário está válido');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // adicionar mensagem de erro

    small.innerText = message;

    // adicionar classe de erro
    formControl.className = 'form-control error';

}

function setSucessFor(input){
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso

    formControl.className = 'form-control sucess';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }