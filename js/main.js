import { initMenu, initSearchModal } from "./menu.js";
import { initCarousels, initHeroSlider } from "./slider.js";
import {
  renderProductRails,
  bindProductCtas,
  initProductSearch,
} from "./products.js";
import { initFaq } from "./faq.js";
import { initCustomSelects } from "./select.js";
import { initBlogArchive } from "./blog.js";

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
  const items = [...links]
    .map((link) => {
      const href = link.getAttribute("href") || "";
      const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
      if (!hash || hash === "#") {
        return null;
      }
      const section = document.querySelector(hash);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!items.length) {
    return;
  }

  const onScroll = () => {
    const y = window.scrollY + 120;
    const visible = items.filter((item) => item.section.offsetTop <= y);
    const current = visible.reduce((best, item) => {
      return item.section.offsetTop >= best.section.offsetTop ? item : best;
    }, visible[0] || items[0]);

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (!href.includes("#")) {
        return;
      }
      const hash = `#${href.split("#")[1]}`;
      link.classList.toggle("is-active", hash === `#${current.section.id}`);
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
  initFaq();
  initCustomSelects();
  initBlogArchive();
});
