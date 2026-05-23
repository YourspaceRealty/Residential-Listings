const leadForm = document.querySelector("#leadForm");
const formStatus = document.querySelector("#formStatus");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.dataset.alt;
    lightbox.showModal();
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.close();
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const name = formData.get("name")?.toString().trim() || "there";

  formStatus.textContent = `Thanks, ${name}. This form is ready to connect to your email, CRM, or scheduling tool.`;
  leadForm.reset();
});
