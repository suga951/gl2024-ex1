window.addEventListener("DOMContentLoaded", () => {
      
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector("#menu");
  const champions = document.querySelector(".champion-container")


  const openMenu = () => {
    sideMenu.classList.toggle('side-menu-open');
  }

  menuBtn.addEventListener('click', openMenu);

});