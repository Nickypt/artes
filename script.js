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





document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Fecha todos os outros itens abertos (opcional, remova se quiser múltiplos abertos)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.classList.remove('open');
                }
            });

            // Alterna a classe 'active' no cabeçalho clicado
            this.classList.toggle('active');

            // Alterna a classe 'open' no conteúdo (próximo elemento irmão)
            const content = this.nextElementSibling;
            content.classList.toggle('open');
        });
    });
});