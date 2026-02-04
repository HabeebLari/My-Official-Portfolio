document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const closeMenu = document.getElementById("closeMenu");
  const menuBackdrop = document.getElementById("menuBackdrop");

  function openMenu() {
    navLinks.classList.add("open");
    menuBackdrop.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeMenuFn() {
    navLinks.classList.remove("open");
    menuBackdrop.classList.remove("show");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMenuFn);
  menuBackdrop.addEventListener("click", closeMenuFn);

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", closeMenuFn);
  });

});
