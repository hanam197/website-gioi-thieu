document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tour-content__contact-now-btn')
    .addEventListener('click', function () {
        document.querySelector('.contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});