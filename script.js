document.addEventListener('DOMContentLoaded', function() {
    const b = document.getElementById('burger');
    const n = document.getElementById('menu');
    
    b.addEventListener('click', function() {
        n.classList.toggle('n__a');
    });
});
const form = document.getElementById('form');
if (form){
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const ename = document.getElementById('name').value
        const email = document.getElementById('email').value

        localStorage.setItem('name', ename)
        localStorage.setItem('email', email)
        form.style.display = 'none'
        alert('Введено успешно')
    })
}
const textarea = document.querySelector('textarea');
if (textarea){

    textarea.addEventListener('input', () => {
        localStorage.setItem('review', textarea.value);
    });

    window.addEventListener('DOMContentLoaded', () => {
        textarea.value = localStorage.getItem('review') || '';
    });
}

function gr() {
  const sname = localStorage.getItem('name')
    alert('Добро пожаловать '+ sname)
}
ScrollReveal().reveal('h1, h2, .img, .block, .table, .block__f, .block__1, .block__2, .block__3, .block__4, audio, video, block p, block ul', {
    origin: 'bottom',
    duration: 800,
    delay: 200,
});