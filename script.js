window.addEventListener('load', function() {
    const sectionContents = document.querySelectorAll('.fade-in');
    sectionContents.forEach(content => {
            content.classList.add('visible');
    });
});

window.addEventListener('load', function() {
    const sectionContents = document.querySelectorAll('.fade-in-slow');
    sectionContents.forEach(content => {
            content.classList.add('visible');
    });
});


window.addEventListener('scroll', function() {
    const sectionContents = document.querySelectorAll('.section-content');
    sectionContents.forEach(content => {
        if (content.getBoundingClientRect().top < window.innerHeight / 1.5) {
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
        }
    });
});

