const togglebtn=document.querySelector('.bar');
const togglebtnicon=document.querySelector('.bar i');
const dropmenu=document.querySelector('.dropmenu');
togglebtn.onclick=function(){
    dropmenu.classList.toggle('open')
    const isopen=dropmenu.classList.contains('open')
    togglebtnicon.classList=isopen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'

}

