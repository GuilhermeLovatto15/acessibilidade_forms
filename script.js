// Aguardando o carregamento completo da página antes de executar o código
document.addEventListener('DOMContentLoaded', function () {

    // Selecionando o botão de acessibilidade e as opções de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    // Adicionando o evento de clique ao botão de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        // Alterna a classe 'rotacao-botao' para animar o botão
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        // Alterna a classe 'apresenta-lista' nas opções de acessibilidade (mostrando ou ocultando)
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        // Verifica se as opções de acessibilidade estão visíveis para alterar o atributo 'aria-expanded'
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        // Atualiza o atributo 'aria-expanded' para 'true' ou 'false', conforme o estado atual
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })

    // Selecionando os botões para aumentar e diminuir o tamanho da fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    // Selecionando o botão para alternar o contraste
    const alternaContraste = document.getElementById('alterna-contraste')

    // Variável para controlar o tamanho da fonte atual
    let tamanhoAtualFonte = 1;

    // Adicionando o evento de clique para o botão de aumento de fonte
    aumentaFonteBotao.addEventListener('click', function () {
        // Aumenta o tamanho da fonte em 0.1 rem
        tamanhoAtualFonte += 0.1;
        // Aplica o novo tamanho da fonte ao corpo da página
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    // Adicionando o evento de clique para o botão de diminuição de fonte
    diminuiFonteBotao.addEventListener('click', function () {
        // Diminui o tamanho da fonte em 0.1 rem
        tamanhoAtualFonte -= 0.1;
        // Aplica o novo tamanho da fonte ao corpo da página
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    // Adicionando o evento de clique para o botão de alternância de contraste
    alternaContraste.addEventListener('click', function(){
        // Alterna a classe 'alto-contraste' no corpo da página para mudar o tema
        document.body.classList.toggle('alto-contraste')
    })
})

// Animações de rolagem usando a biblioteca ScrollReveal
// Revela os elementos com IDs específicos quando o usuário rola a página
ScrollReveal().reveal('#inicio', { delay: 500 });  // Elemento com ID 'inicio' será revelado após 500ms
ScrollReveal().reveal('#tropicalia', { delay: 500 });  // Elemento com ID 'tropicalia' será revelado após 500ms
ScrollReveal().reveal('#galeria', { delay: 500 });  // Elemento com ID 'galeria' será revelado após 500ms
ScrollReveal().reveal('#contato', { delay: 500 });  // Elemento com ID 'contato' será revelado após 500ms
