document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Modal zoom for images
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");

  if (!modal || !modalImg || !modalClose) {
    console.error("Modal elements missing. Check IDs in index.html");
    return;
  }

  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalCaption.textContent = img.dataset.caption || img.alt;
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
