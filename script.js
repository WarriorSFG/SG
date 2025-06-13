document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Full Stack Developer', 'UI/UX Designer', 'Photo & Video Editor', 'Animator', 'Game Developer', 'Youtuber'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });

    // Fade-in About
    const aboutSection = document.querySelector(".about");
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        }, { threshold: 0.5 });

        aboutObserver.observe(aboutSection);
    }

    // Timeline line animation on scroll
    const timeline = document.querySelector('.timeline');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const timelineTop = timeline.offsetTop;
        const windowBottom = scrollTop + window.innerHeight;
        const visibleHeight = Math.max(0, windowBottom - timelineTop);
        const maxHeight = timeline.offsetHeight;
        const percentage = Math.min(visibleHeight / maxHeight, 1);
        timeline.style.setProperty('--line-height', `${percentage * 100}%`);
    });

    // Project cards fade-in
    const projectContainers = document.querySelectorAll('.Project-container');
    const projectObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    projectContainers.forEach(container => {
        projectObserver.observe(container);
    });
});

document.addEventListener('mousemove', e => {
    const x = e.clientX + 'px';
    const y = e.clientY + 'px';
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
});

document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.width = ripple.style.height = '20px'; // base size

    document.body.appendChild(ripple);

    // Remove after animation ends
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});