 document.getElementById('typed-text').textContent = ' Full-Stack Developer | AI & DS Enthusiast ';
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
        backToTop.classList.toggle('show', window.scrollY > 400);
    });
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navCollapse = document.getElementById('navbarNav');
            if (navCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navCollapse).hide();
            }
        });
    });