product=prompt("Product name");
quantity=prompt("Enter quantity");
price=prompt("Enter price");
taxes=prompt("Enter Tax");


console.log(`Product: ${product}\nQuantity: ${quantity}\nPrice: ${price}\nTaxes: ${taxes}`);
console.log(price*quantity*taxes);

document.write(`Product: ${product}\nQuantity: ${quantity}\nPrice: ${price}\nTaxes: ${taxes}\nTotal: ${price*quantity*taxes}`);
