document.getElementById('navbar-toggler').addEventListener('click', function () {
    var navCollapse = document.getElementById('navbarSupportedContent');
    if (navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
    } else {
        navCollapse.classList.add('show');
    }
});