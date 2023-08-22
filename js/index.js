// Lấy tham chiếu đến phần tử loading
const loadingElement = document.getElementById('loading');

// Hàm để xóa hiệu ứng loading
function removeLoading() {
  loadingElement.remove();
}

// Gọi hàm xóa loading sau 3 giây
setTimeout(removeLoading, 2000);

//điều chỉnh icon trên menu navbar nhanh
document.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu_qc');
  var pseudo = document.querySelector('.quick_choices');
  var icon_menu = document.querySelector('.menu_qc i');

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
