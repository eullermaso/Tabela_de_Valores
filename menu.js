
window.addEventListener('scroll', ()=>{
    let header = document.querySelector('#header')

    header.classList.toggle('rolagem',window.scrollY > 0)
})