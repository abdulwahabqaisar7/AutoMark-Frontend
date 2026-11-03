const searchForm = document.querySelector("#car-search");
const cards = [...document.querySelectorAll(".vehicle-card")];
const categoryFilters = [...document.querySelectorAll(".category-filter")];
const inventoryStatus = document.querySelector("#inventory-status");
let activeCategory = "all";

function updateInventory() {
  const formData = new FormData(searchForm);
  const city = String(formData.get("city") || "");
  const brand = String(formData.get("brand") || "");
  const budget = Number(formData.get("budget") || 0);
  let visibleCount = 0;

  for (const card of cards) {
    const matches =
      (activeCategory === "all" || card.dataset.category === activeCategory) &&
      (!city || card.dataset.city === city) &&
      (!brand || card.dataset.brand === brand) &&
      (!budget || Number(card.dataset.price) <= budget);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  inventoryStatus.textContent = visibleCount
    ? `${visibleCount} car${visibleCount === 1 ? "" : "s"} found`
    : "No cars match those filters. Try changing your search.";
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateInventory();
  document.querySelector("#featured-cars").scrollIntoView({ behavior: "smooth" });
});

for (const filter of categoryFilters) {
  filter.addEventListener("click", () => {
    activeCategory = filter.dataset.category;
    for (const option of categoryFilters) {
      const selected = option === filter;
      option.classList.toggle("is-selected", selected);
      option.setAttribute("aria-pressed", String(selected));
    }
    updateInventory();
  });
}

for (const button of document.querySelectorAll(".save-car")) {
  button.addEventListener("click", () => {
    const saved = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute("aria-label", `${saved ? "Unsave" : "Save"} ${button.closest(".vehicle-card").querySelector("h3").textContent}`);
  });
}

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#contact-status").textContent =
    "This page is a front-end prototype. Connect the form to your contact service to send this message.";
});
