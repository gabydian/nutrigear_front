document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.querySelector('.menu-botao');
    const menuItens = document.querySelector('.menu-itens');

    botaoMenu.addEventListener('click', function() {
        // Alterna a classe "aberto" no botão e nos itens do menu
        botaoMenu.classList.toggle('aberto');
        menuItens.classList.toggle('aberto');
    });
});
