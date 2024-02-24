window.addEventListener ('scroll', function () {
    const navbar = document.querySelector ('.navbar')
        if (window.pageYOffset >= 150) {
            navbar.classList.add ('warna')
        } else {
            navbar.classList.remove ('warna')
        }
})