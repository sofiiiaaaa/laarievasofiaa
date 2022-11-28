var coste = {
    '10': {'pricePerEl': 10},
    '60': {'pricePerEl': 60},
    '0': {'pricePerEl': 0},
};
var costp = {
    '10': {'pricePerP': 10},
    '40': {'pricePerP': 40},
    '60': {'pricePerP': 60},
};
function calculatePrice()
{
    F = document.getElementById('FlowerOptions').value;
    E = document.getElementById('ElementOptions').value;
    P = document.getElementById('PackageOptions').value;
    q = document.getElementById('quantity').value;
    var price = F * q + coste[E].pricePerEl + costp[P].pricePerP;
    document.getElementById('price').innerHTML = price.toFixed(2) + " UAH";
}