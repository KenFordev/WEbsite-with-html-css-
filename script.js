let hambergermenu = document.querySelector('.hamberger__menu')

hambergermenu.addEventListener("click", function(){
    hambergermenu.classList.toggle("change");
    let navRightOpen = document.querySelector('.nav-right')
    navRightOpen.classList.toggle("open__nav")
})


