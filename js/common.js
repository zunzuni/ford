const header = document.querySelector('header')

window.addEventListener('scroll',() => {
  if (window.scrollY > 72) {
    header.classList.add('header-fix')
  } else {
    header.classList.remove('header-fix')
  }
})

const langSelect = document.querySelector('.lang-select')
const langSelectText = document.querySelector('.lang-select-text')
const langArrow = document.querySelector('.lang-select .arrow-down')
const langBox = document.querySelector('.lang-box')
const langBoxContent = document.querySelectorAll('.lang-box div')

langSelect.addEventListener('click',() => {
  langArrow.classList.toggle('arrow-select')
  langBox.classList.toggle('lang-box-select')
})

langBoxContent.forEach(element => {
  element.addEventListener('click',() => {
    langSelectText.textContent = element.textContent
  })
});

const mobileHeaderBtn = document.querySelector(".mobile-header-btn")
let mobileHeaderBtnClick = true;
mobileHeaderBtn.addEventListener('click', () => {
  mobileHeaderBtn.classList.toggle('mobile-header-btn-click')
  mobileHeaderBtnClick = !mobileHeaderBtnClick
  if (mobileHeaderBtnClick) {
    header.style.left = '-100%'
  } else {
    header.style.left = '0'
  }
})

//header 