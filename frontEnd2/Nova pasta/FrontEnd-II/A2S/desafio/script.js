



/*let idade = parseInt(prompt("Introduza sua idade")); 
if(isNaN(idade) {
    alert("Digite apenas números");
    

console.log("É maior de idade"); 
} else{ 
console.log("É menor de idade"); 
} )*/



var idade;

while (isNaN(idade)) {
    
    idade = Number(prompt("Introduza sua idade"))
    if (isNaN(idade)) {
        alert("Digite apenas números")
    }    
}

if (idade >= 18) {
    alert("Maior de idade")
} else if (idade < 18) {
    alert("Menor de idade")
} else {
    alert("Obrigado por visitar")
}



