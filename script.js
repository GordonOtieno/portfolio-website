function toggleNav(){
    const navUl=document.getElementById('nav-link');
    const header=document.getElementById('head');
    const mainId=document.getElementById('main-logo');
    const navrev=document.getElementById('reversed');
    const close_hum=document.getElementById('close-hum');
    navUl.classList.toggle('show');
    mainId.classList.toggle('hide');
    navrev.classList.toggle('reversed');
    close_hum.classList.toggle('hide');
    header.classList.toggle('resize');
}
function reset(){
    const navUl=document.getElementById('nav-link');
    const header=document.getElementById('head');
    const mainId=document.getElementById('main-logo');
    const navrev=document.getElementById('reversed');
    const close_hum=document.getElementById('close-hum');
    navUl.classList.remove('show');
    mainId.classList.remove('hide');
    navrev.classList.remove('reversed');
    close_hum.classList.remove('hide');
    header.classList.remove('resize');
}
toggleNav();
reset();
