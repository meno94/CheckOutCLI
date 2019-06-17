const apple = {
    name: 'apple',
    price: 0.6
}
const orange = {
    name: 'oramge',
    price: 0.25
}

function buildArray(cart) {
    return cart.split(',');
}

function calculatePrice(cart) {
    fruitList = buildArray(cart);

    var totalAmount = 0;

    fruitList.forEach(fruit => {








        switch (fruit) {
            case 'orange':
                totalAmount += orange.price;
                break;
            case 'apple':
                totalAmount += apple.price;
        }
    });

    return totalAmount;
}

module.exports = {
    calculatePrice
};