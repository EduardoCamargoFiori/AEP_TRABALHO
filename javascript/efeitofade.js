document.addEventListener("DOMContentLoaded", function (event) {
    // Adiciona a classe que aciona a animação de fade-in após um pequeno atraso
    setTimeout(function () {
        document.querySelector('.container').style.opacity = '1';
    }, 60); // 1000ms = 1 segundo
});