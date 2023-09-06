let nome = document.getElementById('nome');
let pais = document.getElementById('pais');
let nomeNasc = document.getElementById('nomeNasc');                  // Parte responsavel por Multas
let vel = document.getElementById('vel');
let multaOrNot = document.getElementById('multaOrNot');
//---------------------------------------------------------
let pai = document.getElementById('pai');
let selecionar = document.getElementById('selecionar');
let contador = 0;
let vo = document.getElementById('vo');


// a baixo ok 

//alert("Ainda estou desenvolvendo o sistema");

function verificar(){
    let nomee = nome;
    let paiss = pais;

    let nom = (nomee.value);
    let paiis = (paiss.value);

    nomeNasc.innerText += `Bem-Vindo Sr(a) ${nom} Seu pais de origem é ${paiis}`;

    let pessoa = nom 
    let nação = paiis
    console.log(`Nome Completo é ${pessoa} e seu pais de origem é ${nação}`) // da linha 18 a 20 são array

}

// até aq OK


function checagem(){
    var velocidade = vel;
    var velocidade = (velocidade.value)

    multaOrNot.innerText=`A sua velocidade é de ${velocidade} KM/H`

    if (velocidade >= 61){
        multaOrNot.innerText += ` A velocidade maxima é de 60 KM/H, Você será multado`
    }else{
        multaOrNot.innerText += ` Não existe multa em seu nome`
    }
}

// até aq ok

function clicado(){

    let  escolha = selecionar.value;
 
    

    if( (escolha !== "") && (escolha !== null) && (escolha !== undefined)){

        ++contador

        let consulta = ` <div class="mae" id="${contador}">

        <div class="iconelixo">
            <button onclick="apagar(${contador})" class="delete">
            <i class="fa-solid fa-trash"></i></button>
        </div>

        <div class="multaa">
            ${escolha}
        </div>`




        vo.innerHTML += consulta;
        selecionar.value = ""
        
    }
}

function apagar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}