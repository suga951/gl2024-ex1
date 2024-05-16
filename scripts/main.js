window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu-container");

  const openMenu = () => {
    sideMenu.classList.toggle("side-menu-container-closed");
  };

  menuBtn.addEventListener("click", openMenu);
});
