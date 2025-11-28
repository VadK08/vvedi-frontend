const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-fade, .scroll-up')
    .forEach(el => observer.observe(el));
