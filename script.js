document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para os links da navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Você pode adicionar mais funcionalidades aqui no futuro, como:
    // - Uma funcionalidade para abrir imagens da galeria em um modal (lightbox)
    // - Validação mais complexa do formulário de contato
    // - Animações ao rolar a página
});