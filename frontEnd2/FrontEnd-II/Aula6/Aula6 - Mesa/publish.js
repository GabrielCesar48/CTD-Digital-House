const bodys = document.querySelector('body');

const container = document.querySelector('.container');

var cards = [

    {
        img:  '<img src="./imagens/tiger.jpg">',
        titulo: '<h2>O tigre</h2>',
        texto: '<p> O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão. </p>'
 
     },

    {
        img:  '<img src="./imagens/leon.jpg">',
        titulo: '<h2>O Leão</h2>',
        texto: '<p> O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero        gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia. </p>'
 
     },

     {
        img:  '<img src="./imagens/leopardo.jpg">',
        titulo: '<h2>O leopardo</h2>',
        texto: '<p> O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros        felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista). </p>'
 
     },

     {
        img:  '<img src="./imagens/pantera-negra.jpg">',
        titulo: '<h2>A pantera negra</h2>',
        texto: '<p> A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o        leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais. </p>'
 
     },

     {
        img:  '<img src="./imagens/jaguar.jpg">',
        titulo: '<h2>O jaguar</h2>',
        texto: '<p> O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo). </p>'
 
     },
     
     {
        img:  '<img src="./imagens/chita.jpg">',
        titulo: '<h2>O guepardo</h2>',
        texto: '<p> O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros. </p>'
 
     }

];


for (var i = 0; i < cards.length; i++) {

    // Cria um novo elemento div
    var card = document.createElement('div');

    // Adiciona a classe 'card' ao elemento div criado
    card.classList.add('item');

    // Adiciona o conteúdo do objeto a div
    card.innerHTML += cards[i].img + cards[i].titulo + cards[i].texto;

    // Adiciona o elemento div criado ao elemento container

    container.appendChild(card);
    
}