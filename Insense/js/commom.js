const header = document.querySelector('header');
const content = document.querySelectorAll('#content > div');

function opacityTransition(target, opacity, transition) {
  target.style.opacity = opacity;
  target.style.transition = transition;
};
function opacityTransitionDelay(target, opacity, transition, transitionDelay) {
  target.style.opacity = opacity;
  target.style.transition = transition;
  target.style.transitionDelay = transitionDelay;
};

window.addEventListener('load', function() {
  header.style.top = '0';
  opacityTransition(header, '1', '1s');
  opacityTransitionDelay(content[0], '1', '2s', '.7s');
  opacityTransitionDelay(content[1], '1', '2s', '1.2s');
});

window.addEventListener('scroll', function() {
  if(window.scrollY > 450) {
    console.log(window.scrollY);
    opacityTransition(content[2], '1', '2s');
  }
  if(window.scrollY > 850) {
    console.log(window.scrollY);
    opacityTransition(content[3], '1', '2s');
  }
});
