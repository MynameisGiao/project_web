document.addEventListener("DOMContentLoaded", function () {
    // Lấy dữ liệu từ file JSON
    fetch("json/add_cart.json")
      .then((response) => response.json())
      .then((data) => {
        // Gọi hàm để hiển thị dữ liệu
        displayShop(data.categories);
        addCartEvents();
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
  
  function displayShop(categories) {
    const shopContainer = document.querySelector(".shop-container");
  
    // Duyệt qua từng danh mục sản phẩm
    categories.forEach((category) => {
      const categorySection = document.createElement("section");
      categorySection.classList.add("shop", "container");
  
      const categoryTitle = document.createElement("h2");
      categoryTitle.classList.add("section-title");
      categoryTitle.textContent = category.title;
      categorySection.appendChild(categoryTitle);
  
      const shopContent = document.createElement("div");
      shopContent.classList.add("shop-content");
      categorySection.appendChild(shopContent);
  
      // Duyệt qua từng sản phẩm trong danh mục
      category.products.forEach((product) => {
        const productBox = document.createElement("div");
        productBox.classList.add("product-box");
  
        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;
        productImg.classList.add("product-img");
        productBox.appendChild(productImg);
  
        const productTitle = document.createElement("h2");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.name;
        productBox.appendChild(productTitle);
  
        const productPrice = document.createElement("span");
        productPrice.classList.add("price");
        productPrice.textContent = product.price;
        productBox.appendChild(productPrice);
  
        const cartIcon = document.createElement("i");
        cartIcon.classList.add("bx", "bx-cart-add", "add-cart");
        productBox.appendChild(cartIcon);
  
        shopContent.appendChild(productBox);
      });
  
      shopContainer.appendChild(categorySection);
    });
  }
  
  function addCartEvents() {
    // Thêm giỏ hàng
    const addCartButtons = document.querySelectorAll(".add-cart");
    addCartButtons.forEach((button) => {
      button.addEventListener("click", addCartClicked);
    });
  
    // Cart JS
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      ready();
    }
  
    function ready() {
      // Xóa sản phẩm khỏi cart
      const removeCartButtons = document.getElementsByClassName("cart-remove");
      for (let i = 0; i < removeCartButtons.length; i++) {
        const button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
      }
  
      // Thay đổi số lượng
      const quantityInputs = document.getElementsByClassName("cart-quantity");
      for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
      }
  
      // Button Thanh Toán
      document
        .getElementsByClassName("btn-buy")[0]
        .addEventListener("click", buyButtonClicked);
    }
  }
  
  // Button Thanh toán
function buyButtonClicked(){
    alert("Giỏ hàng đã được thanh toán")
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    };
    updatetotal();
}



// Xóa hàng khỏi cart
function  removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Thay đổi số lượng
function quantityChanged(event){
    var input=event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

// Thêm vào cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title =shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price =shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg =shopProducts.getElementsByClassName("product-img")[0].src;
    // console.log(title,price,productImg);
    addProductToCart(title,price,productImg);
    updatetotal();
}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i=0; i<cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        }
   }

    var cartBoxContent =`
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!--  Remove Cart -->
    <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click",removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change",quantityChanged);    
}
//Update Tổng
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total=0;
    for (var i=0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("",""));
        var quantity = quantityElement.value;
        total= total + (price * quantity);
    }
      
        

        document.getElementsByClassName('total-price')[0].innerText = total + 'đ';
}





  // Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add('active');
}
//Close Cart
closeCart.onclick = () => {
    cart.classList.remove('active');
}
