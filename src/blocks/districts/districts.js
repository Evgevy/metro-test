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