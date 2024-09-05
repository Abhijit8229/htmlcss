const list = document.querySelectorAll('.nav_link');
list.forEach(item => item.addEventListener('click', (e)=>{
    list.forEach(item => item.classList.remove('active'));
    e.target.classList = 'active'  
}))