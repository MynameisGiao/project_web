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


// Lấy tham chiếu đến mini_icon và mini_menu
const miniIcon = document.querySelector('.mini_icon');
const miniMenu = document.getElementById('mini_menu');

// Thêm sự kiện click vào mini_icon
miniIcon.addEventListener('click', (event) => {
    // Ngăn sự kiện click lan ra các phần tử cha
    event.stopPropagation();

    // Kiểm tra trạng thái của mini_menu
    const isMenuHidden = miniMenu.style.display === 'none' || miniMenu.style.display === '';
    
    // Nếu mini_menu đang ẩn, hiển thị nó
    if (isMenuHidden) {
        miniMenu.style.display = 'block';
    } else {
        // Ngược lại, ẩn mini_menu
        miniMenu.style.display = 'none';
    }
});

// Thêm sự kiện click vào document để ẩn mini_menu khi click bất kỳ nơi nào trên trang
document.addEventListener('click', (event) => {
    // Kiểm tra nếu sự kiện click xảy ra ngoài khối mini_menu thì ẩn nó
    if (!miniMenu.contains(event.target)) {
        miniMenu.style.display = 'none';
    }
});
