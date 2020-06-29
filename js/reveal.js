window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 3500,
    origin: 'bottom'
})

sr.reveal('.carousel', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
})

sr.reveal('.content', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
})


// SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
    });