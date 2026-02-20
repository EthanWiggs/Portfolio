const INVENTORY = [
  {
    id: "cable-twe-2-5-50m",
    name: "Twin and Earth Cable 2.5mm (50m)",
    category: "Cable",
    description: "Reliable cable for common socket circuits and rewiring jobs.",
    salePrice: 39,
    listPrice: 82,
    stock: 24,
    featured: true,
    randomEligible: true,
    tags: ["cable", "rewire", "socket", "home"]
  },
  {
    id: "breaker-mcb-b20-10pk",
    name: "B20 MCB Breakers (10 Pack)",
    category: "Breakers",
    description: "A practical pack for board updates and quick replacements.",
    salePrice: 54,
    listPrice: 129,
    stock: 11,
    featured: true,
    randomEligible: true,
    tags: ["breaker", "consumer unit", "board", "mcb"]
  },
  {
    id: "led-shoplight-4ft-2pk",
    name: "4ft LED Shop Light (2 Pack)",
    category: "Lighting",
    description: "Bright and simple utility lighting for garages and sheds.",
    salePrice: 28,
    listPrice: 69,
    stock: 27,
    featured: true,
    randomEligible: true,
    tags: ["led", "garage", "workshop", "lighting"]
  },
  {
    id: "gfci-rcd-outlet-6pk",
    name: "RCD Protected Outlet Set (6 Pack)",
    category: "Sockets",
    description: "Good value outlet pack for kitchens, utility rooms, and upgrades.",
    salePrice: 33,
    listPrice: 79,
    stock: 16,
    featured: false,
    randomEligible: true,
    tags: ["outlet", "socket", "rcd", "kitchen"]
  },
  {
    id: "smart-switch-3pk",
    name: "Wi-Fi Smart Switches (3 Pack)",
    category: "Smart Home",
    description: "A quick way to add app control to existing lighting circuits.",
    salePrice: 41,
    listPrice: 109,
    stock: 8,
    featured: true,
    randomEligible: true,
    tags: ["smart", "wifi", "switch", "app"]
  },
  {
    id: "conduit-fittings-25",
    name: "Conduit Fittings Set (25 Pieces)",
    category: "Conduit",
    description: "Useful mixed fittings for tidy conduit runs.",
    salePrice: 19,
    listPrice: 44,
    stock: 42,
    featured: false,
    randomEligible: true,
    tags: ["conduit", "fittings", "accessories"]
  },
  {
    id: "surge-strip-2pk",
    name: "Surge Protected Extension (2 Pack)",
    category: "Power",
    description: "Everyday surge protection for home office and workshop use.",
    salePrice: 24,
    listPrice: 58,
    stock: 22,
    featured: false,
    randomEligible: true,
    tags: ["extension", "surge", "power", "office"]
  },
  {
    id: "circuit-finder-kit",
    name: "Circuit Finder Kit",
    category: "Tools",
    description: "Handy tool for identifying circuits cleanly and quickly.",
    salePrice: 59,
    listPrice: 148,
    stock: 6,
    featured: true,
    randomEligible: true,
    tags: ["tool", "circuit", "finder", "electrician"]
  },
  {
    id: "fan-controller",
    name: "Ceiling Fan Controller",
    category: "Controls",
    description: "Replacement controller for fan and light combinations.",
    salePrice: 17,
    listPrice: 47,
    stock: 14,
    featured: false,
    randomEligible: true,
    tags: ["fan", "controller", "replacement"]
  },
  {
    id: "landscape-transformer-300w",
    name: "300W Garden Lighting Transformer",
    category: "Outdoor",
    description: "Solid option for low-voltage garden lighting layouts.",
    salePrice: 45,
    listPrice: 124,
    stock: 9,
    featured: true,
    randomEligible: true,
    tags: ["garden", "outdoor", "transformer", "lighting"]
  },
  {
    id: "afci-breaker-15a-5pk",
    name: "15A AFCI Breakers (5 Pack)",
    category: "Breakers",
    description: "Popular safety-focused breakers at a strong unit price.",
    salePrice: 63,
    listPrice: 165,
    stock: 5,
    featured: true,
    randomEligible: false,
    tags: ["afci", "breaker", "safety", "board"]
  },
  {
    id: "weatherproof-box-4pk",
    name: "Weatherproof Outlet Boxes (4 Pack)",
    category: "Outdoor",
    description: "Useful outdoor boxes for reliable weather protected installs.",
    salePrice: 21,
    listPrice: 54,
    stock: 28,
    featured: false,
    randomEligible: true,
    tags: ["weatherproof", "outdoor", "box", "socket"]
  },
  {
    id: "dimmer-switch-10pk",
    name: "Universal Dimmer Switches (10 Pack)",
    category: "Controls",
    description: "Great value dimmers for full-room refresh projects.",
    salePrice: 48,
    listPrice: 117,
    stock: 15,
    featured: true,
    randomEligible: true,
    tags: ["dimmer", "switch", "lighting", "upgrade"]
  },
  {
    id: "portable-worklight-2pk",
    name: "Portable Worklight (2 Pack)",
    category: "Lighting",
    description: "Compact lights for site jobs, loft work, and DIY tasks.",
    salePrice: 36,
    listPrice: 92,
    stock: 12,
    featured: true,
    randomEligible: true,
    tags: ["worklight", "portable", "diy", "repair"]
  },
  {
    id: "wire-nuts-400",
    name: "Wire Connector Jar (400 Pieces)",
    category: "Cable",
    description: "Large mixed jar for routine joins and ongoing maintenance.",
    salePrice: 14,
    listPrice: 35,
    stock: 60,
    featured: false,
    randomEligible: true,
    tags: ["connector", "wire", "maintenance", "jar"]
  },
  {
    id: "recessed-led-6pk",
    name: "Canless Recessed LED (6 Pack)",
    category: "Lighting",
    description: "Clean recessed look with quick installation fittings.",
    salePrice: 32,
    listPrice: 82,
    stock: 20,
    featured: false,
    randomEligible: true,
    tags: ["recessed", "ceiling", "led", "downlight"]
  }
];

