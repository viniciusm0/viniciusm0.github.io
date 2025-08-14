const imgHeader = document.getElementById('img-logo');
const toggleTheme = document.getElementById('toggleTheme');
const toggleMenu = document.getElementById('toggleMenu');
const menuOverflow = document.getElementById('menuOverflow')
const rootHtml = document.documentElement;

function changeTheme (){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme == "dark") {
         rootHtml.setAttribute("data-theme", "light");
        imgHeader.setAttribute("src", "assets/img/logo-light.png");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
        imgHeader.setAttribute("src", "assets/img/logo-dark.png");
    } 
        
    toggleTheme.classList.toggle("bi-brightness-high-fill");
    toggleTheme.classList.toggle("bi-moon-stars-fill");
}

function openMenu () {
    if(menuOverflow.classList.contains("menu__hidden")) {
        menuOverflow.classList.remove("menu__hidden");
        menuOverflow.classList.add("menu__active");
    } else {
        menuOverflow.classList.remove("menu__active");
        menuOverflow.classList.add("menu__hidden");
    }
    document.addEventListener('click' , closeMenuOnClickOutside)
}

function closeMenuOnClickOutside(event) {
    if (!event.target.closest('.container-header')) {
        menuOverflow.classList.add("menu__hidden");
        menuOverflow.classList.remove("menu__active");
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

toggleMenu.addEventListener("click", openMenu);
toggleTheme.addEventListener("click", changeTheme);