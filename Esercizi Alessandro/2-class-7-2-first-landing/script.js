// Seleziono l'elemento HTML
const nav = document.querySelector("nav");

// Aggiungo un event listenr sullo scroll della pagina
document.addEventListener("scroll", () => {
  console.log(window.scrollY);

  // Se la scroll Y è uguale a 0 aggiungi la classe transparent
  if (window.scrollY == 0) {
    nav.classList.add("bg-transparent")
  } else {
    // Se sono in un punto diverso da 0 rimuovi la classe
    nav.classList.remove("bg-transparent")
  }
})