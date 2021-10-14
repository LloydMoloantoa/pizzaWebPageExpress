
const addBtn49 = document.querySelector('.addBtn49');
const addBtn79 = document.querySelector('.addBtn79');
const addBtn99 = document.querySelector('.addBtn99');
const payBtn = document.querySelector('.payBtn');


const boxes = document.querySelectorAll('.boxShoppingCart');
let counter = 0;

const addBtn49c = document.querySelector('.addBtn49c');
const addBtn79c = document.querySelector('.addBtn79c');
const addBtn99c = document.querySelector('.addBtn99c');

var subtractBtn49 = document.querySelector('.subtractBtn49');
var subtractBtn79 = document.querySelector('.subtractBtn79');
var subtractBtn99 = document.querySelector('.subtractBtn99');
var subtractBtnTotal = document.querySelector('.subtractBtnTotal');


var cartLargePizzaLbl = document.querySelector('.cartLargePizzaLbl');
var cartMediumPizzaLbl = document.querySelector('.cartMediumPizzaLbl');
var cartSmallPizzaLbl = document.querySelector('.cartSmallPizzaLbl');
var totalCostLbl = document.querySelector('.totalCostLbl');

var payAmountTxt = document.querySelector('.payAmountTxt')
var outPutLbl = document.querySelector('.outPutLbl');

const costBill = CostBill();
console.log(costBill);
/* const costBill = CostBill();

costBill.theSmallOrder();
costBill.theMediumOrder();
costBill.theLargeOrder();

costBill.smallTotal();
costBill.mediumTotal();
costBill.largeTotal(); 
costBill.totalCost();   */

addBtn49c.addEventListener('click', function () {
    var costBill = CostBill();
    alert("Order added");
  
    cartSmallPizzaLbl.innerHTML = "R " + costBill.theSmallOrder();

    totalCostLbl.innerHTML = "Total Cost: R " + costBill.totalCost();
    if (counter > 1) {
        counter = 0;
    }
    boxes[counter].classList.toggle("hidden");
    counter++;
});

addBtn79c.addEventListener('click', function () {
    var costBill = CostBill();
    alert("Order added");
  
    cartSmallPizzaLbl.innerHTML = "R " + costBill.theMediumOrder;

    totalCostLbl.innerHTML = "Total Cost: R " + costBill.totalCost();
    if (counter > 1) {
        counter = 0;
    }
    boxes[counter].classList.toggle("hidden");
    counter++;
});


addBtn49.addEventListener('click', function () {
    var costBill = CostBill();
    alert("Order added");
  
    cartSmallPizzaLbl.innerHTML = "R " + costBill.theSmallOrder();

    totalCostLbl.innerHTML = "Total Cost: R " + costBill.totalCost();
});

addBtn79.addEventListener('click', function () {
    var costBill = CostBill();
    alert("Order added");
    costBill.theMediumOrder();
    cartMediumPizzaLbl.innerHTML = "R " + mediumTotal.toFixed(2);

    totalCostLbl.innerHTML = "Total Cost: R " + costBill.totalCost().toFixed(2);
});

addBtn99.addEventListener('click', function () {
    alert("Order added");
    largeTotal += 99;
    cartLargePizzaLbl.innerHTML = "R " + largeTotal.toFixed(2);

    totalCostLbl.innerHTML = "Total Cost: R " + costBill.totalCost().toFixed(2);
});

subtractBtn49.addEventListener('click', function () {
    if (smallTotal > 0) {
        smallTotal -= 49;
        cartSmallPizzaLbl.innerHTML = "R " + smallTotal.toFixed(2);
        totalCost -= 49;
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Order removed");
    }
});

subtractBtn79.addEventListener('click', function () {
    if (mediumTotal > 0) {
        mediumTotal -= 79;
        cartMediumPizzaLbl.innerHTML = "R " + mediumTotal.toFixed(2);
        totalCost -= 79;
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Order removed");
    }
});

subtractBtn99.addEventListener('click', function () {
    if (largeTotal > 0) {
        largeTotal -= 99;
        cartLargePizzaLbl.innerHTML = "R " + largeTotal.toFixed(2);
        totalCost -= 99;
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Order removed");
    }
});

subtractBtnTotal.addEventListener('click', function () {
    if (totalCost > 0) {
        totalCost = 0;
        smallTotal = 0;
        mediumTotal = 0;
        largeTotal = 0;
        cartSmallPizzaLbl.innerHTML = "R " + smallTotal.toFixed(2);
        cartMediumPizzaLbl.innerHTML = "R " + mediumTotal.toFixed(2);
        cartLargePizzaLbl.innerHTML = "R " + largeTotal.toFixed(2);
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Total removed");
    }
});

payBtn.addEventListener('click', function () {
    var payAmount = payAmountTxt.value;

    if (payAmount >= totalCost) {
        outPutLbl.innerHTML = "order payed";
    } else {
        outPutLbl.innerHTML = "Insufficient funds";
    }
});
