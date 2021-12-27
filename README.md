# 🚗 FORD MUSTANG
## 포드머스탱 사이트입니다.
[데모사이트로 이동](~https://zuniiiford.netlify.app)
# 📃 페이지 구성
페이지는 총 6페이지
- main 페이지
- vehicle 페이지
- technology 페이지
- about ford 페이지
- customer center 페이지
- sign in 페이지  

로 구성되었습니다
# ⭐ 파비콘 Favicon
포드 머스탱의 로고를 이용하여 파비콘을 만들었습니다.  
- `favicon.ico` 48x48  
![favicon](./favicon.ico)
# 📌 Css Reset
```html  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
reset.css cdn으로 모든 css를 초기화 시켰습니다.
# 🅰 Font
폰트는 Google Fonts를 사용하였습니다.  
다운로드 방식이 아닌 링크방식을 이용하였습니다.
- 페이지에선 Saira폰트를 사용하였습니다
- 로고는 Anton폰트를 이용해 만들었습니다
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Saira:wght@300;400;500;600&display=swap" rel="stylesheet">
```

# 😁 Icon
아이콘은 Google Icons, fontawesome을 이용하였습니다
- Google Icons를 메인으로 이용하였고
- Googld Icons에 없는 아이콘들은 fontawesome을 이용하였습니다.

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons">
<script src="https://kit.fontawesome.com/d715487fe4.js" crossorigin="anonymous"></script>
```
# 🔹 Media Query
모든 페이지가 반응형으로 제작되었고
Break Point를 최소한으로 줄이려 노력했습니다
- min-width: 769px, min-width: 1200px 로 분기를 잡았습니다 
- max-width값을 1200px로 잡았습니다

# 🍋 JavaScript
이번 프로젝트는 바닐라 자바스크립트로 구현하려 그 어떤 라이브러리도 사용하지 않았습니다.
## Scroll Event
스크롤 이벤트를 적용하기 위해 먼저 스크롤 값을 요소에 맞게 계산하여 그에 맞게 ScrollY 값을 할당하였습니다
```javascript
window.addEventListener('scroll', () => {
  console.log(window.scrollY)
})
```
스크롤 이벤트는 전 페이지에 사용 되었습니다 함수로 만들어 가독성과 실용성을 모두 잡았습니다
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
탭메뉴를 css로 제작하려 했지만 요소가 클릭되었을 때 좀 더 동적인 느낌을 주기위하여 Js로 제작하였습니다
```javascript
for(let i = 0; i < tabList.length; i++){
  tabList[i].addEventListener('click',() => {
    for(let j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('tab-title-on');
    }
    tabList[i].classList.add('tab-title-on');
  });
}
```


