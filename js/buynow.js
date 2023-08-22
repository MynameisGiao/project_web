const loadingElement = document.getElementById('loading');
var timeEvent="2023-08-30T00:00:00Z";
// Hàm để xóa hiệu ứng loading
function removeLoading() {
  loadingElement.remove();
}
// Gọi hàm xóa loading sau 3 giây
setTimeout(removeLoading, 2000);


// Lấy tham chiếu đến phần tử loading
//điều chỉnh icon trên menu navbar nhanh
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu');
  var pseudo = document.querySelector('.quick_choices');
  var icon_menu = document.querySelector('.menu i');

  menu.addEventListener('click', function () {
      if (pseudo.style.display === 'none') {
          pseudo.style.display = 'block';
          icon_menu.classList.remove('fa-bars');
          icon_menu.classList.add('fa-x');
      } else {
          pseudo.style.display = 'none';
          icon_menu.classList.remove('fa-x');
          icon_menu.classList.add('fa-bars');
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các phần tử <li> trong thẻ <ul> có lớp CSS là "list"
    var listItems = document.querySelectorAll('.list ul li');

    // Lặp qua từng phần tử <li>
    listItems.forEach(function(item) {
        // Gắn sự kiện "click" vào từng phần tử <li>
        item.addEventListener('click', function() {
            // Lấy phần tử <a> đầu tiên bên trong phần tử <li> được nhấp chuột
            var link = this.querySelector('a');

            // Kiểm tra xem có phần tử <a> được tìm thấy hay không
            if (link) {
                // Chuyển hướng trình duyệt đến đường dẫn của phần tử <a>
                window.location.href = link.href;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lấy tất cả các phần tử <li> trong thẻ <ul> có lớp CSS là "list"
  var listItems1 = document.querySelectorAll('.list1 ul li');

  // Lặp qua từng phần tử <li>
  listItems1.forEach(function(item) {
      // Gắn sự kiện "click" vào từng phần tử <li>
      item.addEventListener('click', function() {
          // Lấy phần tử <a> đầu tiên bên trong phần tử <li> được nhấp chuột
          var link = this.querySelector('a');

          // Kiểm tra xem có phần tử <a> được tìm thấy hay không
          if (link) {
              // Chuyển hướng trình duyệt đến đường dẫn của phần tử <a>
              window.location.href = link.href;
          }
      });
  });
});
var bannerImg = document.getElementById('bannerImg');
//tạo 1 mảng các link ảnh
var images = ['./img/shop_page/flash_sale/banner_1.jpg', './img/shop_page/flash_sale/banner_2.jpg']; // Mảng chứa đường dẫn tới các hình ảnh mới
var currentIndex = 0; // Chỉ số của ảnh hiện tại trong mảng

function changeImage() {
    bannerImg.src = images[currentIndex]; // Thay đổi đường dẫn của ảnh hiện tại

    bannerImg.classList.add('flash-effect'); // Thêm lớp flash-effect để tạo hiệu ứng chớp flash

    setTimeout(function() {
        bannerImg.classList.remove('flash-effect'); // Xóa lớp flash-effect sau một khoảng thời gian (ví dụ: 1 giây)
    }, 1000);

    currentIndex = (currentIndex + 1) % images.length; // Tăng chỉ số và quay trở lại 0 nếu đã đến ảnh cuối cùng
}

setInterval(changeImage, 5000); // Gọi hàm changeImage sau mỗi khoảng thời gian (ví dụ: 5 giây)

var button2 = document.querySelector('.button2');

button2.addEventListener('click', function() {
  // Thay đổi hình ảnh khi click
  bannerImg.src = './img/shop_page/flash_sale/banner_1.jpg'; // Đường dẫn tới hình ảnh mới
  bannerImg.classList.add('flash-effect'); // Thêm lớp flash-effect để tạo hiệu ứng chớp flash

  setTimeout(function() {
    bannerImg.classList.remove('flash-effect'); // Xóa lớp flash-effect sau một khoảng thời gian (ví dụ: 1 giây)
    }, 1000);
}) ; 

var button1 = document.querySelector('.button1');

button1.addEventListener('click', function() {
  // Thay đổi hình ảnh khi click
  var bannerImg = document.getElementById('bannerImg');
  bannerImg.src = './img/shop_page/flash_sale/banner_2.jpg'; // Đường dẫn tới hình ảnh mới
  bannerImg.classList.add('flash-effect'); // Thêm lớp flash-effect để tạo hiệu ứng chớp flash

  setTimeout(function() {
      bannerImg.classList.remove('flash-effect'); // Xóa lớp flash-effect sau một khoảng thời gian (ví dụ: 1 giây)
    }, 1000);
}) ;


document.addEventListener('DOMContentLoaded', function() {
    const productsContainers = document.querySelectorAll('.products');
    const blockPrevs = document.querySelectorAll('.block_prev');
    const blockNexts = document.querySelectorAll('.block_next');
  
    // Lặp qua từng phần tử và gán sự kiện onclick
    blockPrevs.forEach((blockPrev, index) => {
      const productsContainer = productsContainers[index];
  
      blockPrev.onclick = function() {
        const scrollAmount = -250; // Điều chỉnh khoảng cách scroll
        productsContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      };
    });
  
    // Lặp qua từng phần tử và gán sự kiện onclick
    blockNexts.forEach((blockNext, index) => {
      const productsContainer = productsContainers[index];
  
      blockNext.onclick = function() {
        const scrollAmount = 250; // Điều chỉnh khoảng cách scroll
        productsContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      };
    });
});

document.addEventListener("DOMContentLoaded", function () {
  let cartIcon = document.querySelector(".cart");
  let wrappercart = document.querySelector(".wrapper_cart");
  let closeCart = document.querySelector("#close-cart");
  let cartZone = document.querySelector(".cart_zone"); // Thêm khai báo cho cartZone
  let cartItems = [];

  // Mở giỏ hàng khi click vào biểu tượng giỏ hàng
  cartIcon.onclick = () => {
    console.log("Cart icon clicked");
    wrappercart.classList.add("active");
  };

  // Đóng giỏ hàng khi click vào nút đóng
  closeCart.onclick = () => {
    console.log("Close button clicked");
    wrappercart.classList.remove("active");
  };

  // Hiển thị danh sách sản phẩm đang sale
  function showFlashSaleProducts(products) {
    const flashSale = document.getElementById("add1");
    let html = "";
    products.forEach((product) => {
      html += `
      <!-- Mã HTML của sản phẩm bán chạy nhất -->
      <div class="product">
        <img src="${product.image_link}" alt="">
        <div class="content">
          <a href="">${product.content}</a>
          <div class="price">
            <div class="text_content1">
              <p>${product.text_content1}</p>
            </div>
            <div class="text_content2">
              <p>${product.text_content2}</p>
            </div>
          </div>
          <div class="judgement">
            <ul>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li>|</li>
              <li><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>
          </div>
        </div>
        <div class="timer" id="fixed">
          <div class="days">
            <div class="box_days">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="hours">
            <div class="box_hours">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="mins">
            <div class="box_mins">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="secs">
            <div class="box_secs">
              <span>00</span>
            </div>
          </div>
        </div>
        <button class="btn_rightnow"><i class="fa-solid fa-bag-shopping"></i> Chọn mua</button>
      </div>
      `;
    });
    flashSale.innerHTML = html;

    const addToCartButtons = document.querySelectorAll(".btn_rightnow");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addCartClicked);
    });
  }

    // Hiển thị danh sách sản phẩm bán chạy nhất
  function showBestSellingProducts(products) {
    const bestsell = document.getElementById("add2");
    let html = "";
    products.forEach((product) => {
      html += `
      <!-- Mã HTML của sản phẩm bán chạy nhất -->
      <div class="product">
        <img src="${product.image_link}" alt="">
        <div class="content">
          <a href="">${product.content}</a>
          <div class="price">
            <div class="text_content1">
              <p>${product.text_content1}</p>
            </div>
            <div class="text_content2">
              <p>${product.text_content2}</p>
            </div>
          </div>
          <div class="judgement">
            <ul>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li>|</li>
              <li><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>
          </div>
        </div>
        <div class="timer" id="fixed">
          <div class="days">
            <div class="box_days">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="hours">
            <div class="box_hours">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="mins">
            <div class="box_mins">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="secs">
            <div class="box_secs">
              <span>00</span>
            </div>
          </div>
        </div>
        <button class="btn_rightnow"><i class="fa-solid fa-bag-shopping"></i> Chọn mua</button>
      </div>
      `;
    });
    bestsell.innerHTML = html;

    const addToCartButtons = document.querySelectorAll(".btn_rightnow");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addCartClicked);
    });
  }

  // Hiển thị danh sách sản phẩm cà phê rang xay
  function showRoastedCoffeeProducts(products) {
    const coffee = document.getElementById("add3");
    let html = "";
    products.forEach((product) => {
      html += `
      <!-- Mã HTML của sản phẩm bán chạy nhất -->
      <div class="product">
        <img src="${product.image_link}" alt="">
        <div class="content">
          <a href="">${product.content}</a>
          <div class="price">
            <div class="text_content1">
              <p>${product.text_content1}</p>
            </div>
            <div class="text_content2">
              <p>${product.text_content2}</p>
            </div>
          </div>
          <div class="judgement">
            <ul>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li>|</li>
              <li><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>
          </div>
        </div>
        <div class="timer" id="fixed">
          <div class="days">
            <div class="box_days">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="hours">
            <div class="box_hours">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="mins">
            <div class="box_mins">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="secs">
            <div class="box_secs">
              <span>00</span>
            </div>
          </div>
        </div>
        <button class="btn_rightnow"><i class="fa-solid fa-bag-shopping"></i> Chọn mua</button>
      </div>
      `;
    });
    coffee.innerHTML = html;

    const addToCartButtons = document.querySelectorAll(".btn_rightnow");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addCartClicked);
    });
  }
  // Hiển thị danh sách sản phẩm tiêu dùng
  function showConsumptionProducts(products) {
    const consume = document.getElementById("add4");
    let html = "";
    products.forEach((product) => {
      html += `
      <!-- Mã HTML của sản phẩm bán chạy nhất -->
      <div class="product">
        <img src="${product.image_link}" alt="">
        <div class="content">
          <a href="">${product.content}</a>
          <div class="price">
            <div class="text_content1">
              <p>${product.text_content1}</p>
            </div>
            <div class="text_content2">
              <p>${product.text_content2}</p>
            </div>
          </div>
          <div class="judgement">
            <ul>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li><i class="fa-regular fa-star"></i></li>
              <li>|</li>
              <li><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>
          </div>
        </div>
        <div class="timer" id="fixed">
          <div class="days">
            <div class="box_days">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="hours">
            <div class="box_hours">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="mins">
            <div class="box_mins">
              <span>00</span>
            </div>
            <div class="wrapper_dot">
              <span>:</span>
            </div>
          </div>
          <div class="secs">
            <div class="box_secs">
              <span>00</span>
            </div>
          </div>
        </div>
        <button class="btn_rightnow"><i class="fa-solid fa-bag-shopping"></i> Chọn mua</button>
      </div>
      `;
    });
    consume.innerHTML = html;

    const addToCartButtons = document.querySelectorAll(".btn_rightnow");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addCartClicked);
    });
  }
  
  // Thêm số 0 vào đầu chuỗi nếu số nhỏ hơn 10
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Cập nhật thời gian còn lại cho sản phẩm trong flash sale
  function updateCountdown(targetDate, daysElement, hoursElement, minsElement, secsElement) {
    var currentDate = new Date();
    var totalSeconds = Math.floor((targetDate - currentDate) / 1000);
    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var mins = Math.floor((totalSeconds % 3600) / 60);
    var secs = Math.floor(totalSeconds % 60);

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minsElement.textContent = formatTime(mins);
    secsElement.textContent = formatTime(secs);
  }

  // Thêm sản phẩm vào giỏ hàng khi click vào nút "Chọn mua"
  function addCartClicked(event) {
    var button = event.target;
    var cartItem = button.closest(".product");
  
    if (!cartItem) {
      console.error("Error: Cart item not found");
      return;
    }
  
    var titleElement = cartItem.querySelector(".content a");
    var priceElement = cartItem.querySelector(".price p");
    var productImgElement = cartItem.querySelector("img");
  
    if (!titleElement || !priceElement || !productImgElement) {
      console.error("Error: Missing product information");
      return;
    }
  
    var title = titleElement.innerText;
    var priceString = priceElement.innerText;
    var productImg = productImgElement.getAttribute("src");
  
    // Thêm sản phẩm vào giỏ hàng với giá gốc
    addToCart(title, priceString, productImg, priceString);
  }

  // Cập nhật giá tiền tương ứng với số lượng sản phẩm
  function updateCartItemPrice(inputElement) {
    const cartContent = inputElement.closest(".cart-content");
    const title = cartContent.querySelector(".cart-product-title").innerText;
    const priceString = cartContent.querySelector(".cart-price").innerText.replace("đ", "").replace(".", "").replace(",", ".");
    const price = parseFloat(priceString);
    const quantity = parseInt(inputElement.value);

    if (!isNaN(price) && !isNaN(quantity) && price > 0 && quantity > 0) {
      const totalPrice = price * quantity;
      cartContent.querySelector(".cart-price").innerText = totalPrice.toLocaleString("vi-VN") + " đ";
    } else {
      console.error("Error: Invalid price or quantity for item: " + title);
    }
    updateTotal();
  }

  // Thay đổi số lượng sản phẩm trong giỏ hàng
