// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Adiciona um evento de movimento do mouse para cada card
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posição X do mouse dentro do card
        const y = e.clientY - rect.top; // Posição Y do mouse dentro do card

        // Calcula o movimento baseado na posição do mouse
        const rotateX = (y - rect.height / 3) / 10;
        const rotateY = -(x - rect.width / 3) / 10;

        // Aplica a transformação ao card
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reseta a transformação quando o mouse sai do card
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});


const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
  wrap: true,
})