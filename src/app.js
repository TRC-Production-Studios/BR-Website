const trains = [
  {
    name: "Class 142",
    type: "DMU",
    variants: {
      Pacer: {
        cars: 2,
        speed: 75,
        acceleration: 0.4,
        braking: 0.3,
        image: "train142.png",
        category: "regional",
      },
      "Pacer Refurbished": {
        cars: 2,
        speed: 78,
        acceleration: 0.45,
        braking: 0.32,
        image: "train142_refurbished.png",
        category: "regional",
      },
    },
  },
  {
    name: "Class 755",
    type: "BMU",
    variants: {
      Regional: {
        cars: 3,
        speed: 100,
        acceleration: 0.5,
        braking: 0.35,
        image: "train755.png",
        category: "intercity",
      },
      Express: {
        cars: 4,
        speed: 110,
        acceleration: 0.55,
        braking: 0.4,
        image: "train755_express.png",
        category: "shuttle",
      },
    },
  },
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
    Object.keys(train.variants).forEach((variantName) => {
      const variant = train.variants[variantName];
      const btn = document.createElement("button");
      btn.textContent = variantName;
      btn.classList.add(variant.category);
      btn.onclick = () => showTrain(train, variantName);
      variantList.appendChild(btn);
    });

    rightPanel.classList.remove("slide-out");
    rightPanel.classList.add("slide-in");

    // When selecting a new train type, hide current displayed info
    // This allows the background to smoothly transition before new content appears.
    const currentContent = mainView.querySelector(".train-info-container");
    if (currentContent) {
      currentContent.classList.add("fade-out-content");
      // Remove content after its animation completes (e.g., 0.5s for fade-out)
      setTimeout(() => {
        currentContent.remove();
        defaultText.style.display = "block"; // Show default text if no variant is selected yet
      }, 500); // Match this to your fade-out-content transition/animation duration
    } else {
      defaultText.style.display = "block"; // Ensure default text is visible if no content
    }
  });

  trainList.appendChild(item);
});

function showTrain(train, variantName) {
  const variant = train.variants[variantName];

  // 1. Theme Change (This should now transition smoothly)
  document.body.classList.remove(
    "theme-regional",
    "theme-intercity",
    "theme-shuttle"
  );
  // Force reflow *before* adding the new class. This ensures the browser
  // renders the "from" state of the background transition.
  void document.body.offsetWidth;
  document.body.classList.add(`theme-${variant.category}`);

  // 2. Slide out right panel
  rightPanel.classList.remove("slide-in");
  rightPanel.classList.add("slide-out");

  // 3. Handle existing content in main view
  const oldContent = mainView.querySelector(".train-info-container");
  const defaultText = document.getElementById("default-text"); // Re-get defaultText

  if (defaultText) {
    defaultText.style.display = "none"; // Hide default text immediately
  }

  // Animation duration for content transition (e.g., 0.5s for fadeOut)
  const contentTransitionDuration = 500; // ms

  // Function to create and add the new content
  const addNewContent = () => {
    // Clear any lingering default text if it was hidden
    if (defaultText) {
      defaultText.style.display = "none";
    }

    // Create a container for the new train info to animate it
    const trainInfoContainer = document.createElement("div");
    trainInfoContainer.className = "train-info-container";
    trainInfoContainer.style.position = "relative"; // Ensure inner absolute positioning works
    trainInfoContainer.style.opacity = 0; // Start invisible for fadeIn
    trainInfoContainer.style.transform = "translateY(20px)"; // Start slightly below for slideUp

    // Use string template literals for cleaner HTML generation
    trainInfoContainer.innerHTML = `
      <img src="${variant.image}" alt="${train.name}" class="train-image">
      <h2>${train.name} - ${variantName}</h2>
      <div class="stats-card">
        <p><strong>Typ:</strong> ${train.type}</p>
        <p><strong>Variante:</strong> ${variantName}</p>
        <p><strong>Wagen:</strong> ${variant.cars}</p>
        <p><strong>Höchstgeschwindigkeit:</strong> ${variant.speed} mph</p>
        <p><strong>Beschleunigung:</strong> ${variant.acceleration} m/s²</p>
        <p><strong>Bremskraft:</strong> ${variant.braking} m/s²</p>
      </div>
    `;
    mainView.appendChild(trainInfoContainer);

    // Trigger fade-in/slide-up animation for the new content
    // Use a small timeout to ensure the browser has rendered the element
    // before applying the 'final' styles to trigger transition.
    setTimeout(() => {
      trainInfoContainer.style.opacity = 1;
      trainInfoContainer.style.transform = "translateY(0)";
    }, 50); // Small delay
  };

  if (oldContent) {
    oldContent.classList.add("fade-out-content"); // Add class to trigger fade-out animation
    // Remove the old content after its fade-out animation completes
    oldContent.addEventListener(
      "animationend",
      function handler() {
        oldContent.removeEventListener("animationend", handler); // Remove listener to avoid multiple calls
        oldContent.remove();
        addNewContent(); // Add new content after old is removed
      },
      { once: true }
    ); // Ensure handler runs only once
  } else {
    // No old content, just add the new content immediately
    addNewContent();
  }
}
