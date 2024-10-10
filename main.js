const menuBtn = document.getElementById('hamburger');
const menuLinks = document.getElementById('menuLinks');
const links = menuLinks.querySelectorAll('a');


// MOBILE NAV
menuBtn.addEventListener('click', function(){
    if (menuLinks.style.display === 'flex') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'flex';
    }
});


links.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.style.display = 'none';
    });
});


// HIGHLIGHT WHEN CLICKED
const deskLinks = document.querySelectorAll('.desktop-nav a');
const logoLink = document.querySelector('.logo-link');

deskLinks.forEach(link => {
    link.addEventListener('click', function() {
        deskLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

logoLink.addEventListener('click', function() {
    deskLinks.forEach(l => l.classList.remove('active'));
    
    deskLinks[0].classList.add('active');
});
