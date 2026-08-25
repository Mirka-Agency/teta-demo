export function initFaq() {
  const root = document.querySelector("[data-faq]");
  if (!root) {
    return;
  }

  const items = [...root.querySelectorAll(".faq__item")];

  const setOpen = (item, open) => {
    const trigger = item.querySelector("[data-faq-trigger]");
    const panel = item.querySelector("[data-faq-panel]");
    if (!trigger || !panel) {
      return;
    }

    item.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
  };

  items.forEach((item) => {
    const trigger = item.querySelector("[data-faq-trigger]");
    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", () => {
      const willOpen = trigger.getAttribute("aria-expanded") !== "true";
      items.forEach((other) => setOpen(other, other === item && willOpen));
    });
  });
}
