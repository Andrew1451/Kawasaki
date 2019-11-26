const hamburgerButton = document.getElementById('hamburger');

hamburgerButton.onclick = () => {
    document.querySelectorAll('.mobile-nav').forEach(el => {
        el.classList.toggle('open');
    });
}