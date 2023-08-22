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

// Lấy tham chiếu đến phần tử loading
const loadingElement = document.getElementById('loading');

// Hàm để xóa hiệu ứng loading
function removeLoading() {
  loadingElement.remove();
}

// Gọi hàm xóa loading sau 3 giây
setTimeout(removeLoading, 2000);

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