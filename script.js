const links = [
  "https://fausto-la-1592.github.io/trelewciudad1/",
  "https://fausto-la-1592.github.io/trelewciudad2/",
  "https://fausto-la-1592.github.io/trelewciudad3/",
];

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach((tarjeta, index) => {
  if (links[index]) {
    tarjeta.addEventListener("click", () => {
      window.location.href = links[index];
    });
  }
});