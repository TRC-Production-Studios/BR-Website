const trains = [
  {
    name: "Class 142",
    type: "DMU",
    variants: {
      "Pacer": {
        cars: 2,
        speed: 75,
        acceleration: 0.4,
        braking: 0.3,
        image: "train142.png",
        category: "regional"
      },
      "Pacer Refurbished": {
        cars: 2,
        speed: 78,
        acceleration: 0.45,
        braking: 0.32,
        image: "train142_refurbished.png",
        category: "regional"
      }
    }
  },
  {
    name: "Class 755",
    type: "BMU",
    variants: {
      "Regional": {
        cars: 3,
        speed: 100,
        acceleration: 0.5,
        braking: 0.35,
        image: "train755.png",
        category: "intercity"
      },
      "Express": {
        cars: 4,
        speed: 110,
        acceleration: 0.55,
        braking: 0.4,
        image: "train755_express.png",
        category: "shuttle"
      }
    }
  }
];

const trainList = document.getElementById("train-list");
const mainView = document.getElementById("main-view");
const variantList = document.getElementById("variant-list");
const rightPanel = document.getElementById("right-panel");
const defaultText = document.getElementById("default-text");

let activeTrainItem = null;

trains.forEach((train) => {
  const item = document.createElement("div");
  item.className = "train-item";
  item.innerHTML = `<span>${train.name}</span><span class="tag">${train.type}</span>`;

  item.addEventListener("click", () => {
    if (activeTrainItem) {
      activeTrainItem.classList.remove("active");
    }
    item.classList.add("active");
    activeTrainItem = item;

    variantList.innerHTML = "<h4>Varianten:</h4>";
    Object.keys(train.variants).forEach(variantName => {
      const variant = train.variants[variantName];
      const btn = document.createElement("button");
      btn.textContent = variantName;
      btn.classList.add(variant.category);
      btn.onclick = () => showTrain(train, variantName);
      variantList.appendChild(btn);
    });

    rightPanel.classList.remove("slide-out");
    rightPanel.classList.add("slide-in");

    mainView.innerHTML = '<p id="default-text">Consist is empty - add units to see consist preview here</p>';
  });

  trainList.appendChild(item);
});

function showTrain(train, variantName) {
  const variant = train.variants[variantName];

  document.body.classList.remove("theme-regional", "theme-intercity", "theme-shuttle");
  document.body.classList.add(`theme-${variant.category}`);

  rightPanel.classList.remove("slide-in");
  rightPanel.classList.add("slide-out");

  const oldCard = document.querySelector(".stats-card");
  if (oldCard) {
    oldCard.classList.add("hide");
  }

  setTimeout(() => {
    mainView.innerHTML = "";
    const card = document.createElement("div");
    card.style.position = "absolute";
    card.style.top = "20px";
    card.style.left = "20px";
    card.innerHTML = `
          <div class="stats-card">
            <p><strong>Typ:</strong> ${train.type}</p>
            <p><strong>Variante:</strong> ${variantName}</p>
            <p><strong>Wagen:</strong> ${variant.cars}</p>
            <p><strong>Höchstgeschwindigkeit:</strong> ${variant.speed} mph</p>
            <p><strong>Beschleunigung:</strong> ${variant.acceleration} m/s²</p>
            <p><strong>Bremskraft:</strong> ${variant.braking} m/s²</p>
          </div>
          <img src="${variant.image}" alt="${train.name}" class="train-image">
          <h2>${train.name} - ${variantName}</h2>
        `;
    mainView.appendChild(card);
  }, 500);
}
