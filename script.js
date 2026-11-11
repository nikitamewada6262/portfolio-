const root=document.documentElement, theme=document.getElementById('theme'), menu=document.getElementById('menu'), links=document.getElementById('links'), progress=document.getElementById('progress');
const saved=localStorage.getItem('theme'); if(saved) root.dataset.theme=saved;
function updateTheme(){theme.textContent=root.dataset.theme==='dark'?'☀':'☾'} updateTheme();
theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);updateTheme()});
menu.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%'});
