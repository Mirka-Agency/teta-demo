export function initCustomSelects() {
  const fields = document.querySelectorAll(".field-select__control");
  if (fields.length === 0) {
    return;
  }

  const closeAll = (except) => {
    document.querySelectorAll(".field-select.is-open").forEach((field) => {
      if (field === except) {
        return;
      }
      field.classList.remove("is-open");
      field.querySelector("[data-select-trigger]")?.setAttribute("aria-expanded", "false");
      field.querySelector("[data-select-list]")?.setAttribute("hidden", "");
    });
  };

  fields.forEach((control) => {
    const select = control.querySelector("select");
    if (!select || control.querySelector("[data-select-trigger]")) {
      return;
    }

    const field = control.closest(".field-select");
    const options = [...select.options];
    const listId = `${select.id}-list`;

    select.classList.add("field-select__native");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "field-select__trigger";
    trigger.dataset.selectTrigger = "";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", listId);
    if (select.id) {
      trigger.id = `${select.id}-trigger`;
      const label = document.querySelector(`label[for="${select.id}"]`);
      if (label) {
        label.htmlFor = trigger.id;
      }
    }

    const value = document.createElement("span");
    value.className = "field-select__value";
    value.dataset.selectValue = "";
    value.textContent = options[select.selectedIndex]?.textContent || "انتخاب کنید";
    if (!select.value) {
      value.classList.add("is-placeholder");
    }

    const chevron = document.createElement("span");
    chevron.className = "field-select__chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.innerHTML = '<i class="bi bi-chevron-down"></i>';

    trigger.append(value, chevron);

    const list = document.createElement("ul");
    list.className = "field-select__list";
    list.id = listId;
    list.dataset.selectList = "";
    list.setAttribute("role", "listbox");
    list.hidden = true;

    options.forEach((option, index) => {
      const item = document.createElement("li");
      item.className = "field-select__option";
      item.setAttribute("role", "option");
      item.dataset.value = option.value;
      item.textContent = option.textContent;
      item.tabIndex = -1;
      if (option.disabled) {
        item.setAttribute("aria-disabled", "true");
      }
      if (index === select.selectedIndex) {
        item.setAttribute("aria-selected", "true");
        item.classList.add("is-selected");
      } else {
        item.setAttribute("aria-selected", "false");
      }
      list.append(item);
    });

    control.append(trigger, list);

    const syncFromSelect = () => {
      const selected = options[select.selectedIndex];
      value.textContent = selected?.textContent || "انتخاب کنید";
      value.classList.toggle("is-placeholder", !select.value);
      list.querySelectorAll(".field-select__option").forEach((item) => {
        const isSelected = item.dataset.value === select.value;
        item.classList.toggle("is-selected", isSelected);
        item.setAttribute("aria-selected", String(isSelected));
      });
    };

    const setOpen = (open) => {
      field?.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      list.hidden = !open;
      if (open) {
        list.querySelector(".is-selected")?.focus();
      }
    };

    trigger.addEventListener("click", () => {
      const willOpen = trigger.getAttribute("aria-expanded") !== "true";
      closeAll(field);
      setOpen(willOpen);
    });

    list.addEventListener("click", (event) => {
      const option = event.target.closest(".field-select__option");
      if (!option || option.getAttribute("aria-disabled") === "true") {
        return;
      }
      select.value = option.dataset.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      syncFromSelect();
      setOpen(false);
      trigger.focus();
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        closeAll(field);
        setOpen(true);
      }
    });

    list.addEventListener("keydown", (event) => {
      const items = [...list.querySelectorAll('.field-select__option:not([aria-disabled="true"])')];
      const current = document.activeElement;
      const index = items.indexOf(current);

      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        trigger.focus();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        items[Math.min(index + 1, items.length - 1)]?.focus();
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        items[Math.max(index - 1, 0)]?.focus();
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        current?.click();
      }
    });

    select.addEventListener("change", syncFromSelect);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".field-select")) {
      closeAll();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });
}
