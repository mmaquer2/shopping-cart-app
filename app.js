window.onload = function () {
    this.runApp();

}

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
    
function runApp () {

    const cart  = document.querySelector('#cartItemNum')
    var  itemNum = 0;
    var cartPrice = []
    var itemCartBtn = document.querySelector('#store');
    
    itemCartBtn.addEventListener('click', function (event) {
        var btnValu = event.target.value
        console.log(btnValu)
        var totalOrder = ""
        
        itemNum++;
        cart.innerText = itemNum;

        cartPrice.push(btnValu)
            
        if (itemNum < 1){
            console.log(cartPrice)

        } else if ( itemNum > 1){
            
            totalOrder =  cartPrice.reduce(add,0);

        }

        function add(a,b) {
        return a + b;

        
        }
        
        
        console.log("the total order is: " + "$ "+ totalOrder )

      
            
                    
    })

}
        

        //=======================//
        // checkout functions
        //=======================// 
        //give option to add or removie items with add/delte button
        /*
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

         */