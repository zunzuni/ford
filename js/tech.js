const hide = function(t,y) {
  window.addEventListener('scroll',() => {
    if ( window.scrollY > y ) {
      t.classList.add('no-hide')
    }
  })
}
// hide function
const techSectionTwoIcons = document.querySelector('.tech-section2-icons')
hide(techSectionTwoIcons,450)
window.addEventListener('scroll',() => {
  console.log(window.scrollY)
})