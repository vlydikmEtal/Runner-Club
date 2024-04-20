const slider = document.querySelector('.slider')
const slides = document.querySelector('.slides')
let slideWidth = slider.offsetWidth
let slideCount = slides.children.length
let currentIndex = 0
let intervalId

function goToSlide(index) {
  if (index < 0 || index >= slideCount) return
  slides.style.transform = `translateX(-${index * slideWidth}px)`
  currentIndex = index
}

function nextSlide() {
  if (currentIndex === slideCount - 1) {
    goToSlide(0)
  } else {
    goToSlide(currentIndex + 1)
  }
}

function prevSlide() {
  if (currentIndex === 0) {
    goToSlide(slideCount - 1)
  } else {
    goToSlide(currentIndex - 1)
  }
}

function startSlideInterval() {
  intervalId = setInterval(nextSlide, 4000)
}

function stopSlideInterval() {
  clearInterval(intervalId)
}

function updateSliderDimensions() {
  slideWidth = slider.offsetWidth
  goToSlide(currentIndex)
}

document.querySelector('.prev').addEventListener('click', function() {
  prevSlide()
  stopSlideInterval()
})

document.querySelector('.next').addEventListener('click', function() {
  nextSlide()
  stopSlideInterval()
})

window.addEventListener('resize', updateSliderDimensions)

startSlideInterval()