const useContent = document.querySelector('#use-content');
const cautionContent = document.querySelector('#caution-content');
const useImg = document.querySelector('section:nth-child(1) img');
const cautionImg = document.querySelector('section:nth-child(2) img');
console.dir(cautionImg);

window.addEventListener('load', function() {
  opacityTransitionDelay(useContent, '1', '1s', '1s');
  opacityTransition(useImg, '1', '2s');
  useImg.style.left = '0';
  opacityTransition(useImg.nextElementSibling, '1', '2s');
  useImg.nextElementSibling.style.right = '0';
});

window.addEventListener('scroll', function() {
  if(window.scrollY > 300) {
    opacityTransitionDelay(cautionContent, '1', '1.5s', '.2s');
    opacityTransition(cautionImg, '1', '2s');
    cautionImg.style.right = '0';
    opacityTransition(cautionImg.nextElementSibling, '1', '2s');
    cautionImg.nextElementSibling.style.left = '0';
  }
});