const searchForm = document.querySelector ('.search-form');
const searchButton = document.getElementById ('search-button');
const searchBox = document.querySelector ('.input-search');
const navLink = document.querySelector ('.nav-link')
    searchButton.addEventListener ('click', function (e) {
        searchForm.classList.toggle ('active');
        e.preventDefault ();
    document.addEventListener ('click', function (e) {
        if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
            searchForm.classList.remove ('active');
        }
    })
    })






