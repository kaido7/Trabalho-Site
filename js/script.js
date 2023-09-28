// Função Header Menu

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



// click

const buttons = document.querySelector('.button-todos');
const buttonsSkincare = document.querySelector('.skin');


buttons.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event)
})


buttonsSkincare.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event)
})


const todos_pt = document.getElementById('todos-pt');
const skinFalt = document.getElementById('skinFalt');
const navMenu = document.querySelector('#nav');

todos_pt.addEventListener('click', () => {
  navMenu.classList.remove('active')
})

skinFalt.addEventListener('click', () => {
  navMenu.classList.remove('active')
})


// function todos() {
//   if(todos_pt)
// }