const BUNDLES = [
  {
    id: "bundle-garage-refresh",
    name: "Garage Refresh Bundle",
    description: "A practical mix for rewiring and lighting a typical garage space.",
    included: ["Twin and earth cable", "RCD outlets", "Wire connector jar"],
    listPrice: 196,
    salePrice: 104,
    stock: 18,
    tags: ["bundle", "garage", "rewire"]
  },
  {
    id: "bundle-lighting-upgrade",
    name: "Lighting Upgrade Bundle",
    description: "Popular lighting picks for a brighter workshop or utility room.",
    included: ["LED shop lights", "Portable worklights", "Dimmer switches"],
    listPrice: 278,
    salePrice: 136,
    stock: 10,
    tags: ["bundle", "lighting", "workshop"]
  },
  {
    id: "bundle-consumer-unit",
    name: "Consumer Unit Helper Bundle",
    description: "Useful stock for board updates, inspections, and replacements.",
    included: ["B20 breaker set", "AFCI breaker set", "Circuit finder"],
    listPrice: 442,
    salePrice: 219,
    stock: 6,
    tags: ["bundle", "board", "breakers", "tool"]
  }
];

const ALL_PRODUCTS = [
  ...INVENTORY,
  ...BUNDLES.map((bundle) => ({
    ...bundle,
    category: "Bundles",
    featured: true,
    randomEligible: false,
    isBundle: true
  }))
];

const STATE = {
  query: "",
  category: "all",
  sort: "discount",
  stockOnly: true,
  cart: [],
  checkoutOpen: false,
  randomLastId: null,
  toastTimer: null
};

function q(id) {
  return document.getElementById(id);
}

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key === "html") node.innerHTML = value;
    else node.setAttribute(key, value);
  });

  children.forEach((child) => {
    if (child === null || child === undefined) return;
    if (typeof child === "string" || typeof child === "number") {
      node.appendChild(document.createTextNode(String(child)));
    } else {
      node.appendChild(child);
    }
  });

  return node;
}

function itemImage(item) {
  if (!item || typeof item.image !== "string") return "";
  return item.image.trim();
}

function nameInitials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "CE";
}

function createImageSlot(item, variant = "product") {
  const slot = el("div", { class: `image-slot image-slot-${variant}` });
  const src = itemImage(item);

  if (!src) {
    slot.classList.add("placeholder");
    slot.appendChild(el("span", { class: "image-placeholder-text" }, "Image"));
    return slot;
  }

  const img = el("img", { src, alt: item.name || "Product image", loading: "lazy" });
  img.addEventListener("error", () => {
    img.remove();
    slot.classList.add("placeholder");
    slot.appendChild(el("span", { class: "image-placeholder-text" }, "Image"));
  });
  slot.appendChild(img);
  return slot;
}

