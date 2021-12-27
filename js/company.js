const swiperBtn = document.querySelectorAll('.swiper-btn div')
const companySectionTwoContent = document.querySelector('.company-section2-content')


for (let i = 0; i < swiperBtn.length; i++) {
  swiperBtn[i].addEventListener('click', () => {


    for (let j = 0; j < swiperBtn.length; j++) {

      swiperBtn[j].classList.remove('clicked')
    }


    swiperBtn[i].classList.add('clicked')
    
    companySectionTwoContent.style.transform = `translateX(${i * -25}%)`
  })
}
//mobile swiper

const hide = function(t,y) {
  window.addEventListener('scroll',() => {
    if ( window.scrollY > y ) {
      t.classList.add('no-hide')
    }
  })
}
//hide function

const companySectionTwo = document.querySelector('.company-section2')
hide(companySectionTwo,820)
const companySectionTwoText = document.querySelector('.company-section3-text')
hide(companySectionTwoText,1520)
const companySectionTwoContentOne = document.querySelector(".company-section3-content1")
const companySectionTwoContentTwo = document.querySelector(".company-section3-content2")
const companySectionTwoContentThree = document.querySelector(".company-section3-content3")
const companySectionTwoContentFour = document.querySelector(".company-section3-content4")
const companySectionOneTwoImg = document.querySelector('.company-section1-2-img')
hide(companySectionOneTwoImg,450)
hide(companySectionTwoContentOne,1740)
hide(companySectionTwoContentTwo,2055)
hide(companySectionTwoContentThree,2360)
hide(companySectionTwoContentFour,2680)

window.addEventListener('scroll',() => {
  console.log(window.scrollY)
})