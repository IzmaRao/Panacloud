const toggleButton = document.getElementById('navbaricon') as HTMLInputElement;
const navbarSection = document.querySelector('.navbar-menu') as HTMLInputElement;

toggleButton.addEventListener('click', () => {
  if (navbarSection.style.display === 'none') {
    navbarSection.style.display = 'block';
  } else {
    navbarSection.style.display = 'none';
  }
});





