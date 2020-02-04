window.onload = function () {
    this.runApp();

}
    //===============================//
    // shopping cart logic here   //
    //===============================//
    
function runApp () {

    const cartTotal  = document.querySelector('#cartPriceLoc')
    const cart  = document.querySelector('#cartItemNum')
    var  itemNum = 0;
    var cartPrice = []
    var itemCartBtn = document.querySelector('#store');
    
    itemCartBtn.addEventListener('click', function (event) {
        var btnValu = event.target.value
        console.log(btnValu)
        var totalOrder = []
        
        itemNum++;
        cart.innerText = "You have " + itemNum + " item in your cart.";

        cartPrice.push(btnValu)
            
        if (itemNum <= 1){
            console.log(cartPrice)
            console.log('the total order is: ' + cartPrice)
            cartTotal.innerText = "Your total is: $ " + cartPrice;

        } else if ( itemNum > 1){
            
            totalOrder =  cartPrice.reduce(function(a, b){return a+b;})
            console.log("the total order is: " + "$ "+ totalOrder )
            cartTotal.innerText = "Your total is: $ " + totalOrder;

        }
        
    })


        
        //=======================//
        // checkout functions
        //=======================// 
        //give option to add or removie items with add/delte button
        
        const startCheckOut =document.querySelector('#checkOutBtn');
        
        const delt = document.querySelector('#delBtn');
         const purchase = document.querySelector('#purchBtn');

         delt.addEventListener('click', function() {
               var cartItems = cartNum
               cartItems--;
               cartNum.innerText = cartItems
               //pop the last element from the stack of total items
               cartPrice.pop(btnValu)

         });

         purchase.addEventListener('click', function() {
                
                
                alert('Thank you for your purchase!')


         })

}       //end of run app function