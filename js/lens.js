let lensPhotos = [];
let currentLightboxIndex = 0;
let activeCategory = "all";

document.addEventListener("DOMContentLoaded", () => {
  loadLens();
  setupLightbox();
});

async function loadLens() {
  const gridContainer = document.getElementById("lens-grid");
  if (!gridContainer) {
    return;
  }

  try {
    const records = await loadLensData();
    lensPhotos = records;
    initLensFilters();
    renderLensGrid(gridContainer, applyLensFilters());
  } catch (error) {
    console.error("Unable to load lens gallery.", error);
  }
}

function parseLensCSV(text) {
  const rows = [];
  let currentField = "";
  let currentRow = [];
  let insideQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (insideQuotes) {
      if (char === '"') {
        const nextChar = text[i + 1];
        if (nextChar === '"') {
          currentField += '"';
          i += 1;
        } else {
          insideQuotes = false;
        }
      } else {
        currentField += char;
      }
    } else if (char === '"') {
      insideQuotes = true;
    } else if (char === ",") {
      currentRow.push(currentField);
      currentField = "";
    } else if (char === "\n") {
      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = "";
    } else if (char !== "\r") {
      currentField += char;
    }
  }

  if (currentField || currentRow.length) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  if (!rows.length) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim());

  return rows
    .slice(1)
    .filter((row) => row.some((cell) => (cell || "").trim() !== ""))
    .map((row) => {
      const record = {};
      headers.forEach((header, index) => {
        record[header] = (row[index] || "").trim();
      });
      return record;
    });
}

