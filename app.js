window.onload = function () {
    this.runApp();

}


    //variables for the search machine
    //checkboxes for amazon or for walmart quieries
    //function itemSearch(){}
    //===============================//
    // web scrape logic w/ puppetter here  //
    //===============================//


    // web scraper with puppetter
    /*
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('https://cargurus.com')

    console.log(await page.content());
    await page.screenshot({path: 'screenshot.png'});

    //returns items and their prices to the main page, and can run runApp to operate the store as needed

    await browser.close();
    */

    //display the shop search form once search is complete 

        
    //===============================//
    // shopping cart app logic here     //
    //===============================//
    
   // const itemOne = document.getElementById("btnOne").innerHTML;
   // const itemTwo = document.getElementById("btnTwo").innerHTML;
   // const itemThree = document.getElementById("btnThree").innerHTML;

function runApp () {

    const cart  = document.querySelector('#cartItemNum')
    var  cartNum = 0;

    var itemCartBtn = document.querySelector('#store');
    itemCartBtn.addEventListener('click', function () {
        cartNum++;
        cartNum.innerText = carNum
        //get price total by id and add
        
        

        if(cartNum < 0){ calculatePrice();}
    
            
                    
    })

}
        

    //calcualtes the final price of all selected items

    calculatePrice = function (final_price, cartItem) {
        var checkOutTotal = final_price;
        var cart = cartItem
        var totalOrder = ""

        if (carNum <= 1) {
        totalOrder == final_price;

        } else {

        totalOrder =  final_price.reduce(add,0);

        }

        function add(a,b) {
        return a + b;

        }
    
        console.log("the total order is: " + "$ "+ totalOrder )

     itemNumber.innerText = ("the total price is " + totalOrder)
   
        }


        //=======================//
        // checkout functions
        //=======================// 
        //give option to add or removie items with add/delte button
        const startCheckOut =document.querySelector('#checkOutBtn');
        
        const del = document.querySelector('#delBtn');
         const purchase = document.querySelector('purchBtn');

         del.addEventListener('click', function(cartNum) {
               var cartItems = cartNum
               cartItems--;
               cartNum.innerText = cartItems

         });

         purchase.addEventListener('click', function() {
                
                
                alert('Thank you for your purchase!')


         })