const contentWRap = document.querySelectorAll('#recommen-container > div');
// forEach = 배열의 처음부터 마지막 요소까지 반복하여 실행

function opacityTransition(target, opacity, transition) {
  target.style.opacity = opacity;
  target.style.transition = transition;
};

contentWRap.forEach(function (contentWRap) {
  window.addEventListener('load', function() {
    opacityTransition(contentWRap, '1', '1s');
    contentWRap.style.transitionDelay = '.8s';
    contentWRap.style.top = '-2vh';
  });
});

// 탭 메뉴
const tabMenu = document.querySelectorAll('#sub-menu ul li');
const content = document.querySelectorAll('#content ul');

content.forEach(function (content) {
  let contentNum = Number(content.dataset.tab);
  tabMenu.forEach(function (tabMenu) {
    let tabNum = Number(tabMenu.dataset.tab);
    tabMenu.addEventListener('click', function() {
      if(tabNum === contentNum) {
        opacityTransition(content, '1', '.5s');
      } else {
        opacityTransition(content, '0', '.5s');
      }
    });
  });
});

