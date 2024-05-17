document.addEventListener("DOMContentLoaded", () => {
  const skinContainer = document.querySelector(".skins-container");
  const firstSkin = document.getElementById("skin-1");
  const secondSkin = document.getElementById("skin-2");
  const thirdSkin = document.getElementById("skin-3");
  const fourthSkin = document.getElementById("skin-4");
  const fifthSkin = document.getElementById("skin-5");
  const sixthSkin = document.getElementById("skin-6");

  const changeSkin = (num) => {
    let selectedSkin = `../assets/img/zac_${num}.webp`;
    skinContainer.style.backgroundImage = `url("${selectedSkin}")`;
  };
  const checkIfViewed = (num) => {
    localStorage.setItem(`viewedSkin-${num}`, "true");
  };

  firstSkin.addEventListener("click", () => {
    changeSkin(1);
    checkIfViewed(1);
  });
  secondSkin.addEventListener("click", () => {
    changeSkin(2);
    checkIfViewed(2);
  });
  thirdSkin.addEventListener("click", () => {
    changeSkin(3);
    checkIfViewed(3);
  });
  fourthSkin.addEventListener("click", () => {
    changeSkin(4);
    checkIfViewed(4);
  });
  fifthSkin.addEventListener("click", () => {
    changeSkin(5);
    checkIfViewed(5);
  });
  sixthSkin.addEventListener("click", () => {
    changeSkin(6);
    checkIfViewed(6);
  });
});