function renderLensGrid(container, photos) {
  container.textContent = "";

  if (!photos.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "lens_empty";
    emptyMessage.textContent = "No photos to display.";
    container.appendChild(emptyMessage);
    return;
  }

  const fragment = document.createDocumentFragment();

  photos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "lens_card";
    card.setAttribute("data-category", photo.category || "");

    // Image container
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "lens_card_image";

    const img = document.createElement("img");
    img.src = photo.image || "";
    img.alt = photo.title || "Photo";
    img.loading = "lazy";
    
    // Click to open lightbox
    img.addEventListener("click", () => openLightbox(index));

    imageWrapper.appendChild(img);
    card.appendChild(imageWrapper);

    // Caption
    if (photo.title || photo.description) {
      const caption = document.createElement("div");
      caption.className = "lens_card_caption";

      if (photo.title) {
        const title = document.createElement("h3");
        title.className = "lens_card_title";
        title.textContent = photo.title;
        caption.appendChild(title);
      }

      if (photo.description) {
        const desc = document.createElement("p");
        desc.className = "lens_card_description";
        desc.textContent = photo.description;
        caption.appendChild(desc);
      }

      card.appendChild(caption);
    }

    // Metadata overlay
    if (photo.location || photo.date) {
      const meta = document.createElement("div");
      meta.className = "lens_card_meta";

      if (photo.location) {
        const location = document.createElement("span");
        location.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${photo.location}`;
        meta.appendChild(location);
      }

      if (photo.date) {
        const date = document.createElement("span");
        date.innerHTML = `<i class="fa-solid fa-calendar"></i> ${photo.date}`;
        meta.appendChild(date);
      }

      card.appendChild(meta);
    }

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function initLensFilters() {
  const controls = document.getElementById("lens-controls");
  if (!controls) {
    return;
  }

  // Get unique categories
  const categories = new Set();
  lensPhotos.forEach((photo) => {
    if (photo.category) {
      photo.category.split(";").forEach((cat) => {
        const trimmed = cat.trim();
        if (trimmed) categories.add(trimmed);
      });
    }
  });

  if (categories.size === 0) {
    controls.style.display = "none";
    return;
  }

  const fragment = document.createDocumentFragment();

  // "All" button
  const allBtn = createFilterButton("All", "all");
  allBtn.classList.add("is-active");
  fragment.appendChild(allBtn);

  // Category buttons
  Array.from(categories)
    .sort()
    .forEach((category) => {
      fragment.appendChild(createFilterButton(category, category));
    });

  controls.appendChild(fragment);
}

function createFilterButton(label, filterKey) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "lens_filter_btn";
  button.textContent = label;
  button.setAttribute("data-filter", filterKey);

  button.addEventListener("click", () => {
    // Update active state
    document.querySelectorAll(".lens_filter_btn").forEach((btn) => {
      btn.classList.remove("is-active");
    });
    button.classList.add("is-active");

    // Update active category and re-render
    activeCategory = filterKey;
    renderLensGrid(
      document.getElementById("lens-grid"),
      applyLensFilters()
    );
  });

  return button;
}

function applyLensFilters() {
  if (activeCategory === "all") {
    return lensPhotos;
  }

  return lensPhotos.filter((photo) => {
    if (!photo.category) return false;
    const categories = photo.category.split(";").map((c) => c.trim());
    return categories.includes(activeCategory);
  });
}

async function loadLensData() {
  const loader = window.DataLoader;

  if (loader) {
    const workbookRecords = await loader.readWorkbook("/data/lens.xlsx");
    if (workbookRecords.length) {
      return loader.normalizeRecords(workbookRecords);
    }

    const csvText = await loader.readCsv("/data/lens.csv");
    if (csvText) {
      const csvRecords = parseLensCSV(csvText);
      return loader.normalizeRecords(csvRecords);
    }

    return [];
  }

  const csvText = await readCsvFallback("/data/lens.csv");
  if (!csvText) {
    return [];
  }
  const csvRecords = parseLensCSV(csvText);
  return normalizeRecords(csvRecords);
}

function normalizeRecords(records) {
  if (window.DataLoader) {
    return window.DataLoader.normalizeRecords(records);
  }

  return (records || []).map((record) => {
    const normalized = {};
    Object.keys(record || {}).forEach((key) => {
      const trimmedKey = key ? key.trim() : "";
      if (!trimmedKey) {
        return;
      }
      const value = record[key];
      if (value === undefined || value === null) {
        normalized[trimmedKey] = "";
      } else if (typeof value === "string") {
        normalized[trimmedKey] = value.trim();
      } else {
        normalized[trimmedKey] = String(value);
      }
    });
    return normalized;
  });
}

async function readCsvFallback(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.warn(error);
    return "";
  }
}

// Lightbox functionality
function setupLightbox() {
  const lightbox = document.getElementById("lens-lightbox");
  const closeBtn = document.querySelector(".lens_lightbox_close");
  const prevBtn = document.querySelector(".lens_lightbox_prev");
  const nextBtn = document.querySelector(".lens_lightbox_next");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => navigateLightbox(-1));
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => navigateLightbox(1));
  }

  // Close on background click
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightbox && lightbox.style.display !== "none") {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    }
  });
}

function openLightbox(index) {
  const filteredPhotos = applyLensFilters();
  currentLightboxIndex = index;

  const photo = filteredPhotos[index];
  if (!photo) return;

  const lightbox = document.getElementById("lens-lightbox");
  const img = document.getElementById("lens-lightbox-image");
  const title = document.getElementById("lens-lightbox-title");
  const description = document.getElementById("lens-lightbox-description");
  const metadata = document.getElementById("lens-lightbox-metadata");

  img.src = photo.image || "";
  img.alt = photo.title || "Photo";

  title.textContent = photo.title || "";
  description.textContent = photo.description || "";

  // Build metadata
  metadata.innerHTML = "";
  const metaParts = [];
  if (photo.location) {
    metaParts.push(`<i class="fa-solid fa-location-dot"></i> ${photo.location}`);
  }
  if (photo.date) {
    metaParts.push(`<i class="fa-solid fa-calendar"></i> ${photo.date}`);
  }
  if (photo.camera) {
    metaParts.push(`<i class="fa-solid fa-camera"></i> ${photo.camera}`);
  }
  metadata.innerHTML = metaParts.join(" • ");

  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lens-lightbox");
  lightbox.style.display = "none";
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  const filteredPhotos = applyLensFilters();
  currentLightboxIndex =
    (currentLightboxIndex + direction + filteredPhotos.length) %
    filteredPhotos.length;
  openLightbox(currentLightboxIndex);
}
