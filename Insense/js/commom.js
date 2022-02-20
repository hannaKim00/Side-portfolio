function opacityTransition(target, opacity, transition) {
  target.style.opacity = opacity;
  target.style.transition = transition;
};
function opacityTransitionDelay(target, opacity, transition, transitionDelay) {
  target.style.opacity = opacity;
  target.style.transition = transition;
  target.style.transitionDelay = transitionDelay;
};

const header = document.querySelector('header');

window.addEventListener('load', function() {
  header.style.top = '0';
  opacityTransition(header, '1', '1s');
});

