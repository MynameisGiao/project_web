// Lấy tham chiếu đến phần tử loading
const loadingElement = document.getElementById('loading');

// Hàm để xóa hiệu ứng loading
function removeLoading() {
  loadingElement.remove();
}

// Gọi hàm xóa loading sau 3 giây
setTimeout(removeLoading, 2000);

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

var countProducts1=document.querySelectorAll('.product');
var count=0;

function countProducts() {
    for (var i=0; i<countProducts1.length; i++)
        count++;
}

var textCounProducts=document.querySelector('.title_count span')
countProducts();
textCounProducts.textContent=count+' sản phẩm';

document.addEventListener('DOMContentLoaded', function() {
  // Lấy danh sách các checkbox lọc giá
  const priceCheckboxes = document.querySelectorAll('.list_check_price input[type="checkbox"]');
  
  // Lắng nghe sự kiện "change" trên các checkbox lọc giá
  priceCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      handlePriceFilter();
      updateSortText('Mặc định');
    });
  });
  
  // Lấy thẻ "mặc định"
  const defaultSortItem = document.querySelector('.list_status_sort li:first-child');
  
  // Gắn sự kiện "click" cho thẻ "mặc định"
  defaultSortItem.addEventListener('click', function() {
    resetSort();
    handlePriceFilter();
    updateSortText(defaultSortItem.textContent.trim());
  });
  
  // Lấy thẻ "sắp xếp tăng dần"
  const ascendingSortItem = document.querySelector('.list_status_sort li:nth-child(2)');
  
  // Gắn sự kiện "click" cho thẻ "sắp xếp tăng dần"
  ascendingSortItem.addEventListener('click', function() {
    sortProducts('asc');
    updateSortText(ascendingSortItem.textContent.trim());
  });
  
  // Lấy thẻ "sắp xếp giảm dần"
  const descendingSortItem = document.querySelector('.list_status_sort li:nth-child(3)');
  
  // Gắn sự kiện "click" cho thẻ "sắp xếp giảm dần"
  descendingSortItem.addEventListener('click', function() {
    sortProducts('desc');
    updateSortText(descendingSortItem.textContent.trim());
  });
  
  // Lấy danh sách sản phẩm ban đầu
  const productList = document.querySelector('.products');
  const initialProducts = Array.from(productList.querySelectorAll('.wrapper_product'));
  
  // Mảng lưu trữ danh sách sản phẩm được lọc hiện tại
  let filteredProducts = [];
  
  // Hàm xử lý lọc sản phẩm theo giá
  function handlePriceFilter() {
    // Lấy mức giá được chọn
    const selectedPrice = Array.from(priceCheckboxes)
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.nextElementSibling.textContent.trim();
      });
  
    // Kiểm tra nếu không có checkbox nào được chọn thì hiển thị tất cả sản phẩm
    if (selectedPrice.length === 0) {
      filteredProducts = initialProducts;
    } else {
      // Lọc sản phẩm dựa trên mức giá được chọn
      filteredProducts = initialProducts.filter(function(product) {
        const price = parseInt(product.querySelector('.text_content1 p').textContent.replace('.', '').replace('đ', ''));
  
        return selectedPrice.some(function(priceRange) {
          if (priceRange === 'Giá dưới 100.000đ' && price < 100000) {
            return true;
          } else if (priceRange === '100.000đ - 200.000đ' && price >= 100000 && price <= 200000) {
            return true;
          } else if (priceRange === '200.000đ - 500.000đ' && price > 200000 && price <= 500000) {
            return true;
          } else if (priceRange === 'Giá trên 500.000đ' && price > 500000) {
            return true;
          }
          return false;
        });
      });
    }
  
    // Hiển thị các sản phẩm tương ứng
    displayFilteredProducts(filteredProducts);
  }
  
  // Hàm hiển thị các sản phẩm tương ứng
  function displayFilteredProducts(products) {
    // Xóa các sản phẩm hiện tại
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }
  
    // Hiển thị các sản phẩm đã lọc
    products.forEach(function(product) {
      productList.appendChild(product);
    });
  }
  
  // Hàm reset thứ tự sản phẩm về mặc định
  function resetSort() {
    // Xóa các sản phẩm hiện tại
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }
  
    // Thêm lại các sản phẩm ban đầu vào danh sách
    initialProducts.forEach(function(product) {
      productList.appendChild(product);
    });
  }
  
  // Hàm sắp xếp sản phẩm
  function sortProducts(sortType) {
    // Lấy danh sách sản phẩm hiện tại
    const currentProducts = Array.from(productList.querySelectorAll('.wrapper_product'));
  
    // Sắp xếp mảng sản phẩm
    const sortedProducts = currentProducts.sort(function(a, b) {
      const priceA = parseInt(a.querySelector('.text_content1 p').textContent.replace('.', '').replace('đ', ''));
      const priceB = parseInt(b.querySelector('.text_content1 p').textContent.replace('.', '').replace('đ', ''));
      return priceA - priceB;
    });
  
    // Kiểm tra nếu sắp xếp giảm dần thì đảo ngược danh sách sản phẩm
    if (sortType === 'desc') {
      sortedProducts.reverse();
    }
  
    // Hiển thị sản phẩm theo thứ tự đã sắp xếp
    displayFilteredProducts(sortedProducts);
  }
  
  // Hàm cập nhật text trong class edit_text
  function updateSortText(text) {
    const editText = document.querySelector('.edit_text span');
    editText.textContent = text;
  }
  
  // Khởi động mặc định
  resetSort();
  handlePriceFilter();
});


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



//js cho event flash sale timer
// Đặt ngày đích mà bạn muốn đếm ngược đến
var targetDate = new Date("2023-08-30T00:00:00Z");

// Lấy các phần tử div cho ngày, giờ, phút và giây
var daysElements = document.querySelectorAll(".box_days span");
var hoursElements = document.querySelectorAll(".box_hours span");
var minsElements = document.querySelectorAll(".box_mins span");
var secsElements = document.querySelectorAll(".box_secs span");

// Gán sự kiện updateCountdown cho từng phần tử
for (var i = 0; i < daysElements.length; i++) {
    var daysElement = daysElements[i];
    var hoursElement = hoursElements[i];
    var minsElement = minsElements[i];
    var secsElement = secsElements[i];

    setInterval(updateCountdown, 1000, daysElement, hoursElement, minsElement, secsElement);
}

function updateCountdown(daysElement, hoursElement, minsElement, secsElement) {
    // Lấy thời gian hiện tại
    var currentDate = new Date();

    // Tính toán số giây còn lại
    var totalSeconds = Math.floor((targetDate - currentDate) / 1000);

    // Tính toán số ngày, giờ, phút và giây còn lại
    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var mins = Math.floor((totalSeconds % 3600) / 60);
    var secs = Math.floor(totalSeconds % 60);

    // Hiển thị số ngày, giờ, phút và giây trên giao diện
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minsElement.textContent = formatTime(mins);
    secsElement.textContent = formatTime(secs);
}

function formatTime(time) {
    // Định dạng thời gian thành chuỗi hai chữ số (vd: 05)
    return time < 10 ? "0" + time : time;
}

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

document.addEventListener('DOMContentLoaded', function(){
  let cartIcon = document.querySelector(".cart");
  let wrappercart = document.querySelector(".wrapper_cart");
  let closeCart = document.querySelector("#close-cart");
  let cartZone = document.querySelector(".cart_zone"); // Thêm khai báo cho cartZone
  var cartItems = [];
  
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

const addToCartButtons = document.querySelectorAll(".btn_rightnow");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addCartClicked);
  });
})

