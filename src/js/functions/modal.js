document.querySelectorAll('.example__img').forEach(img => {
  img.onclick = () => {
    document.querySelector('.pop-up').classList.add('pop-up--open');
    document.querySelector('.pop-up__img').src = img.getAttribute('src');
    console.log(document.querySelector('.pop-up__img').src)
    console.log(img.getAttribute('src'))
    if ( document.querySelector('.pop-up__img').getAttribute('src') === 'img/example12.jpeg' ||  document.querySelector('.pop-up__img').getAttribute('src') === 'img/example8.jpg' ) {

      document.querySelector('.pop-up__modal').classList.add('pop-up__modal--width')

    }
    else

      document.querySelector('.pop-up__modal').classList.remove('pop-up__modal--width')

 

  }
})

document.querySelector('.pop-up__closed').onclick = () => {
  document.querySelector('.pop-up').classList.remove('pop-up--open');
}

window.addEventListener('keydown', (e) => {
  if(e.key === "Escape") {
    document.querySelector('.pop-up').classList.remove('pop-up--open');
  }
})

document.querySelector('.pop-up__modal').addEventListener('click', event => {
  event._isClickWithInModal = true;
  console.log(event._isClickWithInModal)
})
document.getElementById('pop-up').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('pop-up--open')

})
