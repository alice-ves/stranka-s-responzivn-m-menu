const menuIcon = document.querySelector(".menu-icon");
const menuNav = document.querySelector("nav");

const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-burger") {
    menuNav.style.display = "block";
    hamburgerIcon.classList.add("fa-circle-xmark");
    hamburgerIcon.classList.remove("fa-burger");
  } else {
    menuNav.style.display = "none";
    hamburgerIcon.classList.add("fa-burger");
    hamburgerIcon.classList.remove("fa-circle-xmark");
  }
});

//fa - burger;
//fa - circle - xmark;
