# ๐ FORD MUSTANG
## ํฌ๋๋จธ์คํฑ ์ฌ์ดํธ์๋๋ค.
[๋ฐ๋ชจ์ฌ์ดํธ๋ก ์ด๋](https://zuniiiford.netlify.app)
# ๐ ํ์ด์ง ๊ตฌ์ฑ
ํ์ด์ง๋ ์ด 6ํ์ด์ง
- [main ํ์ด์ง](https://zuniiiford.netlify.app/)
- [vehicle ํ์ด์ง](https://zuniiiford.netlify.app/components/vehicle.html)
- [technology ํ์ด์ง](https://zuniiiford.netlify.app/components/tech.html)
- [about ford ํ์ด์ง](https://zuniiiford.netlify.app/components/company.html)
- [customer center ํ์ด์ง](https://zuniiiford.netlify.app/components/cc.html)
- [sign in ํ์ด์ง](https://zuniiiford.netlify.app/components/signin.html)  
  
๋ก ๊ตฌ์ฑ๋์์ต๋๋ค
# โญ ํ๋น์ฝ Favicon
ํฌ๋ ๋จธ์คํฑ์ ๋ก๊ณ ๋ฅผ ์ด์ฉํ์ฌ ํ๋น์ฝ์ ๋ง๋ค์์ต๋๋ค.  
- `favicon.ico` 48x48  
![favicon](./favicon.ico)
```html
<link rel="icon" href="./favicon.ico">
```
# ๐ Css Reset
```html  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
reset.css cdn์ผ๋ก ๋ชจ๋  css๋ฅผ ์ด๊ธฐํ ์์ผฐ์ต๋๋ค.
# ๐ฐ Fonts
ํฐํธ๋ Google Fonts์ ๋งํฌ๋ฐฉ์์ ์ด์ฉํ์์ต๋๋ค.
- ํ์ด์ง์์๋ Sairaํฐํธ๋ฅผ ์ฌ์ฉํ์์ต๋๋ค
- ๋ก๊ณ ๋ Antonํฐํธ๋ฅผ ์ด์ฉํด ๋ง๋ค์์ต๋๋ค
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Saira:wght@300;400;500;600&display=swap" rel="stylesheet">
```
# ๐ Color
โป ํธ๋ฅธ์์ ์๋ธ์ปฌ๋ฌ๋ ํฌ๋ ๊ณต์ ์ฌ์ดํธ๋ฅผ ์ฐธ๊ณ ํ์์ต๋๋ค.
```scss
$main-color: #2d96cd;
```
[๊ณต์์ฌ์ดํธ ์ฐธ๊ณ ](https://www.ford.co.kr/)
# ๐ท Images  
โป ๋๋ถ๋ถ์ ์ด๋ฏธ์ง๋ค์ ํฌ๋ ๊ณต์์ฌ์ดํธ๋ฅผ ์ฐธ๊ณ ํ์์ต๋๋ค.  
[๊ณต์์ฌ์ดํธ ์ฐธ๊ณ ](https://www.ford.co.kr/)

# ๐ Icons
์์ด์ฝ์ Google Icons, fontawesome์ ์ด์ฉํ์์ต๋๋ค
- Google Icons๊ฐ ์ฃผ๊ฐ ๋์๊ณ 
- Google Icons์ ์๋ ์์ด์ฝ๋ค์ fontawesome์ ์ด์ฉํ์์ต๋๋ค.

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons">
<script src="https://kit.fontawesome.com/d715487fe4.js" crossorigin="anonymous"></script>
```
# ๐น Media Query
๋ชจ๋  ํ์ด์ง๊ฐ ๋ฐ์ํ์ผ๋ก ์ ์๋์์ต๋๋ค
Break Point๋ฅผ ์ต์ํ์ผ๋ก ์ค์ด๋ ค ๋ธ๋ ฅํ์ต๋๋ค
- min-width: 769px, min-width: 1200px ๋ก ๋ถ๊ธฐ๋ฅผ ์ก์์ต๋๋ค 
- inner์ max-width๊ฐ์ 1200px๋ก ์ก์์ต๋๋ค

# ๐ JavaScript
๋ชจ๋  ํ์ด์ง๊ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์์ด ๋ฐ๋๋ผ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ์ ์๋์์ต๋๋ค
## Scroll Event
์คํฌ๋กค ์ด๋ฒคํธ๋ฅผ ์ ์ฉํ๊ธฐ ์ํด ๋จผ์  ์คํฌ๋กค ๊ฐ์ ์์์ ๋ง๊ฒ ๊ณ์ฐํ์ฌ ๊ทธ์ ๋ง๊ฒ ScrollY ๊ฐ์ ํ ๋นํ์์ต๋๋ค
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
hide(์์,Y๊ฐ)
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
  

### ๐ ๋๊น์ง ์ฝ์ด์ฃผ์์ ๊ฐ์ฌํฉ๋๋ค.


