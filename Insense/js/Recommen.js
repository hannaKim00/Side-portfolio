const contentWRap = document.querySelectorAll('#recommen-container > div');

// forEach = 배열의 처음부터 마지막 요소까지 반복하여 실행
contentWRap.forEach(function (contentWRap) {
  window.addEventListener('load', function() {
    opacityTransitionDelay(contentWRap, '1', '1s', '.8s')
    contentWRap.style.top = '-2vh';
  });
});


// 탭 메뉴
const tabClick = document.querySelectorAll('#sub-menu ul li');
const tabMenu = document.querySelectorAll('#sub-menu ul li');
const content = document.querySelectorAll('#content > div');

tabClick.forEach(function (tabClick) {
  tabClick.addEventListener('click', function() {
    let tabClickValue = Number(this.dataset.tab);
    
    tabMenu.forEach(function (tabMenu) {
      let tabValue = Number(tabMenu.dataset.tab);
    
        tabClickValue === tabValue ? tabMenu.className = 'on' : tabMenu.className = '';
        
    });

    content.forEach(function (content) {
      let contentValue = Number(content.dataset.tab);

      // 클릭한 dataset과 같은 content를 슬라이더로 보여줌
      if(tabClickValue === contentValue) {
        switch (contentValue) {
          case 1:
            content.parentNode.style.left = '0vw';
            break;

          case 2:
            content.parentNode.style.left = '-75vw';
            break;

          case 3:
            content.parentNode.style.left = '-150vw';
          break;

          case 4:
            content.parentNode.style.left = '-225vw';
            break;
            
          case 5:
          content.parentNode.style.left = '-300vw';
          break;
        };
      }
    });
  });
})

