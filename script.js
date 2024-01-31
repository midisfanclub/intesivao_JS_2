const imagem_visualizacao = document.getElementById("imagem-visualizacao");
const titulo_produto = document.getElementById("titulo-produto");
const nome_cor = document.getElementById("nome-cor-selecionada");
const miniatura_imagem_0 = document.getElementById("0-imagem-miniatura");
const miniatura_imagem_1 = document.getElementById("1-imagem-miniatura");
const miniatura_imagem_2 = document.getElementById("2-imagem-miniatura");

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
let cor_selecionada = 1;

function trocar_imagem() {
    const id_opcao_selecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagem_selecionada = id_opcao_selecionada.charAt(0);
    imagem_visualizacao.src = './imagens/opcoes-cores/' + opcoes_cores[cor_selecionada].pasta + '/imagem-' + imagem_selecionada + '.jpeg';
}

function trocar_tamanho() {
    //att variavel de controle do tamanho da caixa(tamanho_selecionado)
    const id_opcao_selecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanho_selecionado = id_opcao_selecionada.charAt(0);
    //mudar texto do titulo do produto
    titulo_produto.innerText = 'Pulseira loop esportiva ' + opcoes_cores[cor_selecionada].nome + ' para caixa de ' + opcoes_tamanho[tamanho_selecionado];
    //mudar tamanho da imagem de acordo com a opção selecionada
    if (opcoes_tamanho[tamanho_selecionado] === '41 mm') {
        imagem_visualizacao.classList.add('caixa-pequena');
        //'caixa pequena' esta no doc css
    } else {
        imagem_visualizacao.classList.remove('caixa-pequena');
    }
}

function trocar_cor() {
    //att cor selecionada
    const id_opcao_selecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    cor_selecionada = id_opcao_selecionada.charAt(0);
    //trocar texto do título
    titulo_produto.innerText = 'Pulseira loop esportiva ' + opcoes_cores[cor_selecionada].nome + ' para caixa de ' + opcoes_tamanho[tamanho_selecionado];
    //trocar texto da cor
    nome_cor.innerText = 'Cor - ' + opcoes_cores[cor_selecionada].nome;
    //trocar miniaturas
    miniatura_imagem_0.src = './imagens/opcoes-cores/' + opcoes_cores[cor_selecionada].pasta + '/imagem-0.jpeg';
    miniatura_imagem_1.src = './imagens/opcoes-cores/' + opcoes_cores[cor_selecionada].pasta + '/imagem-1.jpeg';
    miniatura_imagem_2.src = './imagens/opcoes-cores/' + opcoes_cores[cor_selecionada].pasta + '/imagem-2.jpeg';
    //src = responsavel por dizer qual imagem deve ser exibida naquela tag
    //trocar imagem grande
    imagem_visualizacao.src = './imagens/opcoes-cores/' + opcoes_cores[cor_selecionada].pasta + '/imagem-' + imagem_selecionada + '.jpeg';
}