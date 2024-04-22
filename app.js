const scriptURL = 'https://script.google.com/macros/s/AKfycbwE5KRFGwTTMqF1B8tDUGuxycFMBqjF4XrX5XFqgC7VZAOjcY25zUTVuS_gsJ56rcU/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

document.addEventListener('scroll', function() {
    const header = document.querySelector('.header-background');
    const scrollPosition = window.pageYOffset;
    const opacityLevel = Math.min(0.8, scrollPosition / 500); // Adjust the 500 to control the fade speed
    header.style.backgroundColor = `rgba(0, 0, 0, ${opacityLevel})`;
});
