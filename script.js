const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation-principale");

header.classList.add("has-js");
menuToggle.hidden = false;

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeNavigation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeNavigation();
    menuToggle.focus();
  }
});

const registrationForm = document.querySelector("#registration-form");
const registrationFeedback = document.querySelector("#registration-feedback");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);
  const name = formData.get("name").toString().trim();
  const selectedEvent = formData.get("event").toString();

  registrationFeedback.textContent = `Merci ${name}, ta préinscription pour « ${selectedEvent} » est confirmée. Aucune donnée n'a été envoyée ou enregistrée.`;
  registrationFeedback.classList.add("is-visible");
  registrationForm.reset();
});