function quantityChanged(inputElement, title) {
  const quantity = parseInt(inputElement.value);
  const item = cartItems.find((item) => item.title === title);
  if (item) {
    item.quantity = quantity;
    updateTotal(); // Cập nhật tổng số tiền khi số lượng sản phẩm thay đổi
  }
}

  // Xóa sản phẩm khỏi giỏ hàng
  function removeCartItem(title) {
    cartItems = cartItems.filter((item) => item.title !== title);
    displayCart();
    updateTotal();
  }

  // Hiển thị giỏ hàng
  function displayCart() {
    cartZone.innerHTML = ""; // Xóa hết nội dung cũ của cartZone

    cartItems.forEach((item) => {
      addToCartZone(item); // Thêm từng sản phẩm vào cartZone
    });
  }

  // Thêm sản phẩm vào giỏ hàng
function addToCart(title, price, productImg, originalPrice) {
  console.log("Adding item to cart:", title, price, productImg);

  // Kiểm tra xem giá gốc đã chuyển đổi thành số hợp lệ chưa
  const numericOriginalPrice = convertPriceToNumber(originalPrice);
  if (isNaN(numericOriginalPrice) || numericOriginalPrice <= 0) {
    console.error("Error: Invalid original price for item: " + title);
    return;
  }

  var existingItemIndex = cartItems.findIndex((item) => item.title === title);
  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++;
  } else {
    var newItem = { title, price, productImg, originalPrice, quantity: 1 };
    cartItems.push(newItem);
  }

  displayCart();
  updateTotal();
}

  // Tạo mới khối giỏ hàng và thêm sản phẩm vào đó
  function addToCartZone(item) {
    const cartContent = document.createElement("div");
    cartContent.classList.add("cart-items"); // Tạo một khối cart-items mới cho từng sản phẩm
    cartContent.innerHTML += `
        <!-- Mã HTML của từng sản phẩm trong giỏ hàng -->
        <div class="cart-content">
        <div id="fit"><img src="${item.productImg}" alt="" class="cart-img"/></div>
        <div class="detail-box">
          <div class="cart-product-title">${item.title}</div>
          <div class="cart-price">${item.price}</div>
          <input type="number" value="${item.quantity}" min="1" class="cart-quantity">
        </div>
        <div class="box-trash">
          <i class='bx bxs-trash-alt cart-remove'></i>
        </div>
      </div>
      `;
    cartZone.appendChild(cartContent); // Thêm cart-items mới vào cart-zone

    cartContent.querySelector(".cart-remove").addEventListener("click", () => removeCartItem(item.title));
    cartContent.querySelector(".cart-quantity").addEventListener("change", () => quantityChanged(cartContent.querySelector(".cart-quantity"), item.title));
    const inputElement = cartContent.querySelector(".cart-quantity");
    inputElement.addEventListener("change", () => quantityChanged(inputElement, item.title));
  }

  // Hiển thị giỏ hàng
  function displayCart() {
    cartZone.innerHTML = ""; // Xóa hết nội dung cũ của cart-zone

    cartItems.forEach((item) => {
      addToCartZone(item); // Thêm từng sản phẩm vào cartZone
    });
  }

  // Xóa sản phẩm khỏi giỏ hàng
  function removeCartItem(title) {
    cartItems = cartItems.filter((item) => item.title !== title);
    displayCart();
    updateTotal();
  }

  //xử lý text
  function convertPriceToNumber(priceString) {
    console.log("Converting priceString:", priceString);

    // Xóa các ký tự không phải số (ví dụ: "đ", ".", ",")
    const cleanedPriceString = priceString.replace(/[đ.,]/g, "");

    console.log("Cleaned priceString:", cleanedPriceString);

    // Chuyển đổi từ dạng chuỗi sang dạng số thực
    const price = parseFloat(cleanedPriceString);

    console.log("Converted price:", price);

    return price;
  }

  // Cập nhật tổng số tiền trong giỏ hàng
  function updateTotal() {
    var total = 0;
    cartItems.forEach((item) => {
      // Kiểm tra xem giá gốc của sản phẩm đã chuyển đổi thành số hợp lệ chưa
      const originalPrice = convertPriceToNumber(item.originalPrice);
      if (!isNaN(originalPrice) && originalPrice > 0) {
        total += originalPrice * item.quantity;
      } else {
        console.error("Error: Invalid original price for item: " + item.title);
      }
    });
  
    // Format total thành chuỗi tiền tệ
    const formattedTotal = total.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  
    // Cập nhật vào class total-price
    document.querySelector(".total-price").innerText = formattedTotal;
  }

