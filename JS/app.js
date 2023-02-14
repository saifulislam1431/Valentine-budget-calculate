function getInputPrice(elementId) {

    const regularPrice = document.getElementById(elementId);
    const price = parseFloat(regularPrice.innerText);
    return price;

}

function getInputQuantity(inputId) {

    const inputQuantity = document.getElementById(inputId);
    const quantity = parseFloat(inputQuantity.value);
    inputQuantity.value = '';

    return quantity;

}

function setValue(id, value) {
    parseFloat(document.getElementById(id).innerText = value);
}