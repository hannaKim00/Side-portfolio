const img = document.querySelector('#img');
const h2 = document.querySelector('#text h2');
const p = document.querySelector('#text p');

window.addEventListener('load', function() {
  opacityTransition(img, '1', '1s');
  p.style.left = '0';
  opacityTransition(p, '1', '2s');
  h2.style.top = '0';
  opacityTransition(h2, '1', '2s');
});


// 마우스 오버시 메뉴가 나타남
const meun = document.querySelector('#meun-botton');
const nav = document.querySelector('nav');

meun.addEventListener('mouseover', function() {
  menuSlider(nav, '22vw', '.5s');
});
meun.addEventListener('mouseout', function() {
  menuSlider(nav, '0vw', '.5s');
});
