
// CAPTURA O IMPUT DO FORMULARIO DE TITULO
const imputTituloRef = document.querySelector("#imputTitulo")

// CAPTURA O IMPUT DO FORMULARIO DE URL
const imputUrlRef = document.querySelector('#imputUrl')

// CAPTURA O IMPUT DO FORMULARIO DE DESCRIÇÃO
const imputDescricaoRef = document.querySelector('#imputDescricao')

// CAPTURA O BOTAO DE CADASTRAR DO FORMULARIO 
const btnCadastrarRef = document.querySelector('#btnCadastrar')

// CAPTURA O FORMULARIO COMPLETO
const formularioRef = document.querySelector('#formulario')

// CAPTURA DIV TITULO
const formTituloRef = document.querySelector("#formTitulo")

// CAPTURA DIV URL
const formUrlRef = document.querySelector('#formtUrl')

// CAPTURA DIV DESCRICAO
const formCadastrarRef = document.querySelector('#formDescricao')

// CAPTURA DOS ALERTAS DE PREENCHIMENTO INCORRETO
const validTituloRef = document.querySelector('#validTitulo')
const erroValidacaoRef = document.querySelector('#erroValidacao')
const validURLRef = document.querySelector('#validURL')

const cardsRef = document.querySelector('#cards')




// Validação título
function validacaoTitulo() {

    if (imputTituloRef.value.length < 4) {
        imputTituloRef.classList.add('bg-danger');
        validTituloRef.style.display = "block"
    } else if (imputTituloRef.value.length >= 4) {
        imputTituloRef.classList.remove('bg-danger');
        validTituloRef.style.display = "none";
    }
}

imputTituloRef.addEventListener('blur', validacaoTitulo);

// Validação Url
function validacaoUrl() {
    
    if (imputUrlRef.value.length < 1) {
        imputUrlRef.classList.add('bg-danger');
        validURL.style.display = "block"
    } else if (imputUrlRef.value.length >= 1) {
        imputUrlRef.classList.remove('bg-danger');
        validURL.style.display = "none";
    }
}

imputUrlRef.addEventListener('blur', validacaoUrl)

// Validação Descrição
function validacaoDescricao() {

    if (imputDescricaoRef.value.length < 4) {
        imputDescricaoRef.classList.add('bg-danger');
        erroValidacaoRef.style.display = "block"
    } else if (imputDescricaoRef.value.length >= 4) {
        imputDescricaoRef.classList.remove('bg-danger');
        erroValidacaoRef.style.display = "none";
    }
}

imputDescricaoRef.addEventListener('blur', validacaoDescricao)

// Habilitar botao cadastrar se todas as validações estiverem corretas
function habilitaCadastro() {
    if (imputTituloRef.value.length >= 4 &&
        imputUrlRef.value.length >= 1 &&
        imputDescricaoRef.value.length >= 4) {
        
            btnCadastrarRef.removeAttribute('disabled')
            
    } else { btnCadastrarRef.setAttribute('disabled', 'disabled')
    }
}
    imputTituloRef.addEventListener('keyup', habilitaCadastro);
    imputUrlRef.addEventListener('keyup', habilitaCadastro);
    imputDescricaoRef.addEventListener('keyup', habilitaCadastro);

    imputDescricaoRef.addEventListener('blur', validacaoDescricao)

// Habilitar aviso caso hava formulario vazio






// VARIAVEL QUE ARMAZENA AS INFORMAÇÕES DO CARD QUE SERÁ ADICIONADO


btnCadastrarRef.addEventListener('click', (e) => {
    e.preventDefault();

    
var noCardAddRef = document.querySelector('#noCardAdd')
noCardAddRef.style.display = 'none'

var placeholderCardRef = document.querySelector('#placeholderCard')
placeholderCardRef.style.display = 'none'

var valorTitulo = imputTituloRef.value.toUpperCase();
var valorUrl = imputUrlRef.value
var valorDescricao = imputDescricaoRef.value

    var card = `
    <div class="col mb-3 d-flex justify-content-center px-4">
        <div class="card border-0">
          <img src="${valorUrl}" class="card-img-top" alt="...">
          <div class="card-body bg-dark">
            <h5 class="card-title">${valorTitulo}</h5>
            <p class="card-text">${valorDescricao}</p>
          </div>
        </div>
      </div>
`

    cardsRef.innerHTML += card

    imputTituloRef.value = ''
    imputUrlRef.value = ''
    imputDescricaoRef.value = ''

    btnCadastrarRef.setAttribute('disabled', 'disabled')
    

})













