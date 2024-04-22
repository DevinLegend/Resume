let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener('scroll', function() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            const header = document.querySelector('.header-background');
            const opacityLevel = Math.min(0.8, lastKnownScrollPosition / 500);
            header.style.backgroundColor = `rgba(0, 0, 0, ${opacityLevel})`;
            ticking = false;
        });

        ticking = true;
    }
});
