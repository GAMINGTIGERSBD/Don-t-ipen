document.addEventListener('DOMContentLoaded', () => {
    function createShineEffect() {
        const backgroundContainer = document.querySelector('.background-container');

        if (backgroundContainer) {
            const shine = document.createElement('div');
            shine.classList.add('shine-effect');
            backgroundContainer.appendChild(shine);

            setTimeout(() => {
                shine.remove();
            }, 500);
        }
    }

    function initiateShineEffect() {
        createShineEffect();
        setInterval(createShineEffect, 1800);
    }

    initiateShineEffect();

    const button = document.querySelector('.enter');
    let hoverTimer;

    button.addEventListener('mouseover', () => {
        hoverTimer = setTimeout(() => {
            button.classList.add('hovered');
        }, 10000);
    });

    button.addEventListener('mouseout', () => {
        clearTimeout(hoverTimer);
        button.classList.remove('hovered');
    });

    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission for the sake of demonstration
        button.classList.remove('hovered');
        button.textContent = "Skadosh..";
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 1000);
    });
});