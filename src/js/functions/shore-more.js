const shoreMore = document.querySelector('.example__btn-show');
let items = 4;
let item = 3;
let item768 = 2;

let length = document.querySelectorAll('.example__item').length;

if (window.matchMedia('(max-width: 768px)').matches) {
  shoreMore.addEventListener('click', () => {
    console.log(item768)
    item768 += 2;
    const array = Array.from(document.querySelector('.example__list').children);
    const visItems = array.slice(0, item768);
    console.log(array)
    console.log(visItems)
    visItems.forEach(el => el.classList.add('is-visible'))
  })
}


if (window.matchMedia('(max-width: 1024px)').matches) {
  if (window.matchMedia('(min-width: 769px)').matches) {
    shoreMore.addEventListener('click', () => {
      console.log(item)
      item += 3;
      const array = Array.from(document.querySelector('.example__list').children);
      const visItems = array.slice(0, item);
      console.log(array)
      console.log(visItems)
      visItems.forEach(el => el.classList.add('is-visible'))

    })
  }
}

if (window.matchMedia('(min-width: 1025px)').matches) {
  shoreMore.addEventListener('click', () => {
    console.log(items)
    items += 4;
    const array = Array.from(document.querySelector('.example__list').children);
    const visItems = array.slice(0, items);
    console.log(array)
    console.log(visItems)
    visItems.forEach(el => el.classList.add('is-visible'))
  })


}
