// Secção do javascript. 

// Criando um script afim de melhor apresentar elementos de navegação para o usuário final.
document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.pathname.split('/').pop();
    var navLinks = document.querySelectorAll('.botoes_nav');

    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

