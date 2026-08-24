function getVisibleCount(carousel) {
  const desktop = Number(carousel.dataset.desktop || 4);
  const tablet = Number(carousel.dataset.tablet || 3);
  const mobile = Number(carousel.dataset.mobile || 1);
  const width = window.innerWidth;

  if (width >= 1024) {
    return desktop;
  }
  if (width >= 768) {
    return tablet;
  }
  return mobile;
}

export function updateCarousel(carousel, { animate = false } = {}) {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
  if (!track || slides.length === 0) {
    return;
  }

  const visible = getVisibleCount(carousel);
  const gap = 12;
  slides.forEach((slide) => {
    slide.style.flex = `0 0 calc((100% - ${(visible - 1) * gap}px) / ${visible})`;
  });

  const maxIndex = Math.max(0, slides.length - visible);
  let index = Number(carousel.dataset.index || 0);
  index = Math.min(index, maxIndex);
  carousel.dataset.index = String(index);

  const slideWidth = slides[0].getBoundingClientRect().width + gap;
  const offset = index * slideWidth;

  if (!animate) {
    carousel.classList.remove("is-ready");
  }

  track.style.transform = `translateX(${offset}px)`;

  if (animate) {
    carousel.classList.add("is-ready");
  }
}

export function refreshCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(updateCarousel);
}

export function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    carousel.dataset.index = "0";

    const move = (step) => {
      const slides = carousel.querySelectorAll("[data-carousel-slide]");
      const visible = getVisibleCount(carousel);
      const maxIndex = Math.max(0, slides.length - visible);
      let index = Number(carousel.dataset.index || 0) + step;
      if (index < 0) {
        index = maxIndex;
      }
      if (index > maxIndex) {
        index = 0;
      }
      carousel.dataset.index = String(index);
      updateCarousel(carousel, { animate: true });
    };

    prev?.addEventListener("click", () => move(-1));
    next?.addEventListener("click", () => move(1));

    if (carousel.dataset.autoplay === "true") {
      window.setTimeout(() => {
        window.setInterval(() => move(1), 5000);
      }, 6000);
    }
  });

  window.addEventListener("resize", () => {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      updateCarousel(carousel, { animate: false });
    });
  });

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    updateCarousel(carousel, { animate: false });
  });
}

export function initHeroSlider() {
  const root = document.querySelector("[data-hero-slider]");
  if (!root) {
    return;
  }

  const slides = [...root.querySelectorAll("[data-hero-slide]")];
  const prev = root.querySelector("[data-hero-prev]");
  const next = root.querySelector("[data-hero-next]");
  let index = 0;

  const show = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
    });
  };

  prev?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));
  window.setInterval(() => show(index + 1), 5000);
}
