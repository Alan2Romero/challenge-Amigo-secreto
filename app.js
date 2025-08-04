// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let lista_amigos = [];
let listaSorteados = [];
let inputUsuario = '';


function agregarAmigo(){
    lista_amigos.push(document.getElementById('amigo').value);
    condicionesIniciales('amigo', '');
    console.log(lista_amigos);
    agregaraLista(lista_amigos);
}

function agregaraLista(lista_amigos){
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    for(let i = -1; i < lista_amigos.length; i++){
        let itemlistaAmigosHTML = document.createElement('li');
        itemlistaAmigosHTML.textContent = lista_amigos[i];
        listaHTML.appendChild(itemlistaAmigosHTML);
    }
}

function sortearAmigo(lista_amigos){
    let NumeroGenerado = Math.floor(Math.random()*lista_amigos.length)+1;
    if (listaSorteados.includes(lista_amigos[NumeroGenerado])){
        sortearAmigo(lista_amigos);
    }else{
        listaSorteados.push(lista_amigos[NumeroGenerado]);
        agregaraListaSorteados(listaSorteados);
    }
}

function agregaraListaSorteados(listaSorteados){
    let listaSorteadosHTML = document.getElementById('resultado');
    listaSorteadosHTML.innerHTML = '';

    for(let i = 0; i < lista_amigos.length; i++){
        if (i > lista_amigos.length) {
            console.log("Supero el rango")
        } else {
            console.log(listaSorteados[i]);
            let itemlistaSorteadosHTML = document.createElement('li');
            itemlistaSorteadosHTML.textContent = listaSorteados[i];
            listaSorteadosHTML.appendChild(itemlistaSorteadosHTML);
        }
    }
}

function reiniciarTodo(){
    let listaSorteadosHTML = document.getElementById('resultado');
    listaSorteadosHTML.innerHTML = '';
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    let lista_amigos = [];
    let listaSorteados = [];
    let inputUsuario = '';
}

function condicionesIniciales(elemento, texto){
    let valorCaja = document.getElementById(elemento).value = texto;
}

function reiniciarLista(){
    // Limpiar caja
    condicionesIniciales('amigo', 'Escribe un nombre');
}

