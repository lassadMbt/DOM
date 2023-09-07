// JavaScript code for handling shopping cart functionality

// Get all the elements with the class "button-PLUS" and add event listeners
var incrementation = Array.from(document.getElementsByClassName("button-PLUS"));
incrementation.map(el => el.addEventListener("click", function () {
    el.nextElementSibling.innerHTML = Number(el.nextElementSibling.innerHTML) + 1;
    document.getElementById('shopping-bag-total').innerHTML = total();
}));

// Get all the elements with the class "button-minus" and add event listeners
var décrementation = Array.from(document.getElementsByClassName("button-minus"));
décrementation.map(el => el.addEventListener("click", function () {
    if (el.previousElementSibling.innerHTML > 0) {
        el.previousElementSibling.innerHTML = Number(el.previousElementSibling.innerHTML) - 1;
        document.getElementById('shopping-bag-total').innerHTML = total();
    }
}));

// Get all the elements with the class "button-exit" and add event listeners
var elmnt = document.getElementsByClassName("button-exit");
for (let el of elmnt) {
    el.addEventListener("click", function () {
        el.parentNode.remove();
        document.getElementById('shopping-bag-total').innerHTML = total();
    })
}

// Get all the elements with the class "fa-heart" and add event listeners to change color
let like = document.querySelectorAll(".fa-heart")
for (let el of like)
    el.addEventListener("click", function () {
        el.style.color = 'red';
    })

// Calculate the total price of items in the shopping cart
function total() {
    let price = document.getElementsByClassName("SOMME");
    let qt = document.getElementsByClassName("valeur");
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += (price[i].innerHTML) * (qt[i].innerHTML);
    }
    return sum;
}
