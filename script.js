document.addEventlistenner('DOMcontentloaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const botaoDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventlistenner('clik', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        botaoDeAcessibilidade.classList.toggle('apresenta-lista')
   
   const botaoselecionado = botaoDeAcessibilidade.getAttribute
   ('aria-expandead')    === 'true';
    })
})