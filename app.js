const menu = document.getElementById('menu');
const menuBtn = document.getElementById('toggle-menu');


menuBtn.addEventListener('click' , (e) => {
   menu.classList.toggle('hidden');
   e.preventDefault();
})