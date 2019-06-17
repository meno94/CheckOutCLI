const apple = {
    name: 'apple',
    price: 0.6
}
const orange = {
    name: 'oramge',
    price: 0.25
}

const appleDiscountActive = true;
const orangeDiscountActive = true;

function buildArray(cart) {
    return cart.split(',');
}



function getCounts(cart) {

    var counts = {};
    cart.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });

    return counts;
}

function calculatePrice(cart) {
    fruitList = buildArray(cart);

    var fruitCount = getCounts(fruitList);

    var appleDiscount = 0;
    var orangeDiscount = 0;
    if (Math.floor(fruitCount['apple'] / 2) != NaN) {
        appleDiscount = Math.floor(fruitCount['apple'] / 2) * apple.price;
    }

    if (Math.floor(fruitCount['orange'] / 3)) {
        orangeDiscount = Math.floor(fruitCount['orange'] / 3) * orange.price;
    }



    var totalAmount = 0;

    fruitList.forEach(fruit => {

        switch (fruit) {
            case 'orange':
                totalAmount += orange.price;
                break;
            case 'apple':
                if (appleDiscountActive) {
                    totalAmount += apple.price;
                }
                break;
            default:
                break;
        }
    });


    if (appleDiscount != NaN) {
        totalAmount = totalAmount - appleDiscount;
    }

    if (orangeDiscount != NaN) {
        totalAmount = totalAmount - orangeDiscount;
    }

    return totalAmount;
}

module.exports = {
    calculatePrice
};