//hàm đếm ngược sự kiện cho tất cả sản phẩm
  function TimerEvent() {
    var targetDate = new Date(timeEvent);
      var daysElements = document.querySelectorAll(".box_days span");
      var hoursElements = document.querySelectorAll(".box_hours span");
      var minsElements = document.querySelectorAll(".box_mins span");
      var secsElements = document.querySelectorAll(".box_secs span");

      function updateCountdownForEachProduct() {
        daysElements.forEach((daysElement, index) => {
          const hoursElement = hoursElements[index];
          const minsElement = minsElements[index];
          const secsElement = secsElements[index];
          updateCountdown(targetDate, daysElement, hoursElement, minsElement, secsElement);
        });
      }

      setInterval(updateCountdownForEachProduct, 1000);
  }

  // Fetch dữ liệu từ JSON và hiển thị sản phẩm 
  fetch("./json/dbBuyNow_FlashSale.json")
    .then((response) => response.json())
    .then((data) => {
      showFlashSaleProducts(data.products);
      TimerEvent();
    })
    .catch((error) => console.error("Error fetching flash sale products:", error));
  
    fetch("./json/dbBuyNow_bestSelling.json")
    .then((response) => response.json())
    .then((data) => {
      showBestSellingProducts(data.products);
      TimerEvent();
    })
    .catch((error) => console.error("Error fetching best selling products:", error));
    
    fetch("./json/dbBuyNow_RoastedCoffee.json")
    .then((response) => response.json())
    .then((data) => {
      showRoastedCoffeeProducts(data.products);
      TimerEvent();
    })
    .catch((error) => console.error("Error fetching roasted coffee products:", error));
    
    
    fetch("./json/dbBuyNow_ConsumptionProducts.json")
    .then((response) => response.json())
    .then((data) => {
      showConsumptionProducts(data.products);
      TimerEvent();
    })
    .catch((error) => console.error("Error fetching roasted coffee products:", error));
});














  


