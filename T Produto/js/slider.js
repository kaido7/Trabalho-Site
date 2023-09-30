// list, frente, voltar
// slider_keyframes_1

const voltar = document.querySelector('.voltar');
const frente = document.querySelector('.frente');
const lista = document.querySelector('.list');

voltar.addEventListener('click', (event) => {
    event.preventDefault()
    lista.classList.remove('slider_keyframes_2')
    lista.classList.add('slider_keyframes_1')
})

frente.addEventListener('click', (event) => {
    event.preventDefault()
    lista.classList.remove('slider_keyframes_1')
    lista.classList.add('slider_keyframes_2')
})