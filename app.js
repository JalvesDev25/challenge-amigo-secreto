//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//let listaDeAmigosSorteados = []; //config final

let listaDeAmigosSorteados = ['Julia', 'Carlos', 'Hamilton', 'Mariana', 'Samuel']; //teste
let limiteAmigos = 5; //para evitar sobrescrever o botao "Sortear Amigo";

//console.log(listaDeAmigosSorteados[2]);


function IndiceAmigoaleatorio(){
    let amigoEscolhido = parseInt(Math.random() * limiteAmigos);
    return amigoEscolhido;
}

function adicionarAmigo(){
let nomeAmigo = document.querySelector('input').value;
document.getElementById("amigo").value = "";
console.log(nomeAmigo);
return nomeAmigo;

}


let olhaNome = "";

console.log('OlhaNome no inicio:',olhaNome);

let contaAmigo = 0
let nomeAmigo = "";
//while(nomeAmigo != 99){
while(olhaNome != ""){
    olhaNome = adicionarAmigo();
    listaDeAmigosSorteados[2]=olhaNome; //adicionarAmigo();


    //listaDeAmigosSorteados[2]=adicionarAmigo(); //adicionarAmigo();
    console.log(listaDeAmigosSorteados[2]);
    //nomeAmigo = 99;
    console.log('OlhaNome antes de zerar:',olhaNome);
    olhaNome = "";
    console.log('OlhaNome depois de zerar:',olhaNome);
    console.log(listaDeAmigosSorteados[2]);

}






/*
//====Teste escolha de amigos
let conta=0;

while (conta < 10){
    let numeroAmigo = IndiceAmigoaleatorio();
    console.log('Numero do Amigo Escolhido: ', numeroAmigo);
    console.log(listaDeAmigosSorteados[numeroAmigo]);
    console.log('------------');
    conta++

}
*/


