var checkbox = document.querySelector('#checkbox')

var body = document.querySelector('body');

var titulo = document.querySelector('h1');

var item = document.querySelectorAll(".item")


checkbox.addEventListener('click', function() {

    if (checkbox.checked) {

        body.setAttribute("id", "modoEscuro");

        titulo.setAttribute("id", "modoEscuroTitulo");


    for (let i = 0; i < item.length; i++) {
            item[i] = item[i].setAttribute("id", "modoEscuroItens");          
        }


    } else {
        location.reload();
        checkbox.checked = false;
    }
    
})