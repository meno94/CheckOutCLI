const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const {
    calculatePrice
} = require('./product');

program
    .version('0.0.1')
    .description('Cart management system');

program
    .command('list')
    .description('Add items to the cart!')
    .action((cart) => {
        console.log('cart =>', cart);
        var price = calculatePrice(cart);
        console.log('price =>' + price);
    });

program.parse(process.argv);