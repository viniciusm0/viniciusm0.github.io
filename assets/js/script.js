const imgHeader = document.getElementById('img-logo');
const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;
function changeTheme (){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme == "dark") {
         rootHtml.setAttribute("data-theme", "light"), 
        imgHeader.setAttribute("src", "assets/img/logo-light.png");
    } else {
        rootHtml.setAttribute("data-theme", "dark"), 
        imgHeader.setAttribute("src", "assets/img/logo-dark.png")
    } 
        
    toggleTheme.classList.toggle("bi-brightness-high-fill");
    toggleTheme.classList.toggle("bi-moon-stars-fill");
}

toggleTheme.addEventListener("click", changeTheme);