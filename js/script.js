
// Chama os components para os arquivos html principais
$(function(){
    $('#header').load('components/header.html');
});

// Inicia biblioteca de animações
AOS.init({
    offset: 200,
    once: true,
    duration: 600,
});

// Abre e fecha o menu mobile
function menu(){
    document.getElementById('menu').classList.toggle('active')
}