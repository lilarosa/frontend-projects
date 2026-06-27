const storageKey = "smart-outfit-final-showcase-items";

const starterClothes = [
  {
    id: 1,
    name: "Cream Trench Coat",
    imageUrl: "",
    category: "outerwear",
    color: "cream",
    season: "spring",
    occasion: "work"
  },
  {
    id: 2,
    name: "Silk Blouse",
    imageUrl: "",
    category: "top",
    color: "white",
    season: "spring",
    occasion: "work"
  },
  {
    id: 3,
    name: "Navy Trousers",
    imageUrl: "",
    category: "bottom",
    color: "navy",
    season: "spring",
    occasion: "work"
  },
  {
    id: 4,
    name: "Black Loafers",
    imageUrl: "",
    category: "shoes",
    color: "black",
    season: "spring",
    occasion: "work"
  },
  {
    id: 5,
    name: "Rose Party Dress",
    imageUrl: "",
    category: "dress",
    color: "rose",
    season: "summer",
    occasion: "party"
  },
  {
    id: 6,
    name: "Green Linen Shirt",
    imageUrl: "",
    category: "top",
    color: "green",
    season: "summer",
    occasion: "casual"
  },
  {
    id: 7,
    name: "Dark Jeans",
    imageUrl: "",
    category: "bottom",
    color: "blue",
    season: "summer",
    occasion: "casual"
  },
  {
    id: 8,
    name: "Black Wool Coat",
    imageUrl: "",
    category: "outerwear",
    color: "black",
    season: "winter",
    occasion: "work"
  }
];

let clothes = loadClothes();
let selectedFileDataUrl = "";

const views = document.querySelectorAll(".view");
const navButtons = document.querySelectorAll(".nav-button");
const clothingForm = document.getElementById("clothingForm");
const clothesList = document.getElementById("clothesList");
const reloadBtn = document.getElementById("reloadBtn");
const itemId = document.getElementById("itemId");
const itemName = document.getElementById("itemName");
const itemImageUrl = document.getElementById("itemImageUrl");
const itemImageFile = document.getElementById("itemImageFile");
const selectedFileName = document.getElementById("selectedFileName");
const itemColor = document.getElementById("itemColor");
const itemCategory = document.getElementById("itemCategory");
const itemSeason = document.getElementById("itemSeason");
const itemOccasion = document.getElementById("itemOccasion");
const uploadBtn = document.getElementById("uploadBtn");
const saveBtn = document.getElementById("saveBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const recommendForm = document.getElementById("recommendForm");
const recommendOccasion = document.getElementById("recommendOccasion");
const recommendSeason = document.getElementById("recommendSeason");
const recommendTemperature = document.getElementById("recommendTemperature");
const recommendationResult = document.getElementById("recommendationResult");
const itemCountBadge = document.getElementById("itemCountBadge");

function loadClothes() {
  const stored = localStorage.getItem(storageKey);
  return stored ? JSON.parse(stored) : [...starterClothes];
}

function saveClothes() {
  localStorage.setItem(storageKey, JSON.stringify(clothes));
}

function nextId() {
  return Math.max(0, ...clothes.map((item) => Number(item.id) || 0)) + 1;
}

function switchView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
}

function colorClass(color) {
  return color.trim().toLowerCase().replace(/[^a-z]/g, "") || "neutral";
}

function categoryIcon(category) {
  const icons = {
    top: "▥",
    bottom: "▤",
    outerwear: "▧",
    dress: "◈",
    shoes: "▰"
  };
  return icons[category] || "▣";
}

function renderClothes() {
  itemCountBadge.textContent = `${clothes.length} item${clothes.length === 1 ? "" : "s"}`;

  if (clothes.length === 0) {
    clothesList.innerHTML = '<p class="empty-state">No clothes yet. Add your first item above.</p>';
    return;
  }

  clothesList.innerHTML = clothes.map((item) => `
    <article class="clothing-card">
      <div class="thumb">
        ${item.imageUrl
          ? `<img src="${item.imageUrl}" alt="${item.name}">`
          : `<span>${categoryIcon(item.category)}</span>`}
      </div>
      <div>
        <h3>${item.name}</h3>
        <p>${item.category} • ${item.color}</p>
        <p>${item.season} • ${item.occasion}</p>
        <div class="tag-row">
          <span class="tag ${colorClass(item.color)}">${item.color}</span>
          <span class="tag neutral">${item.category}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="icon-button" type="button" aria-label="Edit ${item.name}" data-edit="${item.id}">✎</button>
        <button class="icon-button" type="button" aria-label="Delete ${item.name}" data-delete="${item.id}">×</button>
      </div>
    </article>
  `).join("");
}

