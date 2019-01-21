/* JavaScript for WATS 3020 Sandwich Machine Assignment */

//delivery alert 
alert("We're unable to deliver to you at this time. ")

//prompts 
let bread = prompt("Select a bread: white, wheat, rye, or sourdough", "rye")
let meat = prompt("Select meat(s). Separate multipe by a comma,", "turkey, ham, chicken, bacon")
let topping = prompt("Select topping(s). Separate multipe by a comma,", "lettuce, tomato" )
let condiment = prompt("Select condiment(s). Separate multipe by a comma,", "Ketchup, mayo")

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1.00, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meat.split(",");
let toppingArray = topping.split(",");
let condimentArray = condiment.split(",");

//calculations below
let meatCost = prices.meat * meatArray.length;
let toppingCost = prices.topping * toppingArray.length;
let condimentCost = prices.condiment * condimentArray.length;
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;
let totalPrice = subtotal + orderTax;

//Use for tip calculation in receiptTemplate
let Tip = {Five: (subtotal*0.05)}

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meat} </p>
    <p>Toppings: ${topping}</p>
    <p>Condiments: ${condiment}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich} </p>
    <p class="text-right">Meat: (${meatArray.length}@ $${prices.meat}) $${meatCost}</p>
    <p class="text-right">Toppings: (${toppingArray.length}@ $${prices.topping}) $${toppingCost}</p>
    <p class="text-right">Condiments: (${condimentArray.length}@ $${prices.condiment}) $${condimentCost}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
    <p>Tip</p> 
    10% $${Tip.Five.toFixed(2)*2} 15% $${Tip.Five.toFixed(2)*3} 20% $${Tip.Five*4} 25% $${Tip.Five*5} </p>
`
///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;