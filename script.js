// navegación — completar con los links a cada herramienta
const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach((tarjeta, index) => {
  tarjeta.addEventListener("click", () => {
    // ejemplo: window.location.href = `herramienta-${index + 1}/index.html`;
    console.log(`Tarjeta ${index + 1} clickeada`);
  });
});
