//menu responsive

const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('nav-bar');

toggleButton.addEventListener('click', show);

function show() {
    navbar.classList.toggle('active');
}

