document.getElementById('buy-kitkat').addEventListener('click', function() {

    const price = getInputPrice('kitkat-price');
    const quantity = getInputQuantity('kitkat-quantity');
    const chocolateTotal = price * quantity;

    setValue('chocolate-price', chocolateTotal);
})

document.getElementById('buy-rose').addEventListener('click', function() {

    const price = getInputPrice('red-rose-price');
    const quantity = getInputQuantity('rose-quantity');
    const roseTotal = price * quantity;

    setValue('rose-price', roseTotal);
})

document.getElementById('buy-watch').addEventListener('click', function() {

    const price = getInputPrice('watch-price');
    const quantity = getInputQuantity('watch-quantity');
    const watchTotal = price * quantity;

    setValue('watch-total-price', watchTotal);

    totalValue('total-price');
})

function totalValue(elementId) {
    const totalChocolate = parseFloat(document.getElementById('chocolate-price').innerText);
    const totalRose = parseFloat(document.getElementById('rose-price').innerText);
    const totalWatch = parseFloat(document.getElementById('watch-total-price').innerText);
    const setTotal = document.getElementById(elementId);

    const total = totalChocolate + totalRose + totalWatch;
    setTotal.innerText = total;
}

document.getElementById('apply').addEventListener('click', function() {
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    const discountPrice = document.getElementById('discount-price');
    const couponCode = document.getElementById('coupon-code');
    const coupon = couponCode.value;
    couponCode.value = '';

    if (coupon === 'ILOVEYOU') {
        const price = totalPrice * (10 / 1000);
        const totalDiscountPrice = totalPrice - price;
        discountPrice.innerText = totalDiscountPrice;
    } else {
        alert('Invalid Coupon');
        discountPrice.innerText = totalPrice;
    }

})