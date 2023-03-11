const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  /// Escreva aqui o seu código, seguindo estas orientações passo a passo:

  // 1. Obter o valor introduzido no input do e-mail.
  var valorEmail = document.querySelector('#email-input').value



  // 2. Obter o valor introduzido no input de senha.
  var valorSenha = document.querySelector('#password-input').value



  // 3. Obter o valor do input de rádio.
  // 1º maneira
  var valoresRadio = document.getElementsByName('legalAge')
  
    valoresRadio.forEach(function valorRadio(elemento) {
      // console.log(`Elementos: ${elemento.value}`)
      // console.log(`Selecionado: ${elemento.checked}`)
      
    })

  // 2º maneira
  var maiorIdade = document.querySelector('#age_yes').checked
  // console.log(maiorIdade)


  // 4. Obter o valor do input com o checkbox.

    var valorCheckbox = document.querySelector('#tyc-input').checked 




  // 5. Validar se o utilizador for maior de idade. Caso contrário, mostramos uma mensagem de erro: "Tem de ser maior de idade para se registar no site".
    valoresRadio.forEach( function(validacao) {
      
      if (validacao.value === 'Sim' && validacao.checked === false) {
        alert('Tem de ser maior de idade para se registar no site')
      }
 
    })



  // 6. Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site".

  if (valorCheckbox === false) {
    alert('Deve aceitar os termos e condições para se registar no site')
  }

  // 7. Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador. 
  var resultado = {
    email: valorEmail,
    password: valorSenha,
    legalAge: maiorIdade,
    tryAccepted: valorCheckbox
    
  }
  console.log(resultado)

});





