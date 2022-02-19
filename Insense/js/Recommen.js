function opacityTransition(target, opacity, transition) {
  target.style.opacity = opacity;
  target.style.transition = transition;
};

const contentWRap = document.querySelectorAll('#recommen-container > div');

// forEach = 배열의 처음부터 마지막 요소까지 반복하여 실행
contentWRap.forEach(function (contentWRap) {
  window.addEventListener('load', function() {
    opacityTransition(contentWRap, '1', '1s');
    contentWRap.style.transitionDelay = '.8s';
    contentWRap.style.top = '-2vh';
  });
});


// 탭 메뉴
const tabMenu = document.querySelectorAll('#sub-menu ul li');
const tabClick = document.querySelectorAll('#sub-menu ul li');
const content = document.querySelectorAll('#content > div');

tabClick.forEach(function (tabClick) {
  tabClick.addEventListener('click', function() {
    let tabClickValue = Number(tabClick.dataset.tab);
    
    tabMenu.forEach(function (tabMenu) {
        let tabValue = Number(tabMenu.dataset.tab);
    
        if(tabClickValue === tabValue) {
          tabMenu.className = 'on';
        } else {
          tabMenu.className = '';
        }
    });

    content.forEach(function (content) {
      let contentValue = Number(content.dataset.tab);
      if(tabClickValue === contentValue) {
        console.log(contentValue);
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
})

