async function getArray(find) {
    const res = await fetch('https://dummyjson.com/products?limit=20');
    const jsonData = await res.json();
    console.log(json);
    //jsonData.find("");
}

async function getCatArray() {
    let cat = new Set();
    var catResult = "";
    const res = await fetch('https://dummyjson.com/products?limit=100');
    const jsonData = await res.json();
    jsonData.products.forEach(product => {
        cat.add(product.category);
    });
    cat.forEach(e => {
        catResult += `<a class="dropdown-item" href="category.html">${e}</a>`;
    });
    document.getElementById("setCat").innerHTML = catResult;
}
getCatArray()
function getPost(data) {
    let html = "";
    data.products.forEach(product => {
        html += `<!-- Product -->
            <div class="col-md-3 my-3">
                <div class="col-12 bg-white text-center h-100 product-item">
                    <div class="row h-100">
                        <div class="col-12 p-0 mb-3">
                            <a href="product.html">
                                <img src="${product.thumbnail}" class="img-fluid">
                            </a>
                        </div>
                        <div class="col-12 mb-3">
                            <a href="product.html?id=${product.id}" class="product-name">${product.title}</a>
                        </div>
                        <div class="col-12 mb-3">
                                <span class="product-price-old">
                                    ${product.price - 100}
                                </span>
                            <br>
                            <span class="product-price">
                                    ${product.price}
                                </span>
                        </div>
                        <div class="col-12 mb-3 align-self-end">
                            <button class="btn btn-outline-dark" type="button" onclick="add(${product.id})"><i class="fas fa-cart-plus me-2"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Product -->`;
    });
    document.getElementById("postLoop").innerHTML = html;
}
fetch('https://dummyjson.com/products?limit=100').then(data => data.json()).then(data => getPost(data));

//fetch('https://dummyjson.com/products?limit=20').then(data => data.json()).then(data => console.log(data));
let cart = new ShoppingCart();
function add(id) {
    var obj = "";
    fetch('https://dummyjson.com/products?limit=20').then(data => data.json()).then(data => {
        data.products.forEach(product => {
            if (product.id == id) {
                obj = { id: product.id, title: `${product.title}`, price: product.price, quantity: 1, thumbnail: `${product.thumbnail}` };
                cart.addToCart(obj);
                location.assign("cart.html");
            }
        });
    });
}
document.getElementById("header-qty").innerHTML = cart.totalItems();
var totalPrice = 0;
var carsItems = cart.showCart();
let catdHtml = "";
carsItems.forEach(e => {
    totalPrice += e.quantity * e.price;
    catdHtml += `<tr>
            <td>
                <img src="${e.thumbnail}" class="img-fluid">
                ${e.title}
            </td>
            <td>${e.price}</td>
            <td>${e.quantity}</td>
            <td>${totalPrice}</td>
            <td>
                <button class="btn btn-link text-danger"><i class="fas fa-times"></i></button>
            </td>
        </tr>`;
});
document.getElementById("totlaPrice").innerHTML = totalPrice;
document.getElementById("cartPost").innerHTML = catdHtml;

