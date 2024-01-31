const imagem_visualizacao = document.getElementById("imagem-visualizacao");
const titulo_produto = document.getElementById("titulo-produto");
const verde_cipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste',
};

const azul_inverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno',
};

const meia_noite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite',
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar',
};

const rosa_claro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro',
};

const opcoes_cores = [verde_cipreste, azul_inverno, meia_noite, estelar, rosa_claro];
const opcoes_tamanho = ['41 mm' , '45 mm'];

let imagem_selecionada = 1;
let tamanho_selecionado = 1;

function trocar_imagem() {
    const id_opcao_selecionada = document.querySelector('[name="opcao-imagem"]: checked').id;
    imagem_selecionada = id_opcao_selecionada.charAt(0);
    imagem_visualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagem_selecionada + ".jpeg";
}

function trocar_tamanho() {
    //att variavel de controle do tamanho da caixa(tamanho_selecionado)
    const id_opcao_selecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanho_selecionado = id_opcao_selecionada.charAt(0);
    //mudar texto do titulo do produto
    titulo_produto.innerText = 'Pulseira loop esportiva azul-inverno para caixa de ' + opcoes_tamanho[tamanho_selecionado];
    //mudar tamanho da imagem de acordo com a opção selecionada
    
}
