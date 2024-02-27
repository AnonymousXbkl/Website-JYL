const searchForm = document.querySelector ('.search-form');
const searchButton = document.getElementById ('search-button');
const searchBox = document.querySelector ('.input-search');
const navLink = document.querySelector ('.nav-link')
    searchButton.addEventListener ('click', function (e) {
        searchForm.classList.toggle ('active');
        searchBox.focus ();
        e.preventDefault ();
    document.addEventListener ('click', function (e) {
        if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
            searchForm.classList.remove ('active');
        };
    });
    });


const btnNavbar = document.querySelector ('.navbar-toggler');
    btnNavbar.addEventListener ('click', function(e) {
        searchButton.remove ();
        searchForm.classList.toggle ('active');
    });






