if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', (event) => {
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('section');

        window.onscroll = () => {
            let index = sections.length;

            while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

            navLinks.forEach((link) => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        };
    });
}