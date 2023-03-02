//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let tarjeta = document.querySelector('#tarjeta');

tarjeta.setAttribute('class', 'card');

console.log(tarjeta);



//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let logo = document.querySelector('#logo');

logo.setAttribute('src', 'https://www.youtube.com/img/desktop/yt_1200.png');

console.log(logo);



//3- Quitarle al titulo la clase que le está dando un formato feo
let tituloFeio = document.querySelector('.titulo-feo')

tituloFeio.removeAttribute('class')

console.log(tituloFeio)



//4- Chequear si el link a youtube posee o no el atributo href
let linkYouTube = document.querySelector('#link_youtube')

console.log(linkYouTube.hasAttribute('href'))




//5- Obtener el href del link a wikipedia y mostrarlo por consola
let linkWikipedia = document.querySelector('#link_wikipedia')

console.log(linkWikipedia.getAttribute('href'))
