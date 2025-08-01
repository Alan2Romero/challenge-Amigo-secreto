// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let lista_amigos = [];
let listaSorteados = [];
let inputUsuario = '';


function agregarAmigo(){
    lista_amigos.push(document.getElementById('amigo').value);
    condicionesIniciales('amigo', '');
    console.log(lista_amigos);
    // let listaamigosHTML = document.getElementById('listaAmigos');
    // listaamigosHTML.innerHTML = "";
    // for (let i = 0; i < lista_amigos.length; i++){
    // }
}

function sortearAmigo(lista_amigos){
    let NumeroGenerado = Math.floor(Math.random()*lista_amigos.length)+1;
    if (lista_amigos.include(lista_amigos[NumeroGenerado])){
        console.log("Repetido")
        sortearAmigo(lista_amigos);
    }else{
        listaSorteados.push(lista_amigos[NumeroGenerado]);
        console.log(listaSorteados);
    }
}


function condicionesIniciales(elemento, texto){
    let valorCaja = document.getElementById(elemento).value = texto;
}

function reiniciarLista(){
    // Limpiar caja
    condicionesIniciales('amigo', 'Escribe un nombre');
}

