function toggleNav() {
  const navUl = document.getElementById('nav-link');
  const mainId = document.getElementById('main-logo');
  const navrev = document.getElementById('reversed');
  const closeHum = document.getElementById('close-hum');
  navUl.classList.toggle('show');
  mainId.classList.toggle('hide');
  navrev.classList.toggle('reversed');
  closeHum.classList.toggle('hide');
}
toggleNav();