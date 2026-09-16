const focusableSelector = "a, button, input, select, textarea";

export function initMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const closeBtn = document.querySelector("[data-menu-close]");
  const drawer = document.querySelector("[data-mobile-nav]");
  const backdrop = document.querySelector("[data-menu-backdrop]");

  if (!toggle || !drawer) {
    return;
  }

  const setOpen = (open) => {
    drawer.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("is-locked", open);
    if (open) {
      drawer.querySelector(focusableSelector)?.focus();
    } else {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => setOpen(true));
  closeBtn?.addEventListener("click", () => setOpen(false));
  backdrop?.addEventListener("click", () => setOpen(false));

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("is-open")) {
      setOpen(false);
    }
  });
}

export function initSearchModal() {
  const openers = document.querySelectorAll("[data-search-open]");
  const modal = document.querySelector("[data-search-modal]");
  const closeBtn = document.querySelector("[data-search-close]");
  const form = document.querySelector("[data-header-search-form]");
  const input = form?.querySelector("input");

  if (!modal) {
    return;
  }

  const setOpen = (open) => {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("is-locked", open);
    if (open) {
      input?.focus();
    }
  };

  openers.forEach((btn) => btn.addEventListener("click", () => setOpen(true)));
  closeBtn?.addEventListener("click", () => setOpen(false));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      setOpen(false);
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input?.value.trim();
    setOpen(false);
    const products = document.querySelector("#products");
    if (products) {
      products.scrollIntoView({ behavior: "smooth" });
      products.dispatchEvent(
        new CustomEvent("teta:search", { detail: { query } })
      );
      return;
    }
    const target = new URL("index.html", window.location.href);
    target.hash = "products";
    window.location.assign(target.href);
  });
}
