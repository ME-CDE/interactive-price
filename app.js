const toggle = document.querySelector('.toggle-button');
const views = document.getElementById('price');
const input = document.getElementById('myrange');
const price = document.querySelectorAll('.price h1');
const time = document.querySelectorAll('.price p');

function prices() {
    if (toggle.className === 'toggle-button toggle-button-move') {
        for (let index = 0; index < price.length; index++) {
            price[index].textContent =`$${Math.round(input.value/36) + 8}.00`;
            time[index].textContent = `/month`;
        }
    } else {
        for (let index = 0; index < price.length; index++) {
            price[index].textContent =`$${Math.round(((input.value/36) + 8)*9)}.00`;
            time[index].textContent = `/year`;
        }
    }
}

function move(){
    toggle.classList.toggle('toggle-button-move')
    prices()
}


function inputchange() {
    let value = (input.value-input.min)/(input.max-input.min)*100;

    input.style.background = `linear-gradient(to right, #a5f3eb ${value}%, #eaeefb 0%)`
    if (input.value > 999) {
        views.textContent =`1M`
    }else{
        views.textContent =`${input.value}k`
    }
    prices()
}