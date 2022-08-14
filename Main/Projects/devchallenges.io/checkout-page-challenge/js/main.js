/*get values */
const bagAddBtn = document.querySelector(".bagAddBtn");
const bagRemoveBtn = document.querySelector(".bagRemoveBtn");
const shoeAddBtn = document.querySelector(".shoeAddBtn");
const shoeRemoveBtn = document.querySelector(".shoeRemoveBtn");
const removeBtn = document.querySelector(".removeBtn");
const submitBtn = document.querySelector(".submit-btn");
const bag = document.querySelector(".bag").innerHTML;
const bagPrice = Number(bag.slice(1, 6));
const shoes = document.querySelector(".shoe").innerHTML;
const shoePrice = Number(shoes.slice(1, 6));
const shipping = document.querySelector(".shipping__price__value").innerHTML;
const shippingCost = Number(shipping.slice(1, shipping.length))
let bagCount = Number(document.querySelector(".bag__qty").innerHTML);
let shoeCount = Number(document.querySelector(".shoe__qty").innerHTML);
let TotalCost = 0;
let totalSum = "$"



/*Listening to clicking events */
/*Increasing bag count*/
bagAddBtn.addEventListener('click', function () {
    bagCount++;
    TotalCost = (bagPrice * bagCount) + (shoePrice * shoeCount) + shippingCost;
    document.querySelector(".bag__qty").innerHTML = bagCount;
    document.querySelector(".total__price__value").innerHTML = totalSum + TotalCost.toFixed(2);

});

/*decrease bag count*/
bagRemoveBtn.addEventListener('click', function () {
    if (bagCount === 1) {
        bagCount = 1;
    } else {
        bagCount--;
    }
    TotalCost = (bagPrice * bagCount) + (shoePrice * shoeCount) + shippingCost;
    TotalCost = (bagPrice * bagCount) + (shoePrice * shoeCount) + shippingCost;
    document.querySelector(".bag__qty").innerHTML = bagCount;
    document.querySelector(".total__price__value").innerHTML = totalSum + TotalCost.toFixed(2);
});


/*Increasing shoe count*/
shoeAddBtn.addEventListener('click', function () {
    shoeCount++;
    TotalCost = (bagPrice * bagCount) + (shoePrice * shoeCount) + shippingCost;
    TotalCost = (bagPrice * bagCount) + (shoePrice * shoeCount) + shippingCost;
    document.querySelector(".shoe__qty").innerHTML = shoeCount;
    document.querySelector(".total__price__value").innerHTML = totalSum + TotalCost.toFixed(2);
});

/*decrease shoe count*/
shoeRemoveBtn.addEventListener('click', function () {
    if (shoeCount === 1) {
        shoeCount = 1;
    } else {
        shoeCount--;
    }
    TotalCost = (bagPrice * bagCount) + (shoePrice * shoeCount) + shippingCost;
    TotalCost = (bagPrice * bagCount) + (shoePrice * shoeCount) + shippingCost;
    document.querySelector(".shoe__qty").innerHTML = shoeCount;
    document.querySelector(".total__price__value").innerHTML = totalSum + TotalCost.toFixed(2);
});

/*Submit button*/

submitBtn.addEventListener('click', function () {
    alert("order Submitted successfully");
});
