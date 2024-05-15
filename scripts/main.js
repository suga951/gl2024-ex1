window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.querySelector(".side-menu-container");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  document.querySelector(".champ-title").onmouseover = (event) => {
    let iterations = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= event.target.dataset.value.length)
        clearInterval(interval);
      iterations += 1 / 2;
    }, 30);
  };

  const openMenu = () => {
    sideMenu.classList.toggle("side-menu-container-closed");
  };

  menuBtn.addEventListener("click", openMenu);
});
