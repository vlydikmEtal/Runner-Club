document.addEventListener('DOMContentLoaded', function () {
  const block = document.querySelectorAll('.section__anim')
  const animatedBlocks = new Set() 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedBlocks.has(entry.target)) {
          entry.target.classList.add('slideInDown')
          animatedBlocks.add(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  block.forEach((item) => {
    observer.observe(item)
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const block = document.querySelectorAll('.section__anim1')
  const animatedBlocks = new Set() 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedBlocks.has(entry.target)) {
          entry.target.classList.add('slideInDown1')
          animatedBlocks.add(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  block.forEach((item) => {
    observer.observe(item)
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const block = document.querySelectorAll('.section__anim2')
  const animatedBlocks = new Set() 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedBlocks.has(entry.target)) {
          entry.target.classList.add('slideInDown2')
          animatedBlocks.add(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  block.forEach((item) => {
    observer.observe(item)
  })
})
