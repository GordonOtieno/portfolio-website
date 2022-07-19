function toggleNav(){
    const navUl=document.getElementById('nav-link');
    const mainId=document.getElementById('main-logo');
    const navrev=document.getElementById('reversed');
    const close_hum=document.getElementById('close-hum');
    navUl.classList.toggle('show');
    mainId.classList.toggle('hide');
    navrev.classList.toggle('reversed');
    close_hum.classList.toggle('hide');

}