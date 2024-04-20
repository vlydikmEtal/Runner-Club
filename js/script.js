const burger = document.querySelectorAll('.burger')
const header = document.querySelectorAll('.header__top')

burger.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('burger__active')
    header.forEach((item) => {
      item.classList.toggle('header__top--open')
    })
  })
})

header.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('header__top--open')
    burger.forEach((item) => {
      item.classList.toggle('burger__active')
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal')
  const closeButton = document.getElementsByClassName('close')[0]
  const accept = document.querySelector('.btn1')

  modal.style.display = 'block'

  accept.onclick = function () {
    modal.style.display = 'none'
  }
  closeButton.onclick = function () {
    modal.style.display = 'none'
  }
})
