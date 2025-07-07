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
        image: "img/TRAIN-142.webp",
        category: "regional",
        length: 31,
      },
    },
  },
  {
    name: "Class 156",
    type: "DMU",
    variants: {
      "Super Sprinter": {
        cars: 2,
        speed: 75,
        acceleration: 0.7,
        braking: 1,
        image: "img/TRAIN-156.webp",
        category: "regional",
        length: 46,
      },
    },
  },
  {
    name: "Class 231",
    type: "DMU",
    variants: {
      "231": {
        cars: 4,
        speed: 90,
        acceleration: 1.1,
        braking: 1.2,
        image: "img/TRAIN-231.webp",
        category: "regional",
        length: 81,
      },
    },
  },
  {
    name: "Class 745",
    type: "EMU",
    variants: {
      "745/0 (Intercity Set)": {
        cars: 12,
        speed: 100,
        acceleration: 0.9,
        braking: 1.2,
        image: "img/TRAIN-745.webp",
        category: "intercity",
        length: 235,
      },
      "745/1 (Airport Set)": {
        cars: 12,
        speed: 100,
        acceleration: 0.9,
        braking: 1.2,
        image: "img/TRAIN-745.webp",
        category: "intercity",
        length: 235,
      },
    },
  },
  {
    name: "Class 755",
    type: "BMU",
    variants: {
      "755/3": {
        cars: 3,
        speed: 100,
        acceleration: 1.3,
        braking: 1.2,
        image: "img/TRAIN-755.webp",
        category: "regional",
        length: 65,
      },
      "755/4": {
        cars: 4,
        speed: 100,
        acceleration: 1.3,
        braking: 1.2,
        image: "img/TRAIN-755.webp",
        category: "regional",
        length: 81,
      },
    },
  },
  {
    name: "Class 756",
    type: "BMU",
    variants: {
      "756/0": {
        cars: 3,
        speed: 75,
        acceleration: 1.1,
        braking: 1.2,
        image: "img/TRAIN-756.webp",
        category: "regional",
        length: 65,
      },
      "756/1": {
        cars: 4,
        speed: 75,
        acceleration: 1.1,
        braking: 1.2,
        image: "img/TRAIN-756.webp",
        category: "regional",
        length: 81,
      },
    },
  },
  {
    name: "Class 800",
    type: "BMU",
    variants: {
      "800/0": {
        cars: 5,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-800_03.webp",
        category: "regional",
        length: 132,
      },
      "800/1": {
        cars: 9,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-800.webp",
        category: "intercity",
        length: 238,
      },
      "800/2": {
        cars: 5,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-800.webp",
        category: "regional",
        length: 132,
      },
      "800/3": {
        cars: 9,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-800_03.webp",
        category: "intercity",
        length: 238,
      },
    },
  },
  {
    name: "Class 801",
    type: "EMU",
    variants: {
      "801/1": {
        cars: 5,
        speed: 125,
        acceleration: 0.8,
        braking: 1.2,
        image: "img/TRAIN-800.webp",
        category: "intercity",
        length: 132,
      },
      "801/2": {
        cars: 9,
        speed: 125,
        acceleration: 0.8,
        braking: 1.2,
        image: "img/TRAIN-800.webp",
        category: "intercity",
        length: 238,
      },
    },
  },
   {
    name: "Class 802",
    type: "BMU",
    variants: {
      "802/0": {
        cars: 5,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-800_03.webp",
        category: "regional",
        length: 132,
      },
      "802/1": {
        cars: 9,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-800_03.webp",
        category: "intercity",
        length: 238,
      },
      "802/2": {
        cars: 5,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-802.webp",
        category: "regional",
        length: 132,
      },
      "802/3": {
        cars: 5,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-800_3.webp",
        category: "regional",
        length: 132,
      },
    },
  },
   {
    name: "Class 803",
    type: "EMU",
    variants: {
      "803/0": {
        cars: 5,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-803.webp",
        category: "intercity",
        length: 132,
      },
    },
  },
   {
    name: "Class 805",
    type: "BMU",
    variants: {
      "805/0": {
        cars: 5,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-805.webp",
        category: "intercity",
        length: 132,
      },
    },
  },
  {
    name: "Class 807",
    type: "EMU",
    variants: {
      "807/0": {
        cars: 7,
        speed: 125,
        acceleration: 0.7,
        braking: 1.2,
        image: "img/TRAIN-807.webp",
        category: "intercity",
        length: 185,
      },
    },
  },
  {
    name: "Class 153",
    type: "DMU",
    variants: {
      "Super Sprinter": {
        cars: 7,
        speed: 75,
        acceleration: 0.7,
        braking: 1,
        image: "img/TRAIN-153.webp",
        category: "shuttle",
        length: 32,
      },
    },
  },
  {
    name: "Class 158",
    type: "DMU",
    variants: {
      "2 Car": {
        cars: 2,
        speed: 90,
        acceleration: 0.7,
        braking: 1,
        image: "img/TRAIN-158.webp",
        category: "regional",
        length: 48,
      },
      "3 Car": {
        cars: 3,
        speed: 90,
        acceleration: 0.7,
        braking: 1,
        image: "img/TRAIN-158.webp",
        category: "regional",
        length: 72,
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
  // Remove old image if it exists
  const oldImage = mainView.querySelector(".train-image");
  if (oldImage) oldImage.remove(); 
  if (defaultText) {
    defaultText.style.display = "none";
  }
  

  // Create and insert the train image separately
  const trainImage = document.createElement("img");
  trainImage.src = variant.image;
  trainImage.alt = `${train.name} - ${variantName}`;
  trainImage.className = "train-image";
  mainView.appendChild(trainImage);

  // Create the container for train info
  const trainInfoContainer = document.createElement("div");
  trainInfoContainer.className = "train-info-container";
  trainInfoContainer.style.position = "relative";
  trainInfoContainer.style.opacity = 0;
  trainInfoContainer.style.transform = "translateY(20px)";

  trainInfoContainer.innerHTML = `
    <h1 class="sideway-num">${train.name.match(/\d+/)?.[0] ?? ""}</h1>
    <h2 style="margin-top: -24vw;">${train.name} - ${variantName}</h2>
    <div class="stats-card">
      <p><strong>Type:</strong> ${train.type}</p>
      <p><strong>Variant:</strong> ${variantName}</p>
      <p><strong>Coaches:</strong> ${variant.cars}</p>
      <p><strong>Top Speed:</strong> ${variant.speed} mph</p>
      <p><strong>Acceleration:</strong> ${variant.acceleration} m/s²</p>
      <p><strong>Braking:</strong> ${variant.braking} m/s²</p>
      <p><strong>Length:</strong> ${variant.length} m</p>
    </div>
  `;
  mainView.appendChild(trainInfoContainer);

  // Animate the train info fade-in/slide-up
  setTimeout(() => {
    trainInfoContainer.style.opacity = 1;
    trainInfoContainer.style.transform = "translateY(0)";
  }, 50);
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
