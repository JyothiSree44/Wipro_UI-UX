// Display message
const showMessage = msg => `🛒 QuickCart: ${msg}`;

// Price calculations
const calculateTotal = (price, qty) => price * qty;

const applyDiscount = (amount, discount) =>
  amount - (amount * discount) / 100;

const addTax = (amount, tax) =>
  amount + (amount * tax) / 100;

// Create product object
const createProduct = (name, price) => ({ name, price });

// Process product list
const getTotalCartValue = products =>
  products.reduce((sum, p) => sum + p.price, 0);

// Main function
const runQuickCart = () => {
  const output = document.getElementById("output");

  const products = [
    createProduct("Mobile", 20000),
    createProduct("Laptop", 60000),
    createProduct("Headphones", 2000)
  ];

  let total = getTotalCartValue(products);
  total = applyDiscount(total, 10);
  total = addTax(total, 5);

  output.innerHTML = `
    ${showMessage("Welcome!")}<br><br>
    Products: ${products.map(p => p.name).join(", ")}<br>
    Final Amount: ₹${total}
  `;
};
