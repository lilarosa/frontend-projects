const starterItems = [
  { name: "Cream trench coat", category: "outerwear", color: "cream", season: "spring", occasion: "work" },
  { name: "Silk blouse", category: "top", color: "cream", season: "spring", occasion: "work" },
  { name: "Wide navy trousers", category: "bottom", color: "blue", season: "spring", occasion: "work" },
  { name: "Black loafers", category: "shoes", color: "black", season: "spring", occasion: "work" },
  { name: "Rose summer dress", category: "dress", color: "rose", season: "summer", occasion: "party" },
  { name: "Green linen shirt", category: "top", color: "green", season: "summer", occasion: "casual" },
  { name: "Black wool coat", category: "outerwear", color: "black", season: "winter", occasion: "work" },
  { name: "Dark jeans", category: "bottom", color: "blue", season: "autumn", occasion: "casual" },
  { name: "Cream knit sweater", category: "top", color: "cream", season: "winter", occasion: "casual" },
  { name: "Rose heels", category: "shoes", color: "rose", season: "summer", occasion: "party" }
];

const storageKey = "smart-outfit-demo-items";
let wardrobe = loadWardrobe();

const seasonFilter = document.getElementById("seasonFilter");
const occasionFilter = document.getElementById("occasionFilter");
const colorFilter = document.getElementById("colorFilter");
const temperatureInput = document.getElementById("temperatureInput");
const recommendBtn = document.getElementById("recommendBtn");
const recommendationResult = document.getElementById("recommendationResult");
const catalogGrid = document.getElementById("catalogGrid");
const itemForm = document.getElementById("itemForm");
const resetBtn = document.getElementById("resetBtn");
const itemCount = document.getElementById("itemCount");
const matchCount = document.getElementById("matchCount");
const favoriteColor = document.getElementById("favoriteColor");

function loadWardrobe() {
  const stored = localStorage.getItem(storageKey);
  return stored ? JSON.parse(stored) : [...starterItems];
}

function saveWardrobe() {
  localStorage.setItem(storageKey, JSON.stringify(wardrobe));
}

function getMatches() {
  const season = seasonFilter.value;
  const occasion = occasionFilter.value;
  const color = colorFilter.value;

  return wardrobe.filter((item) => {
    const contextMatches = item.season === season && item.occasion === occasion;
    const colorMatches = color === "any" || item.color === color;
    return contextMatches && colorMatches;
  });
}

function pickByCategory(items, category) {
  return items.find((item) => item.category === category);
}

function buildRecommendation() {
  const matches = getMatches();
  const dress = pickByCategory(matches, "dress");
  const outfit = dress
    ? [dress, pickByCategory(matches, "outerwear"), pickByCategory(matches, "shoes")].filter(Boolean)
    : [
        pickByCategory(matches, "outerwear"),
        pickByCategory(matches, "top"),
        pickByCategory(matches, "bottom"),
        pickByCategory(matches, "shoes")
      ].filter(Boolean);

  const temperature = Number(temperatureInput.value);
  const warmth = temperature < 10
    ? "Cold day: outerwear is important."
    : temperature > 25
      ? "Warm day: lighter pieces are preferred."
      : "Mild day: balanced layers should work well.";

  if (outfit.length === 0) {
    recommendationResult.innerHTML = `
      <p class="empty-state">No matching outfit yet. Add items or loosen the color preference.</p>
    `;
    return;
  }

  recommendationResult.innerHTML = `
    <div class="recommendation-note">${warmth} Matched ${matches.length} wardrobe item${matches.length === 1 ? "" : "s"}.</div>
    <div class="outfit-list">
      ${outfit.map(renderOutfitRow).join("")}
    </div>
  `;
}

function renderOutfitRow(item) {
  return `
    <article class="outfit-row">
      <span class="swatch ${item.color}">${item.color}</span>
      <div>
        <span class="category">${item.category}</span>
        <strong>${item.name}</strong>
        <p>${item.season} · ${item.occasion}</p>
      </div>
    </article>
  `;
}

function renderCatalog() {
  catalogGrid.innerHTML = wardrobe.map((item) => `
    <article class="item-card">
      <span class="swatch ${item.color}">${item.color}</span>
      <strong>${item.name}</strong>
      <p>${item.category} · ${item.season} · ${item.occasion}</p>
    </article>
  `).join("");
}

function renderSummary() {
  const matches = getMatches();
  itemCount.textContent = wardrobe.length;
  matchCount.textContent = matches.length;
  favoriteColor.textContent = getTopColor();
}

function getTopColor() {
  const counts = wardrobe.reduce((total, item) => {
    total[item.color] = (total[item.color] || 0) + 1;
    return total;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";
}

function render() {
  renderSummary();
  renderCatalog();
  buildRecommendation();
}

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = {
    name: document.getElementById("itemName").value.trim(),
    category: document.getElementById("itemCategory").value,
    color: document.getElementById("itemColor").value,
    season: document.getElementById("itemSeason").value,
    occasion: document.getElementById("itemOccasion").value
  };

  wardrobe = [item, ...wardrobe];
  saveWardrobe();
  itemForm.reset();
  render();
});

[seasonFilter, occasionFilter, colorFilter, temperatureInput].forEach((control) => {
  control.addEventListener("input", render);
});

recommendBtn.addEventListener("click", buildRecommendation);

resetBtn.addEventListener("click", () => {
  wardrobe = [...starterItems];
  saveWardrobe();
  render();
});

render();
