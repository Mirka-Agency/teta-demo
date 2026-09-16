import { refreshCarousels } from "./slider.js";

export const products = [
  {
    id: "cmp-sanden-405",
    name: "کمپرسور کولر خودرو ساندن",
    code: "TN-41021",
    brand: "Sanden",
    category: "کمپرسور کولر",
    vehicle: "پژو ۴۰۵، سمند، پارس",
    availability: "موجود",
    wholesale: "فروش عمده از ۱۰ عدد",
    image: "assets/products/product-pic8.png",
    oldPrice: 5900000,
    price: 4850000,
    featured: true,
    newest: true,
  },
  {
    id: "cnd-vfn-206",
    name: "کندانسور کولر پژو ۲۰۶",
    code: "TN-20611",
    brand: "VFN",
    category: "کندانسور",
    vehicle: "پژو ۲۰۶، ۲۰۷",
    availability: "موجود",
    wholesale: "قیمت ویژه عمده",
    image: "assets/products/product-pic11.png",
    oldPrice: 2650000,
    price: 2150000,
    featured: true,
    newest: true,
  },
  {
    id: "evp-sardsaz-pride",
    name: "اواپراتور کولر پراید",
    code: "TN-13108",
    brand: "سردساز",
    category: "اواپراتور",
    vehicle: "پراید، تیبا، ساینا",
    availability: "موجود",
    wholesale: "تأمین مستمر عمده",
    image: "assets/products/product-pic5.png",
    oldPrice: 1550000,
    price: 1280000,
    featured: true,
    newest: false,
  },
  {
    id: "fan-pukka-pars",
    name: "فن کندانسور کولر خودرو",
    code: "TN-40533",
    brand: "Pukka",
    category: "فن کولر",
    vehicle: "پژو پارس، ۴۰۵",
    availability: "موجود",
    wholesale: "ارسال سریع عمده",
    image: "assets/products/product-pic3.png",
    oldPrice: 1120000,
    price: 890000,
    featured: true,
    newest: true,
  },
  {
    id: "heater-sooyab-samand",
    name: "رادیاتور بخاری سمند",
    code: "TN-22018",
    brand: "سویاب صنعت",
    category: "بخاری",
    vehicle: "سمند، دنا",
    availability: "موجود",
    wholesale: "فروش عمده",
    image: "assets/products/product-pic9.png",
    oldPrice: 850000,
    price: 720000,
    featured: false,
    newest: true,
  },
  {
    id: "dryer-sanden",
    name: "فیلتر درایر سیستم تهویه",
    code: "TN-88012",
    brand: "Sanden",
    category: "درایر",
    vehicle: "پژو ۴۰۵، سمند، زانتیا",
    availability: "موجود",
    wholesale: "بسته‌بندی کارتنی عمده",
    image: "assets/products/product-pic12.png",
    oldPrice: 420000,
    price: 340000,
    featured: true,
    newest: true,
  },
  {
    id: "switch-vfn",
    name: "سوئیچ فشار گاز کولر",
    code: "TN-67044",
    brand: "VFN",
    category: "سنسور و سوئیچ",
    vehicle: "پژو ۲۰۶، رانا",
    availability: "موجود",
    wholesale: "حداقل سفارش عمده",
    image: "assets/products/product-pic6.png",
    oldPrice: 280000,
    price: 210000,
    featured: false,
    newest: true,
  },
  {
    id: "hose-sardsaz",
    name: "شیلنگ فشار قوی کولر",
    code: "TN-55027",
    brand: "سردساز",
    category: "شیلنگ و لوله",
    vehicle: "پراید، پژو ۴۰۵",
    availability: "در حال تأمین",
    wholesale: "استعلام قیمت عمده",
    image: "assets/products/product-pic14.png",
    oldPrice: 520000,
    price: 450000,
    featured: true,
    newest: false,
  },
];

function toPersianDigits(value) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

function formatToman(amount) {
  return `${toPersianDigits(amount.toLocaleString("en-US"))} تومان`;
}

function pricingMarkup(product) {
  if (!product.price) {
    return "";
  }

  return `
    <div class="product-card__pricing">
      <div class="product-card__prices">
        ${product.oldPrice ? `<span class="product-card__price-old">${formatToman(product.oldPrice)}</span>` : ""}
        <span class="product-card__price">${formatToman(product.price)}</span>
      </div>
    </div>
  `;
}

function discountMarkup(product) {
  if (!product.oldPrice || !product.price) {
    return "";
  }

  const discount = Math.round((1 - product.price / product.oldPrice) * 100);
  if (discount <= 0) {
    return "";
  }

  return `<span class="product-card__discount">${toPersianDigits(discount)}٪</span>`;
}

function cardTemplate(product, options = {}) {
  const loading = options.eager ? "eager" : "lazy";
  const variant = options.variant || "default";
  const meta =
    variant === "newest"
      ? `<p class="product-card__code">کد محصول: ${product.code}</p>`
      : `<p class="product-card__brand">برند: ${product.brand}</p>`;

  return `
    <article class="product-card">
      <div class="product-card__media">
        <img class="product-card__image" src="${product.image}" alt="${product.name}" width="400" height="300" decoding="async" loading="${loading}">
        ${discountMarkup(product)}
      </div>
      <h3 class="product-card__title">${product.name}</h3>
      ${meta}
      ${pricingMarkup(product)}
      <button type="button" class="primary-button product-card__cta" data-inquiry-product="${product.name}">
        استعلام خرید
        <i class="bi bi-arrow-left" aria-hidden="true"></i>
      </button>
    </article>
  `;
}

export function renderProductRails() {
  const mounts = document.querySelectorAll("[data-product-rail]");

  mounts.forEach((mount) => {
    const kind = mount.dataset.productRail;
    let list = products.filter((item) => item[kind]);
    const isGrid = mount.classList.contains("product-grid");
    const variant = kind === "newest" ? "newest" : "featured";

    if (kind === "newest" && isGrid) {
      list = list.slice(0, 4);
    }

    mount.innerHTML = list
      .map((item) => {
        const card = cardTemplate(item, {
          eager: kind === "newest" || kind === "featured",
          variant,
        });
        return isGrid ? card : `<div class="carousel__slide" data-carousel-slide>${card}</div>`;
      })
      .join("");
  });
}

export function bindProductCtas() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-inquiry-product]");
    if (!button) {
      return;
    }
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  });
}

export function initProductSearch() {
  const rail = document.querySelector('[data-product-rail="newest"]');
  const section = document.querySelector("#products");

  const applyFilter = (query) => {
    if (!rail) {
      return;
    }
    const normalized = (query || "").trim().toLowerCase();
    const filtered = products.filter((item) => {
      const haystack = `${item.name} ${item.brand} ${item.vehicle} ${item.category}`.toLowerCase();
      return !normalized || haystack.includes(normalized);
    });
    const source = filtered.length ? filtered : products;
    const isGrid = rail.classList.contains("product-grid");
    rail.innerHTML = source
      .map((item) => {
        const card = cardTemplate(item, { variant: "newest" });
        return isGrid ? card : `<div class="carousel__slide" data-carousel-slide>${card}</div>`;
      })
      .join("");
    const carousel = rail.closest("[data-carousel]");
    if (carousel) {
      carousel.dataset.index = "0";
      refreshCarousels();
    }
  };

  section?.addEventListener("teta:search", (event) => {
    applyFilter(event.detail?.query || "");
  });
}
