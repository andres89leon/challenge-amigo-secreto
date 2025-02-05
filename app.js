// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let posicionSorteada = [];

function agregarAmigo() {
    let confirmacion = document.getElementById('amigo').value;

    if(confirmacion!==""){
        amigos.push(document.getElementById("amigo").value);
        console.log(amigos);
        listaAmigos();
        limpiarCaja();
    }else{
        alert('"Por favor, inserte un nombre."');
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value="";
    return;
}

function listaAmigos(){
    let j = amigos.length-1;
    document.getElementById("listaAmigos").innerHTML = "";    
    for(let i=0;i<=j;i++){
        document.getElementById('listaAmigos').innerHTML += `<li>${amigos[i]}<li>`;
    }
    return;
}

function sortearAmigo(){
let cantidad = amigos.length;
if (cantidad >1){
    let sorteo = Math.floor(Math.random()*((amigos.length)));
    console.log(posicionSorteada);
    if(posicionSorteada.length == amigos.length){
        alert("Todos los amigos sorteados");
        reiniciarAmigo();
    }else{
    if(posicionSorteada.includes(sorteo)){
    return sortearAmigo();
    }else{
        posicionSorteada.push(sorteo);
        console.log(sorteo);
        let amigoSorteado = amigos[sorteo];
        document.getElementById('listaAmigos').innerHTML="";
        document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}<li>`;
    }
}
}else{
    alert("Ingrese mas de 2 personas para sortear");
    return;
}
}

function reiniciarAmigo(){
    amigos = [];
    posicionSorteada = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    console.log(amigos);
    console.log(posicionSorteada);
}

