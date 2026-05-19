/* PRODUCT SCROLL */

const scrollContainer =
document.getElementById("productScroll");

function scrollLeftFun(){

    scrollContainer.scrollBy({
        left:-300,
        behavior:"smooth"
    });

}

function scrollRightFun(){

    scrollContainer.scrollBy({
        left:300,
        behavior:"smooth"
    });

}

/* QUANTITY */

const cartItems =
document.querySelectorAll(".cart-item");

cartItems.forEach((item)=>{

    const minus =
    item.querySelector(".minus");

    const plus =
    item.querySelector(".plus");

    const quantity =
    item.querySelector(".quantity span");

    const total =
    item.querySelector(".total");

    const price =
    parseInt(
    item.querySelector(".price").innerText
    );

    let qty =
    parseInt(quantity.innerText);

    plus.addEventListener("click",()=>{

        qty++;

        quantity.innerText = qty;

        total.innerText =
        "₹" + (qty * price);

        updateSummary();

    });

    minus.addEventListener("click",()=>{

        if(qty > 1){

            qty--;

            quantity.innerText = qty;

            total.innerText =
            "₹" + (qty * price);

            updateSummary();

        }

    });

});

/* UPDATE TOTAL */

function updateSummary(){

    const totals =
    document.querySelectorAll(".total");

    let subtotal = 0;

    totals.forEach((item)=>{

        subtotal +=
        parseInt(
        item.innerText.replace("₹","")
        );

    });

    let delivery = 40;

    let discount =
    parseInt(
    document.getElementById("discount")
    .innerText.replace("₹","")
    );

    document.getElementById("subtotal")
    .innerText = "₹" + subtotal;

    document.getElementById("finalTotal")
    .innerText =
    "₹" + (subtotal + delivery - discount);

}

/* COUPON */

function applyCoupon(){

    let coupon =
    document.getElementById("coupon")
    .value;

    let discount = 0;

    if(coupon === "COFFEE50"){

        discount = 50;

        alert("Coupon Applied!");

    }else{

        alert("Invalid Coupon");

    }

    document.getElementById("discount")
    .innerText = "₹" + discount;

    updateSummary();

}

/* POPUP */

function openPopup(){

    document.getElementById("popup")
    .style.display = "flex";

}

/* NEXT STEP */

function nextStep(){

    let name =
    document.getElementById("fullName").value;

    let phone =
    document.getElementById("phone").value;

    let address =
    document.getElementById("address").value;

    if(name === "" ||
       phone === "" ||
       address === ""){

        alert("Please Fill All Details");

        return;

    }

    document.getElementById("step1")
    .style.display = "none";

    document.getElementById("step2")
    .style.display = "block";

}

/* PAYMENT */

function selectPayment(type){

    let qr =
    document.getElementById("qrBox");

    let card =
    document.getElementById("cardBox");

    qr.style.display = "none";

    card.style.display = "none";

    if(type === "qr"){

        qr.style.display = "block";

    }

    if(type === "card"){

        card.style.display = "block";

    }

}

/* PLACE ORDER */

function placeOrder(){

    document.getElementById("popup")
    .style.display = "none";

    document.getElementById("celebration")
    .style.display = "block";

    setTimeout(()=>{

        alert("Order Placed Successfully!");

        document.getElementById("celebration")
        .style.display = "none";

    },3000);

}


function goContact(){

    document.querySelector(".a77n")
    .scrollIntoView({
        behavior:"smooth"
    });

}