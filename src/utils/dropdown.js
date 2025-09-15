export default function dropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((drop) => {
    const button = drop.querySelector(".dropdown-btn");
    const content = drop.querySelector(".dropdown-content");

    button.addEventListener("click", () => {
      content.classList.toggle("visible");
    });
  });
}
