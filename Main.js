document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const button = document.getElementById("change-color-btn");

  // Fonction pour générer une couleur hexadécimale aléatoire
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Changer la couleur du box au clic
  button.addEventListener("click", function () {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});