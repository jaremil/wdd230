const handButton = document.querySelector('#menu');
const heading = document.querySelector('.heading');

handButton.addEventListener('click', () => {
    heading.classList.toggle('open');
    handButton.classList.toggle('open');
});