const btnMobile = document.querySelector('.mobileBtn')


btnMobile.addEventListener('click', ()=>{
    const navMenu = document.querySelector('.navMenu')
    navMenu.classList.toggle('active')
})