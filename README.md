# 🚗 FORD MUSTANG
## 포드머스탱 사이트입니다.
[데모사이트로 이동](https://zuniiiford.netlify.app)
# 📃 페이지 구성
페이지는 총 6페이지
- [main 페이지](https://zuniiiford.netlify.app/)
- [vehicle 페이지](https://zuniiiford.netlify.app/components/vehicle.html)
- [technology 페이지](https://zuniiiford.netlify.app/components/tech.html)
- [about ford 페이지](https://zuniiiford.netlify.app/components/company.html)
- [customer center 페이지](https://zuniiiford.netlify.app/components/cc.html)
- [sign in 페이지](https://zuniiiford.netlify.app/components/signin.html)  
  
로 구성되었습니다
# ⭐ 파비콘 Favicon
포드 머스탱의 로고를 이용하여 파비콘을 만들었습니다.  
- `favicon.ico` 48x48  
![favicon](./favicon.ico)
```html
<link rel="icon" href="./favicon.ico">
```
# 📌 Css Reset
```html  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
reset.css cdn으로 모든 css를 초기화 시켰습니다.
# 🅰 Fonts
폰트는 Google Fonts의 링크방식을 이용하였습니다.
- 페이지에서는 Saira폰트를 사용하였습니다
- 로고는 Anton폰트를 이용해 만들었습니다
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Saira:wght@300;400;500;600&display=swap" rel="stylesheet">
```
# 🌈 Color
※ 푸른색의 서브컬러는 포드 공식 사이트를 참고하였습니다.
```scss
$main-color: #2d96cd;
```
[공식사이트 참고](https://www.ford.co.kr/)
# 📷 Images  
※ 대부분의 이미지들은 포드 공식사이트를 참고하였습니다.  
[공식사이트 참고](https://www.ford.co.kr/)

# 😁 Icons
아이콘은 Google Icons, fontawesome을 이용하였습니다
- Google Icons가 주가 되었고
- Google Icons에 없는 아이콘들은 fontawesome을 이용하였습니다.

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons">
<script src="https://kit.fontawesome.com/d715487fe4.js" crossorigin="anonymous"></script>
```
# 🔹 Media Query
모든 페이지가 반응형으로 제작되었습니다
Break Point를 최소한으로 줄이려 노력했습니다
- min-width: 769px, min-width: 1200px 로 분기를 잡았습니다 
- inner의 max-width값을 1200px로 잡았습니다

# 🍋 JavaScript
모든 페이지가 라이브러리 없이 바닐라 자바스크립트로 제작되었습니다
## Scroll Event
스크롤 이벤트를 적용하기 위해 먼저 스크롤 값을 요소에 맞게 계산하여 그에 맞게 ScrollY 값을 할당하였습니다
```javascript
window.addEventListener('scroll', () => {
  console.log(window.scrollY)
})
```


```javascript
const hide = function(t,y) {
  window.addEventListener('scroll',() => {
    if ( window.scrollY > y ) {
      t.classList.add('no-hide')
    }
  })
}
hide(요소,Y값)
```
## Tab Menu

```javascript
for(let i = 0; i < tabList.length; i++){
  tabList[i].addEventListener('click',() => {
    for(let j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('class-name');
    }
    tabList[i].classList.add('class-name');
  });
}
```
  

### 💝 끝까지 읽어주셔서 감사합니다.


