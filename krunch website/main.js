// let menuBtn = document.querySelector(".bar");
// let menu = document.querySelector(".nav_sidebar");
// let menuStatus  = false;
// function menuToggle (){
//     if(menuStatus == false){
//         menu.style.visibility = "visible";
//         menuStatus = true;
//     } else if(menuStatus == true){
//         menu.style.visibility = "hidden";
//         menuStatus = false;
//     }
// }
//Toggle menu------------------
let toggleNavStatus = false;

let menuToggle = function(){
let getBarContainer = document.querySelector(".bar_container");
let getSidebar = document.querySelector(".nav_sidebar");
let getSidebarUl = document.querySelector(".nav_sidebar ul");
let getSidebarLinks = document.querySelectorAll(".nav_sidebar a");
    if(toggleNavStatus == false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.visibility = "visible";
        getSidebar.style.opacity = "1";
        getBarContainer.style.opacity = "1";
        let arrayLength = getSidebarLinks.length;
            for (let i = 0; i < arrayLength; i++){
                getSidebarLinks[i].style.opacity = "1";     
            }
            toggleNavStatus = true;
        }
    else if(toggleNavStatus == true){
        getSidebar.style.visibility = "hidden";
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.opacity = "0";
        getBarContainer.style.opacity = "0";
        let arrayLength = getSidebarLinks.length;
            for (let i = 0; i < arrayLength; i++){
                getSidebarLinks[i].style.opacity = "0";     
            }
        toggleNavStatus = false;
    }

}
            

//testimonies slide-----------------
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("slide-active", "");
              }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " slide-active";
          }


