const tabList = document.querySelectorAll('.tab-box .tab-content')
for(let i = 0; i < tabList.length; i++){
  tabList[i].addEventListener('click',() => {
    for(let j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('tab-title-on');
    }
    tabList[i].classList.add('tab-title-on');
  });
}
// tab-menu


const moveOn = document.querySelectorAll('.move-on')
window.addEventListener('scroll', () => {
  // console.log(window.scrollY)
  if (window.scrollY > 1800) {
    moveOn.forEach(element => {
      element.classList.replace('move-on','move-on-action')
    });
  }
})
// l-r move

const modalBtn = document.querySelectorAll('.vehicle-section6-inner1 .vehicle-section6-modal-btn')
const modalContent = document.querySelectorAll('.vehicle-section6-inner1 .vehicle-section6-modal-content')
const vehicleSectionSixImage = document.querySelector('.vehicle-section6-inner1 .vehicle-section-img')
const modalCloseBtn = document.querySelectorAll('.vehicle-section6-inner1 .vehicle-section6-madal-close')
for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener('click', () => {
    for (let j = 0; j < modalContent.length; j++) {
      modalContent[j].style.display = 'none'
    }
    modalContent[i].style.display ='block'
    vehicleSectionSixImage.style.filter = 'grayscale(100%)'
    vehicleSectionSixImage.addEventListener('click',() => {
      modalContent[i].style.display ='none'
      vehicleSectionSixImage.style.filter = 'grayscale(0%)'
    })
  })
}
for (let i = 0; i < modalBtn.length; i++) {
  modalCloseBtn[i].addEventListener('click', () => {
    modalContent[i].style.display = 'none'
    vehicleSectionSixImage.style.filter = 'grayscale(0%)'
  })
}
// modal
const modalBtn2 = document.querySelectorAll('.vehicle-section6-inner2 .vehicle-section6-modal-btn')
const modalContent2 = document.querySelectorAll('.vehicle-section6-inner2 .vehicle-section6-modal-content')
const vehicleSectionSixImage2 = document.querySelector('.vehicle-section6-inner2 .vehicle-section-img')
const modalCloseBtn2 = document.querySelectorAll('.vehicle-section6-inner2 .vehicle-section6-madal-close')
for (let i = 0; i < modalBtn2.length; i++) {
  modalBtn2[i].addEventListener('click', () => {
    for (let j = 0; j < modalContent.length; j++) {
      modalContent2[j].style.display = 'none'
    }
    modalContent2[i].style.display ='block'
    vehicleSectionSixImage2.style.filter = 'grayscale(100%)'
    vehicleSectionSixImage2.addEventListener('click',() => {
      modalContent2[i].style.display ='none'
      vehicleSectionSixImage2.style.filter = 'grayscale(0%)'
    })
  })
}
for (let i = 0; i < modalBtn2.length; i++) {
  modalCloseBtn2[i].addEventListener('click', () => {
    modalContent2[i].style.display = 'none'
    vehicleSectionSixImage2.style.filter = 'grayscale(0%)'
  })
}
// modal


const modalLeftBtn = document.querySelector('.left-right-btn .left-btn') 
const modalRightBtn = document.querySelector('.left-right-btn .right-btn') 
const sectionSixWrapper = document.querySelector('.vehicle-section6-wrapper')
modalLeftBtn.addEventListener('click', () => {
  sectionSixWrapper.style.transform = 'translateX(-0%)'
})
modalRightBtn.addEventListener('click', () => {
  sectionSixWrapper.style.transform = 'translateX(-50%)'
})

// modal  left-right swipe