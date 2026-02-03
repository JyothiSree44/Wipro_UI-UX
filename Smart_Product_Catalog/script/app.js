const productContainer = $("#products");
const errorBox = $("#error");

// US-01: Load products asynchronously
async function loadProducts() {
  try {
    const response = await fetch("js/data.json");
    if (!response.ok) throw new Error("Failed to load data");
    const data = await response.json();
    renderProducts(data);
    return data;
  } catch (err) {
    errorBox.text("Unable to load products. Please try again.");
  }
}

// US-02: Functional programming (filter + map)
function renderProducts(products) {
  productContainer.empty();

  const category = $("#categoryFilter").val();

  const filtered = products.filter(p =>
    category === "all" ? true : p.category === category
  );

  const html = filtered.map(p => `
    <div class="card">
      <h4>${p.name}</h4>
      <p>₹${p.price.toLocaleString()}</p>
      <button data-id="${p.id}">Add to Cart</button>
    </div>
  `).join("");

  productContainer.html(html);
}

// US-04: Event delegation
productContainer.on("click", "button", function () {
  alert("Added product ID: " + $(this).data("id"));
});

// US-05: jQuery Deferred for async flow
const deferredLoad = $.Deferred();

loadProducts().then(data => deferredLoad.resolve(data));

deferredLoad.done(products => {
  $("#categoryFilter").on("change", () => renderProducts(products));
});
