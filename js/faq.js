export function initFaq() {
  const root = document.querySelector("[data-faq]");
  if (!root) {
    return;
  }

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

  root.querySelectorAll("[data-faq-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq__item");
      if (!item) {
        return;
      }
      setOpen(item, trigger.getAttribute("aria-expanded") !== "true");
    });
  });
}
