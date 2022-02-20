const content = document.querySelectorAll('#content > div');

window.addEventListener('load', function() {
  opacityTransitionDelay(content[0], '1', '2s', '1s');
  opacityTransitionDelay(content[1], '1', '2s', '1.5s');
});

window.addEventListener('scroll', function() {
  if(window.scrollY > 450) {
    console.log(window.scrollY);
    opacityTransitionDelay(content[2], '1', '1.5s', '.3s');
  }
  if(window.scrollY > 950) {
    console.log(window.scrollY);
    opacityTransitionDelay(content[3], '1', '1.5s', '.4s');
  }
});