function createCartThumb(item) {
  const thumb = el("div", { class: "cart-thumb" });
  const src = itemImage(item);

  if (!src) {
    thumb.classList.add("placeholder");
    thumb.textContent = nameInitials(item.name);
    return thumb;
  }

  const img = el("img", { src, alt: item.name || "Product image", loading: "lazy" });
  img.addEventListener("error", () => {
    img.remove();
    thumb.classList.add("placeholder");
    thumb.textContent = nameInitials(item.name);
  });
  thumb.appendChild(img);
  return thumb;
}

function formatMoney(value) {
  return `\u00a3${Number(value || 0).toFixed(2)}`;
}

function discountPercent(item) {
  if (!item || !item.listPrice) return 0;
  return Math.round(((item.listPrice - item.salePrice) / item.listPrice) * 100);
}

function itemById(id) {
  return ALL_PRODUCTS.find((item) => item.id === id) || null;
}

function cartQty(id) {
  const row = STATE.cart.find((entry) => entry.id === id);
  return row ? row.qty : 0;
}

function stockRemaining(item) {
  return Math.max(0, Number(item.stock || 0) - cartQty(item.id));
}

function isInStock(item) {
  return stockRemaining(item) > 0;
}

function categoryList() {
  return Array.from(new Set(INVENTORY.map((item) => item.category))).sort();
}

function featuredItems() {
  return INVENTORY
    .filter((item) => item.featured || discountPercent(item) >= 45)
    .sort((a, b) => discountPercent(b) - discountPercent(a))
    .slice(0, 8);
}

