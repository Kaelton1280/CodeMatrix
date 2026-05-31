const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.number'); // corrigido para camelCase
const list = document.querySelector('.list');

let active = 0;
const totalItems = items.length;
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    if (direction > 0) {
        active = active + 1;
        if (active === totalItems) {
            active = 0;
        }
    } else if (direction < 0) {
        active = active - 1;
        if (active < 0) {
            active = totalItems - 1;
        }
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

// Função para resetar o timer ao clicar nos botões - adicionado
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => update(1), 4000);
}

// Timer inicia corretamente - corrigido
timer = setInterval(() => update(1), 4000);

// Eventos dos botões
prevButton.addEventListener("click", function () {
    update(-1);
    resetTimer(); // reseta o timer ao clicar
});

nextButton.addEventListener("click", function () {
    update(1);
    resetTimer(); // reseta o timer ao clicar
});

// Eventos dos dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        update(index - active);
        resetTimer(); // reseta o timer ao clicar
    });
});