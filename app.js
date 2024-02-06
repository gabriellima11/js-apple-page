const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");
const miniaturaImage1 =document.getElementById("0-imagem-miniatura");
const miniaturaImage2 =document.getElementById("1-imagem-miniatura");
const miniaturaImage3 =document.getElementById("2-imagem-miniatura");

const azulInverno = {
    name: "azul-inverno",
    pasta: "imagens-azul-inverno"
} 

const estelar = {
    name: "estelar",
    pasta: "imagens-estelar"
} 

const meiaNoite = {
    name: "meia-noite",
    pasta: "imagens-meia-noite"
} 

const rosaClaro = {
    name: "rosa-claro",
    pasta: "imagens-rosa-claro"
} 

const verdeCipreste = {
    name: "verde-cipreste",
    pasta: "imagens-verde-cipreste"
} 

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

//TROCA DE IMAGEM MINIATURA
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name= "opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta +'/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho(){
    const idOpcaoSelecionada = document.querySelector('[name= "opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].name +" para caixa de " + opcoesTamanho[tamanhoSelecionado]
    tamanhoSelecionado == 0 ? imagemVisualizacao.classList.add('caixa-pequena') : imagemVisualizacao.classList.remove('caixa-pequena')
}

function trocarCor(){
    const idOpcaoSelecionada = document.querySelector('[name= "opcao-cor"]:checked').id
    corSelecionada = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].name +" para caixa de " + opcoesTamanho[tamanhoSelecionado]
    nomeCorSelecionada.innerText = "Cor- "+ opcoesCores[corSelecionada].name;
    imagemVisualizacao.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-1.jpeg"
    miniaturaImage1.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-0.jpeg"
    miniaturaImage2.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-1.jpeg"
    miniaturaImage3.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-2.jpeg"
}