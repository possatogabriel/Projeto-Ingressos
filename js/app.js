let i = 0;

// FUNÇÃO AO CLICAR NO BOTÃO "COMPRAR"
function clicarComprar() {
    let opcaoSelecionada = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    // CASO NENHUMA QUANTIDADE SEJA INSERIDA ou SEJA MENOR OU IGUAL A 0
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma QUANTIDADE válida!');
        return;
    }

    // ESTRUTURA DE CONDIÇÃO PARA VERIFICAR O TIPO ESCOLHIDO
    if (opcaoSelecionada == 'pista') {
        opcaoSelecionada = 'qtd-pista';
    }

    else if (opcaoSelecionada == 'inferior') {
        opcaoSelecionada = 'qtd-inferior';
    } 

    else {
        opcaoSelecionada = 'qtd-superior';
    }

    comprarIngresso(opcaoSelecionada, quantidade);
}

// FUNÇÃO PARA REDUZIR O NÚMERO DE INGRESSOS DISPONÍVEIS
function comprarIngresso(tipo, qtd) {
    let quantidadeIngressos = document.getElementById(tipo);
    console.log(quantidadeIngressos.textContent);

    // ESTRUTURA DE CONDIÇÃO QUE VERIFICA SE A QUANTIDADE INSERIDA AINDA PODE SER ADQUIRIDA
    if (quantidadeIngressos.textContent < qtd) {
        alert('Você deseja comprar uma quantia de ingressos ACIMA dos disponíveis!')
        document.getElementById('qtd').value = '';
        return;
    }

    // CÓDIGO QUE FAZ A SUBTRAÇÃO DOS INGRESSOS 
    quantidadeIngressos.textContent = quantidadeIngressos.textContent - qtd;

    // ESTRUTURA DE CONDIÇÃO QUE DEIXA O TEXTO DE INGRESSOS EM VERMELHO CASO CHEGUE EM 0 
    if (quantidadeIngressos.textContent == '0') {
        quantidadeIngressos.style.color = '#cf1b1b';

        i++;

        // ESTRUTURA DE CONDIÇÃO QUE BLOQUEIA O BOTÃO DE COMPRA CASO TODOS INGRESSOS SE ESGOTEM
        if (i == 3) {
            let botao = document.getElementById('botao');
            botao.classList.add('invalido');
        }
    }
}
