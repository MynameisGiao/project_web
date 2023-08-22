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

const forms=document.querySelector(".forms"),
      pwShowHide=document.querySelectorAll(".eye-icon"),
      links=document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})
