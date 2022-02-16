const meun = document.querySelector('#meun-botton');
const nev = document.querySelector('nav');

meun.addEventListener('mouseover', function() {
  nev.style.width = '22vw';
  nev.style.transition = '.5s';
});
meun.addEventListener('mouseout', function() {
  nev.style.width = '0vw';
  nev.style.transition = '.5s';
});