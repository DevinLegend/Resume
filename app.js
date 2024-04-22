document.addEventListener('scroll', function() {
    const header = document.querySelector('.header-background');
    const scrollPosition = window.pageYOffset;
    const opacityLevel = Math.min(0.8, scrollPosition / 500); // Adjust the 500 to control the fade speed
    header.style.backgroundColor = `rgba(0, 0, 0, ${opacityLevel})`;
});
