var faker = require("faker");

console.log("====================\nWELCOME TO MY SHOP!\n====================");
for (var i = 0 - 1; i < 10; i++) {
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
