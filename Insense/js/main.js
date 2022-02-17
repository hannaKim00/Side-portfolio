const meun = document.querySelector('#meun-botton');
// const nev = document.querySelector('nav');
// 한나씨 nev 이거 오타임?
const nav = document.querySelector('nav');

meun.addEventListener('mouseover', function() {
  nav.style.width = '22vw';
  nav.style.transition = '.5s';
});
meun.addEventListener('mouseout', function() {
  nav.style.width = '0vw';
  nav.style.transition = '.5s';
});