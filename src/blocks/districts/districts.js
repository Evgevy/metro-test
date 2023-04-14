const prodBtn = document.querySelectorAll('.districts__btn');
const tabsInfo = document.querySelectorAll('.districts__tab-item');


for (let item of prodBtn) {

    item.addEventListener('click', function() {
        

        for (let element of tabsInfo) {
            element.classList.remove('districts__tab-item--active')
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('districts__tab-item--active') 
        
    })
}

document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.districts__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('districts__btn--active'));
          btn.classList.add('districts__btn--active');
        });
 
    });

});