var toggleButton = document.getElementById('navbaricon');
var navbarSection = document.querySelector('.navbar-menu');
toggleButton.addEventListener('click', function () {
    if (navbarSection.style.display === 'none') {
        navbarSection.style.display = 'block';
    }
    else {
        navbarSection.style.display = 'none';
    }
});
