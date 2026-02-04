document.addEventListener("DOMContentLoaded", () => {
  // Mobile slider menu
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

  if (hamburger) hamburger.addEventListener("click", openMenu);
  if (closeMenu) closeMenu.addEventListener("click", closeMenuFn);
  if (menuBackdrop) menuBackdrop.addEventListener("click", closeMenuFn);

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", closeMenuFn);
  });

  // Image modal for certificates
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");

  if (modal && modalImg && modalClose) {
    document.querySelectorAll(".zoomable").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalCaption.textContent = img.dataset.caption || img.alt;
      });
    });

    modalClose.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
});
