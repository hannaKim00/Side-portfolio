const tabMenu = document.querySelectorAll('#sub-menu ul li');
const content = document.querySelectorAll('#content ul');
//console.log(tabMenu);
//console.log(content);

tabMenu.forEach(function (tabMenu) {
  tabMenu.addEventListener('click', function() {
    let tab = Number(tabMenu.dataset.tab);
    console.log(typeof tab);

    content[tab-1].style.opacity = '1';
  });
});