function resetForm() {
  clothingForm.reset();
  itemId.value = "";
  selectedFileDataUrl = "";
  selectedFileName.textContent = "No local image selected.";
  saveBtn.textContent = "Add Clothing Item";
  cancelEditBtn.classList.add("hidden");
}

function fillForm(item) {
  itemId.value = item.id;
  itemName.value = item.name;
  itemImageUrl.value = item.imageUrl || "";
  itemColor.value = item.color;
  itemCategory.value = item.category;
  itemSeason.value = item.season;
  itemOccasion.value = item.occasion;
  selectedFileDataUrl = item.imageUrl?.startsWith("data:image") ? item.imageUrl : "";
  selectedFileName.textContent = selectedFileDataUrl ? "Local preview image is loaded." : "No local image selected.";
  saveBtn.textContent = "Update Clothing Item";
  cancelEditBtn.classList.remove("hidden");
  switchView("clothesView");
  itemName.focus();
}

function upsertItem(event) {
  event.preventDefault();

  const id = Number(itemId.value) || nextId();
  const item = {
    id,
    name: itemName.value.trim(),
    imageUrl: selectedFileDataUrl || itemImageUrl.value.trim(),
    category: itemCategory.value,
    color: itemColor.value.trim().toLowerCase(),
    season: itemSeason.value,
    occasion: itemOccasion.value
  };

  const existingIndex = clothes.findIndex((entry) => Number(entry.id) === id);
  if (existingIndex >= 0) {
    clothes[existingIndex] = item;
  } else {
    clothes = [item, ...clothes];
  }

  saveClothes();
  resetForm();
  renderClothes();
}

function pickByCategory(items, category) {
  return items.find((item) => item.category === category);
}

function buildRecommendation(event) {
  event?.preventDefault();

  const occasion = recommendOccasion.value;
  const season = recommendSeason.value;
  const temperature = Number(recommendTemperature.value);
  const matches = clothes.filter((item) => item.occasion === occasion && item.season === season);
  const dress = pickByCategory(matches, "dress");

  const top = dress ? dress.name : pickByCategory(matches, "top")?.name || "unknown";
  const bottom = dress ? "one-piece outfit" : pickByCategory(matches, "bottom")?.name || "unknown";
  const outerwear = pickByCategory(matches, "outerwear")?.name || (temperature < 16 ? "unknown" : "not needed");
  const shoes = pickByCategory(matches, "shoes")?.name || "unknown";
  const hasUnknown = [top, bottom, outerwear, shoes].includes("unknown");

  const message = hasUnknown
    ? "No matching outfit found yet. Please try another season or occasion, or add more clothes."
    : `Combined from your wardrobe for ${season} ${occasion}. ${temperature < 10 ? "Cold weather: keep the outerwear." : temperature > 25 ? "Warm weather: choose lighter pieces." : "Mild weather: balanced layers should work."}`;

  recommendationResult.innerHTML = `
    <div class="result-row">
      <strong>Top:</strong>
      <span>${top}</span>
    </div>
    <div class="result-row">
      <strong>Bottom:</strong>
      <span>${bottom}</span>
    </div>
    <div class="result-row">
      <strong>Outerwear:</strong>
      <span>${outerwear}</span>
    </div>
    <div class="result-row">
      <strong>Shoes:</strong>
      <span>${shoes}</span>
    </div>
    <div class="result-row">
      <strong>Message:</strong>
      <span>${message}</span>
    </div>
  `;
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

clothingForm.addEventListener("submit", upsertItem);
recommendForm.addEventListener("submit", buildRecommendation);

cancelEditBtn.addEventListener("click", resetForm);

reloadBtn.addEventListener("click", () => {
  clothes = [...starterClothes];
  saveClothes();
  resetForm();
  renderClothes();
  buildRecommendation();
});

uploadBtn.addEventListener("click", () => {
  selectedFileName.textContent = selectedFileDataUrl
    ? "Image preview saved for this static demo."
    : "Pick an image first. In the full app this uploads to Spring Boot.";
});

itemImageFile.addEventListener("change", () => {
  const file = itemImageFile.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    selectedFileDataUrl = String(reader.result);
    selectedFileName.textContent = `Selected: ${file.name}`;
  };
  reader.readAsDataURL(file);
});

clothesList.addEventListener("click", (event) => {
  const editId = event.target.dataset.edit;
  const deleteId = event.target.dataset.delete;

  if (editId) {
    const item = clothes.find((entry) => Number(entry.id) === Number(editId));
    if (item) fillForm(item);
  }

  if (deleteId) {
    clothes = clothes.filter((entry) => Number(entry.id) !== Number(deleteId));
    saveClothes();
    renderClothes();
    buildRecommendation();
  }
});

renderClothes();
buildRecommendation();