function filteredInventory() {
  const query = STATE.query.trim().toLowerCase();

  let items = INVENTORY.filter((item) => {
    if (STATE.stockOnly && !isInStock(item)) return false;
    if (STATE.category !== "all" && item.category !== STATE.category) return false;
    if (!query) return true;

    const haystack = [item.name, item.category, item.description, ...(item.tags || [])]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  switch (STATE.sort) {
    case "price-low":
      items = items.sort((a, b) => a.salePrice - b.salePrice);
      break;
    case "price-high":
      items = items.sort((a, b) => b.salePrice - a.salePrice);
      break;
    case "name":
      items = items.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "discount":
    default:
      items = items.sort((a, b) => discountPercent(b) - discountPercent(a));
      break;
  }

  return items;
}

function badgeRow(item) {
  const row = el("div", { class: "badges" });

  if (item.featured) {
    row.appendChild(el("span", { class: "badge featured" }, "Featured"));
  }

  row.appendChild(el("span", { class: "badge saving" }, `${discountPercent(item)}% saving`));

  if (!isInStock(item)) {
    row.appendChild(el("span", { class: "badge sold" }, "Sold out"));
  } else if (stockRemaining(item) <= 6) {
    row.appendChild(el("span", { class: "badge low" }, "Limited"));
  } else {
    row.appendChild(el("span", { class: "badge stock" }, "In stock"));
  }

  return row;
}

function productCard(item, mode = "inventory") {
  const className = mode === "featured" ? "featured-card" : "product-card";
  const card = el("article", { class: className });
  card.appendChild(createImageSlot(item, "product"));

  const top = el("div", { class: "card-top" });
  top.appendChild(badgeRow(item));
  top.appendChild(el("span", { class: "card-category" }, item.category));

  card.appendChild(top);
  card.appendChild(el("h3", { class: "card-title" }, item.name));
  card.appendChild(el("p", { class: "card-desc" }, item.description));

  card.appendChild(
    el(
      "div",
      { class: "price-row" },
      el("strong", { class: "price-now" }, formatMoney(item.salePrice)),
      el("span", { class: "price-old" }, formatMoney(item.listPrice)),
      el("span", { class: "price-save" }, `Save ${formatMoney(item.listPrice - item.salePrice)}`)
    )
  );

  card.appendChild(
    el(
      "div",
      { class: "card-meta" },
      el("span", {}, "Clearance product"),
      el("span", {}, isInStock(item) ? "Available now" : "Sold out")
    )
  );

  const actions = el("div", { class: "card-actions" });
  const add = el("button", { class: "add-btn", type: "button" }, isInStock(item) ? "Add to cart" : "Sold out");
  add.disabled = !isInStock(item);

  add.addEventListener("click", () => addToCart(item.id, 1));

  actions.appendChild(add);
  card.appendChild(actions);

  return card;
}

function renderFeatured() {
  const container = q("featured-grid");
  if (!container) return;

  container.innerHTML = "";
  featuredItems().forEach((item) => {
    container.appendChild(productCard(item, "featured"));
  });
}

function renderInventory() {
  const container = q("inventory-grid");
  if (!container) return;

  const items = filteredInventory();
  container.innerHTML = "";

  if (items.length === 0) {
    container.appendChild(el("p", { class: "empty-state" }, "No matching products right now. Try adjusting filters."));
  } else {
    items.forEach((item) => container.appendChild(productCard(item)));
  }
}

function renderBundles() {
  const container = q("bundle-grid");
  if (!container) return;

  container.innerHTML = "";

  BUNDLES.forEach((bundle) => {
    const card = el("article", { class: "bundle-card" });
    card.appendChild(createImageSlot(bundle, "bundle"));
    card.appendChild(el("h3", {}, bundle.name));
    card.appendChild(el("p", { class: "card-desc" }, bundle.description));

    const list = el("ul", { class: "bundle-list" });
    bundle.included.forEach((line) => list.appendChild(el("li", {}, line)));
    card.appendChild(list);

    card.appendChild(
      el(
        "div",
        { class: "bundle-pricing" },
        el("strong", {}, formatMoney(bundle.salePrice)),
        el("span", {}, formatMoney(bundle.listPrice))
      )
    );

    card.appendChild(
      el(
        "div",
        { class: "card-meta" },
        el("span", {}, "Bundle deal"),
        el("span", {}, isInStock(bundle) ? "Available now" : "Sold out")
      )
    );

    const add = el("button", { class: "bundle-btn", type: "button" }, isInStock(bundle) ? "Add bundle" : "Sold out");
    add.disabled = !isInStock(bundle);
    add.addEventListener("click", () => addToCart(bundle.id, 1));

    card.appendChild(add);
    container.appendChild(card);
  });
}

function renderRandomResult(item) {
  const box = q("random-result");
  if (!box) return;

  box.innerHTML = "";

  const card = el("article", { class: "random-result-card" });
  const head = el("div", { class: "random-head" });
  head.appendChild(el("p", { class: "note-kicker" }, "Random pick"));
  head.appendChild(badgeRow(item));

  card.appendChild(head);
  card.appendChild(createImageSlot(item, "random"));
  card.appendChild(el("h3", { class: "card-title" }, item.name));
  card.appendChild(el("p", { class: "card-desc" }, item.description));

  card.appendChild(
    el(
      "div",
      { class: "price-row" },
      el("strong", { class: "price-now" }, formatMoney(item.salePrice)),
      el("span", { class: "price-old" }, formatMoney(item.listPrice)),
      el("span", { class: "price-save" }, `Save ${formatMoney(item.listPrice - item.salePrice)}`)
    )
  );

  card.appendChild(el("div", { class: "card-meta" }, el("span", {}, "Clearance product"), el("span", {}, "From current stock")));

  const actions = el("div", { class: "card-actions" });
  const add = el("button", { class: "add-btn", type: "button" }, isInStock(item) ? "Add to cart" : "Sold out");
  add.disabled = !isInStock(item);
  add.addEventListener("click", () => addToCart(item.id, 1));

  const repick = el("button", { class: "ghost-btn", type: "button" }, "Pick another");
  repick.addEventListener("click", () => dropRandomDeal(false));

  actions.appendChild(add);
  actions.appendChild(repick);
  card.appendChild(actions);

  box.appendChild(card);
}

function dropRandomDeal(scroll = true) {
  const pool = INVENTORY.filter((item) => item.randomEligible && isInStock(item));
  if (pool.length === 0) {
    toast("No random-pick items are currently in stock.");
    return;
  }

  let picked = pool[Math.floor(Math.random() * pool.length)];
  if (pool.length > 1 && picked.id === STATE.randomLastId) {
    picked = pool[(pool.findIndex((item) => item.id === picked.id) + 1) % pool.length];
  }

  STATE.randomLastId = picked.id;
  renderRandomResult(picked);

  if (scroll) {
    q("random-buy")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function totals() {
  return STATE.cart.reduce(
    (sum, row) => {
      const item = itemById(row.id);
      if (!item) return sum;

      return {
        subtotal: sum.subtotal + item.salePrice * row.qty,
        retail: sum.retail + item.listPrice * row.qty
      };
    },
    { subtotal: 0, retail: 0 }
  );
}

function addToCart(id, qty = 1) {
  const item = itemById(id);
  if (!item) return;

  if (stockRemaining(item) < qty) {
    toast(`${item.name} is sold out.`);
    return;
  }

  const row = STATE.cart.find((entry) => entry.id === id);
  if (row) row.qty += qty;
  else STATE.cart.push({ id, qty });

  STATE.checkoutOpen = false;

  renderCart();
  renderFeatured();
  renderInventory();
  renderBundles();

  toast(`${item.name} added to cart.`);
}

function removeFromCart(id) {
  STATE.cart = STATE.cart.filter((entry) => entry.id !== id);
  STATE.checkoutOpen = false;

  renderCart();
  renderFeatured();
  renderInventory();
  renderBundles();
}

function updateCartQty(id, next) {
  const item = itemById(id);
  if (!item) return;

  if (next <= 0) {
    removeFromCart(id);
    return;
  }

  const row = STATE.cart.find((entry) => entry.id === id);
  if (!row) return;

  row.qty = Math.min(next, Number(item.stock || 0));

  renderCart();
  renderFeatured();
  renderInventory();
  renderBundles();
}

function renderCartCount() {
  const badge = q("cart-count");
  if (!badge) return;

  const count = STATE.cart.reduce((sum, row) => sum + row.qty, 0);
  badge.textContent = String(count);
}

function renderCart() {
  const body = q("cart-body");
  const footer = q("cart-footer");
  if (!body || !footer) return;

  renderCartCount();

  body.innerHTML = "";
  footer.innerHTML = "";

  if (STATE.cart.length === 0) {
    body.appendChild(el("p", { class: "empty-state" }, "Your cart is empty."));
    return;
  }

  STATE.cart.forEach((row) => {
    const item = itemById(row.id);
    if (!item) return;

    const card = el("article", { class: "cart-item" });

    card.appendChild(
      el(
        "div",
        { class: "cart-item-main" },
        createCartThumb(item),
        el(
          "div",
          {},
          el("h4", { class: "cart-item-title" }, item.name),
          el("p", { class: "cart-item-meta" }, item.category)
        ),
        el("strong", { class: "cart-item-price" }, formatMoney(item.salePrice * row.qty))
      )
    );

    const qtyRow = el("div", { class: "qty-row" });
    const controls = el("div", { class: "qty-controls" });

    const minus = el("button", { class: "qty-btn", type: "button", "aria-label": `Decrease ${item.name}` }, "-");
    const plus = el("button", { class: "qty-btn", type: "button", "aria-label": `Increase ${item.name}` }, "+");
    const value = el("span", { class: "qty-value" }, String(row.qty));
    const remove = el("button", { class: "remove-btn", type: "button" }, "Remove");

    minus.addEventListener("click", () => updateCartQty(item.id, row.qty - 1));
    plus.addEventListener("click", () => updateCartQty(item.id, row.qty + 1));
    remove.addEventListener("click", () => removeFromCart(item.id));

    controls.appendChild(minus);
    controls.appendChild(value);
    controls.appendChild(plus);
    qtyRow.appendChild(controls);
    qtyRow.appendChild(remove);

    card.appendChild(qtyRow);
    body.appendChild(card);
  });

  const { subtotal, retail } = totals();
  const savings = Math.max(0, retail - subtotal);

  footer.appendChild(el("div", { class: "cart-total-line" }, el("span", {}, "Retail total"), el("strong", {}, formatMoney(retail))));
  footer.appendChild(el("div", { class: "cart-total-line" }, el("span", {}, "Your total"), el("strong", {}, formatMoney(subtotal))));
  footer.appendChild(el("div", { class: "cart-total-line" }, el("span", {}, "You save"), el("strong", {}, formatMoney(savings))));

  const checkoutButton = el("button", { class: "checkout-btn", type: "button" }, STATE.checkoutOpen ? "Hide checkout" : "Checkout");
  checkoutButton.addEventListener("click", () => {
    STATE.checkoutOpen = !STATE.checkoutOpen;
    renderCart();
  });

  footer.appendChild(checkoutButton);

  if (STATE.checkoutOpen) {
    const form = el("form", { class: "checkout-form" });

    form.appendChild(el("label", {}, "Full name", el("input", { name: "name", required: "true", placeholder: "Alex Carter" })));
    form.appendChild(el("label", {}, "Email", el("input", { name: "email", type: "email", required: "true", placeholder: "you@example.co.uk" })));
    form.appendChild(el("label", {}, "Phone", el("input", { name: "phone", required: "true", placeholder: "07..." })));

    form.appendChild(el("button", { class: "checkout-btn", type: "submit" }, `Place order - ${formatMoney(subtotal)}`));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      STATE.cart = [];
      STATE.checkoutOpen = false;

      renderCart();
      renderFeatured();
      renderInventory();
      renderBundles();
      toggleCart(false);

      toast("Thanks. Your order request has been sent.");
    });

    footer.appendChild(form);
  }
}

function toggleCart(force) {
  const drawer = q("cart-drawer");
  const button = q("cart-btn");
  if (!drawer || !button) return;

  const open = typeof force === "boolean" ? force : !drawer.classList.contains("open");
  drawer.classList.toggle("open", open);
  drawer.setAttribute("aria-hidden", open ? "false" : "true");
  button.setAttribute("aria-expanded", open ? "true" : "false");

  if (open) q("cart-panel")?.focus();
}

function toggleMobileNav(force) {
  const nav = q("mobile-nav");
  const button = q("hamburger");
  if (!nav || !button) return;

  const open = typeof force === "boolean" ? force : !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  nav.setAttribute("aria-hidden", open ? "false" : "true");
  button.setAttribute("aria-expanded", open ? "true" : "false");

  if (open) q("mobile-nav-panel")?.focus();
}

function toast(message) {
  const current = document.querySelector(".toast");
  if (current) current.remove();
  if (STATE.toastTimer) clearTimeout(STATE.toastTimer);

  const node = el("div", { class: "toast" }, message);
  document.body.appendChild(node);

  requestAnimationFrame(() => node.classList.add("show"));

  STATE.toastTimer = setTimeout(() => {
    node.classList.remove("show");
    setTimeout(() => node.remove(), 200);
  }, 1700);
}

function populateCategoryFilter() {
  const select = q("category-filter");
  if (!select) return;

  categoryList().forEach((category) => {
    select.appendChild(el("option", { value: category }, category));
  });
}

function bindFilters() {
  q("search-input")?.addEventListener("input", (event) => {
    STATE.query = event.target.value;
    renderInventory();
  });

  q("category-filter")?.addEventListener("change", (event) => {
    STATE.category = event.target.value;
    renderInventory();
  });

  q("sort-filter")?.addEventListener("change", (event) => {
    STATE.sort = event.target.value;
    renderInventory();
  });

  q("stock-only")?.addEventListener("change", (event) => {
    STATE.stockOnly = Boolean(event.target.checked);
    renderInventory();
  });
}

function bindGlobalActions() {
  q("random-drop-btn")?.addEventListener("click", () => dropRandomDeal(false));
  q("random-top")?.addEventListener("click", () => dropRandomDeal(true));
  q("surprise-btn")?.addEventListener("click", () => dropRandomDeal(true));

  q("cart-btn")?.addEventListener("click", () => toggleCart());
  q("cart-close")?.addEventListener("click", () => toggleCart(false));
  q("cart-overlay")?.addEventListener("click", () => toggleCart(false));

  q("hamburger")?.addEventListener("click", () => toggleMobileNav());
  q("mobile-close")?.addEventListener("click", () => toggleMobileNav(false));
  q("mobile-nav-overlay")?.addEventListener("click", () => toggleMobileNav(false));

  document.querySelectorAll(".mobile-nav-panel a").forEach((link) => {
    link.addEventListener("click", () => toggleMobileNav(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleCart(false);
      toggleMobileNav(false);
    }
  });
}

function init() {
  populateCategoryFilter();
  bindFilters();
  bindGlobalActions();

  renderFeatured();
  renderInventory();
  renderBundles();
  renderCart();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window.APP = {
  INVENTORY,
  BUNDLES,
  STATE,
  addToCart,
  dropRandomDeal,
  renderInventory,
  renderCart
};
