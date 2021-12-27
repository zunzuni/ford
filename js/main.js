


const sectionOne = document.querySelector('.main-section')
const sectionTwo = document.querySelector('.section2')
const sectionTwoImgBox = document.querySelector('.section2-img-box')
const sectionThreeLeft = document.querySelector('.section3-left')
const sectionThreeRight = document.querySelector('.section3-right')
window.addEventListener('scroll',() => {
  if (window.scrollY > (sectionOne.scrollHeight / 2 )) {
    sectionTwoImgBox.classList.add('section-view')
  }
  if (window.scrollY > 700 ) {
    sectionThreeLeft.classList.add('to-left')
    sectionThreeRight.classList.add('to-right')
  }
})


const mainTestModal = document.querySelector('.main-test-modal-btn')
const modal = document.querySelector('.test-drive-modal')
const modalCancle = document.querySelector('.modal-cancle')

mainTestModal.addEventListener('click',() => {
  modal.style.display = 'block'
})
modalCancle.addEventListener('click',() => {
  modal.style.display = 'none'
})

const testDriveBtn = document.querySelector('.submit-btn')
testDriveBtn.addEventListener('click', () => {
  if(confirm('신청하시겠습니까?')) {
    alert('신청이 완료되었습니다')
  } else {
    alert ('신청이 취소되었습니다.')
  }
})
