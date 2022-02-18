const header = document.querySelector('header');

function opacityTransition(target, opacity, transition) {
  target.style.opacity = opacity;
  target.style.transition = transition;
};

window.addEventListener('load', function() {
  header.style.top = '0';
  opacityTransition(header, '1', '1s');
});

