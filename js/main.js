import { initMenu, initSearchModal } from "./menu.js";
import { initCarousels, initHeroSlider } from "./slider.js";
import {
  renderProductRails,
  bindProductCtas,
  initProductSearch,
} from "./products.js";

function pad(value) {
  return String(value).padStart(2, "0");
}

function initCountdown() {
  const root = document.querySelector("[data-countdown]");
  if (!root) {
    return;
  }

  const target = new Date(root.dataset.countdown).getTime();

  const tick = () => {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    root.querySelector("[data-days]").textContent = pad(days);
    root.querySelector("[data-hours]").textContent = pad(hours);
    root.querySelector("[data-minutes]").textContent = pad(minutes);
    root.querySelector("[data-seconds]").textContent = pad(seconds);
  };

  tick();
  window.setInterval(tick, 1000);
}

function initNavHighlight() {
  const links = document.querySelectorAll(".site-nav__link");
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    const y = window.scrollY + 120;
    let current = sections[0];
    sections.forEach((section) => {
      if (section.offsetTop <= y) {
        current = section;
      }
    });
    links.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${current.id}`
      );
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initSearchModal();
  renderProductRails();
  bindProductCtas();
  initProductSearch();
  initHeroSlider();
  initCarousels();
  initCountdown();
  initNavHighlight();
});
