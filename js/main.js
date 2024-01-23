//cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () =>{
    cart.classList.add("active");
};
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

//cart working
if(document.readyState=='loading'){
    document.addEventListener("DOMContentLoaded",ready)
} else{
    ready();
}
//Making fuction
function ready(){
    //remove item from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i= 0; i < removeCartButtons.length;i++){
        var button = removeCartButtons[i]
        button.addEventListener('click',removeCartItem)
    }
}
//Remove Item from cart
function removeCartItem(event){
    var buttonClicked =event.target;
    buttonClicked=event.target;
    buttonClicked.parentElement.remove();
}
//update total
function updatetotal(){
    var cartContent =document.getElementsByClassNameByClassName('cart-cartoon')[0]
    var cartBoxes =cartContent.getElementsByClassNameByClassName('cart-price')
    for(var i=0; i<cartBoxes.length;i++){
        var cartBoxes =cartBoxes[i];

    }


}