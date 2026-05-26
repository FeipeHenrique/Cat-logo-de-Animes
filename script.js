const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');
const categorias = document.querySelectorAll('.categoria');

searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const animeName = card.dataset.name.toLowerCase();

        if (animeName.includes(value)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    categorias.forEach(categoria => {

        const cardsInCategoria =
            categoria.parentElement.querySelectorAll('.card');

        const anyVisible =
            Array.from(cardsInCategoria)
                .some(card => !card.classList.contains('hidden'));

        if (anyVisible) {
            categoria.classList.remove('hidden');
        } else {
            categoria.classList.add('hidden');
        }
    });
});