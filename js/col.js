let coll = document.querySelectorAll('.coll')
const plus = document.querySelectorAll('.plus')

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active')
    plus[i].classList.toggle('active1')
    let content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}