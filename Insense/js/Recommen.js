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

// 모달창
const modal = document.querySelector('#modal-container');
const modalList = document.querySelectorAll('#modal-container .modal');
const contentLi = document.querySelectorAll('#content ul li');
const check = document.querySelectorAll('.modal span');

// 처음 화면에 모달창이 보이지 않게함
modalList.forEach(function (modalList) {
  modalList.classList.add('hidden');
});

// 클릭한 content와 modal의 dataset이 같다면 보여짐 
contentLi.forEach(function (contentLi) {
  let contentLiNum = Number(contentLi.dataset.modal);
  
  modalList.forEach(function (modalList) {
    let modalNum = Number(modalList.dataset.modal);
    
    contentLi.addEventListener('click', function() {
      if(contentLiNum === modalNum) {
        modalList.classList.remove('hidden');
      }
    });

    // 클릭한 check과 modal의 dataset이 같다면 사라짐
    check.forEach(function (check) {
      let checkNum = Number(check.dataset.modal);

      check.addEventListener('click', function() {
        if(modalNum === checkNum) {
          modalList.classList.add('hidden');
        }
      });
    });
  });
});
