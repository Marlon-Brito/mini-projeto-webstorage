// selecionando form, container e botão de saída
const nameForm = document.querySelector('#name-form');
const welcomeContainer = document.querySelector('#welcome');
const logoutBtn = document.querySelector('#logout');

// deixar as functions acima pois ao exexutar o código o js as reordena para aqui (priorização)
function checkUser(){
    // verifica se o usuário está logado
    const userName = localStorage.getItem('name');

    if (userName){
        // logado: apresenta o usuário
        nameForm.style.display = 'none';
        welcomeContainer.style.display = 'block';

        // pegando o nome do usuário
        const userNameElement = document.querySelector('#username');

        userNameElement.textContent = userName;
    }else{
        // deslogado: volta para o formulário
        nameForm.style.display = 'block';
        welcomeContainer.style.display = 'none';
    }
};

// add function ao form de salvar o nome no localStorage
nameForm.addEventListener('submit', (e) => {
    e.preventDefault(); // não deixa o formulário ser submetido da maneira convencional

    const nameInput = document.querySelector('#name');

    localStorage.setItem('name', nameInput.value); // pegando o valor do input e o retornando como texto

    nameInput.value = ''; // resetando valor do campo

    checkUser();
});

// ao deslogar deletar o usuário para poder logar com outro
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('name');

    // verificar usuário novamente
    checkUser();
});

// Application start
checkUser();