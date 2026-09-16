const PAGE_SIZE = 6;

const faDigits = "۰۱۲۳۴۵۶۷۸۹";

export const posts = [
  {
    id: "oil-change",
    title: "انتخاب بهترین روغن موتور مناسب و زمان تعویض آن",
    excerpt:
      "نگهداری درست موتور و سیستم تهویه، عمر قطعات کولر و بخاری را بالا می‌برد و هزینه تعمیر را کم می‌کند.",
    category: "راهنمای خرید",
    date: "۱۴۰۳/۱۱/۰۳",
    datetime: "2025-01-22",
    image: "assets/blog/blog-1.jpg",
  },
  {
    id: "shahin-handling",
    title: "عملکرد شاهین در پیچ‌های تند",
    excerpt:
      "پایداری حرارتی موتور در رانندگی شهری به سلامت رادیاتور، فن و مدار تهویه بستگی دارد.",
    category: "نگهداری خودرو",
    date: "۱۴۰۳/۱۰/۰۳",
    datetime: "2024-12-23",
    image: "assets/blog/blog-2.jpg",
  },
  {
    id: "coolant-temp",
    title: "محدوده نرمال درجه آب موتور خودرو چه قدر است؟",
    excerpt:
      "دمای غیرعادی آب می‌تواند نشانه اختلال در فن، رادیاتور یا قطعات سرمایش باشد.",
    category: "نگهداری خودرو",
    date: "۱۴۰۳/۱۰/۰۳",
    datetime: "2024-12-23",
    image: "assets/blog/blog-3.jpg",
  },
  {
    id: "wear-reduction",
    title: "راه‌های کاهش استهلاک خودرو",
    excerpt:
      "سرویس دوره‌ای کولر و بخاری یکی از ساده‌ترین راه‌ها برای حفظ راندمان و کاهش استهلاک است.",
    category: "نگهداری خودرو",
    date: "۱۴۰۳/۱۰/۰۳",
    datetime: "2024-12-23",
    image: "assets/blog/blog-4.jpg",
  },
  {
    id: "ac-gas-charge",
    title: "بهترین زمان شارژ گاز کولر خودرو",
    excerpt:
      "کاهش سرمای کابین و یخ‌زدگی اواپراتور معمولاً به کمبود گاز یا نشتی مدار مربوط است. زمان مناسب شارژ را بشناسید.",
    category: "سیستم کولر",
    date: "۱۴۰۳/۰۹/۲۸",
    datetime: "2024-12-18",
    image: "assets/blog/blog-1.jpg",
  },
  {
    id: "compressor-failure",
    title: "علائم خرابی کمپرسور کولر و زمان تعویض",
    excerpt:
      "صدای غیرعادی، ضعف سرمایش و روغن‌ریزی از نشانه‌های رایج خرابی کمپرسور هستند و در خرید عمده باید به سازگاری خودرو توجه شود.",
    category: "سیستم کولر",
    date: "۱۴۰۳/۰۹/۱۸",
    datetime: "2024-12-08",
    image: "assets/blog/blog-2.jpg",
  },
  {
    id: "evaporator-condenser",
    title: "تفاوت اواپراتور و کندانسور در سیستم تهویه",
    excerpt:
      "اواپراتور سرما را به کابین می‌رساند و کندانسور حرارت را دفع می‌کند. شناخت این دو قطعه انتخاب عمده را دقیق‌تر می‌کند.",
    category: "راهنمای خرید",
    date: "۱۴۰۳/۰۹/۰۵",
    datetime: "2024-11-25",
    image: "assets/blog/blog-3.jpg",
  },
  {
    id: "heater-radiator",
    title: "نگهداری رادیاتور بخاری پیش از فصل سرما",
    excerpt:
      "گرفتگی رادیاتور بخاری گرمایش کابین را ضعیف می‌کند. شست‌وشو و کنترل شیلنگ‌ها قبل از زمستان ضروری است.",
    category: "قطعات بخاری",
    date: "۱۴۰۳/۰۸/۲۲",
    datetime: "2024-11-12",
    image: "assets/blog/blog-4.jpg",
  },
  {
    id: "ac-odor",
    title: "علت بوی نامطبوع کولر خودرو چیست؟",
    excerpt:
      "رطوبت روی اواپراتور و آلودگی فیلتر کابین بوی نامطبوع ایجاد می‌کند. سرویس مدار و تعویض فیلتر مشکل را برطرف می‌کند.",
    category: "سیستم کولر",
    date: "۱۴۰۳/۰۸/۱۰",
    datetime: "2024-10-31",
    image: "assets/blog/blog-1.jpg",
  },
  {
    id: "ac-fan",
    title: "چه زمانی فن کولر نیاز به بررسی دارد؟",
    excerpt:
      "اگر کندانسور داغ می‌ماند یا کمپرسور زود قطع می‌شود، فن خنک‌کننده را بررسی کنید تا از آسیب مدار تهویه جلوگیری شود.",
    category: "سیستم کولر",
    date: "۱۴۰۳/۰۷/۲۶",
    datetime: "2024-10-17",
    image: "assets/blog/blog-2.jpg",
  },
  {
    id: "wholesale-hvac",
    title: "نکات خرید عمده قطعات تهویه برای تعمیرگاه‌ها",
    excerpt:
      "برای سفارش عمده، کد فنی، برند و سازگاری خودرو را مشخص کنید تا موجودی، قیمت و زمان تأمین دقیق اعلام شود.",
    category: "راهنمای خرید",
    date: "۱۴۰۳/۰۷/۱۲",
    datetime: "2024-10-03",
    image: "assets/blog/blog-3.jpg",
  },
  {
    id: "heater-service",
    title: "سرویس سیستم بخاری قبل از زمستان",
    excerpt:
      "کنترل شیر بخاری، رادیاتور و فن کابین قبل از سرما، از خوابیدن گرمایش در روزهای سرد جلوگیری می‌کند.",
    category: "قطعات بخاری",
    date: "۱۴۰۳/۰۶/۳۰",
    datetime: "2024-09-20",
    image: "assets/blog/blog-4.jpg",
  },
];

const categories = ["راهنمای خرید", "نگهداری خودرو", "سیستم کولر", "قطعات بخاری"];

function toFaNumber(value) {
  return String(value).replace(/\d/g, (digit) => faDigits[Number(digit)]);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cardTemplate(post, { featured = false } = {}) {
  const className = featured ? "media-card media-card--featured" : "media-card";
  return `
    <article class="${className}">
      <a class="media-card__link" href="blog.html" aria-label="مطالعه مقاله: ${escapeHtml(post.title)}">
        <span class="media-card__image-wrap">
          <img class="media-card__image" src="${escapeHtml(post.image)}" alt="">
          <span class="media-card__category">${escapeHtml(post.category)}</span>
        </span>
        <span class="media-card__body">
          <h3 class="media-card__title">${escapeHtml(post.title)}</h3>
          <p class="media-card__excerpt">${escapeHtml(post.excerpt)}</p>
          <span class="media-card__footer">
            <time class="media-card__date" datetime="${escapeHtml(post.datetime)}">${escapeHtml(post.date)}</time>
            <span class="media-card__cta">مطالعه مقاله <i class="bi bi-chevron-left" aria-hidden="true"></i></span>
          </span>
        </span>
      </a>
    </article>
  `;
}

function getFilteredPosts(category, query) {
  const normalized = query.trim().toLowerCase();
  return posts.filter((post) => {
    const matchesCategory = category === "all" || post.category === category;
    const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
    const matchesQuery = !normalized || haystack.includes(normalized);
    return matchesCategory && matchesQuery;
  });
}

function renderSidebar(root, state) {
  const categoriesMount = root.querySelector("[data-blog-categories]");
  const recentMount = root.querySelector("[data-blog-recent]");

  if (categoriesMount) {
    const counts = categories.map((name) => ({
      name,
      count: posts.filter((post) => post.category === name).length,
    }));

    categoriesMount.innerHTML = `
      <h2 class="blog-widget__title">دسته‌بندی‌ها</h2>
      <ul class="blog-widget__list">
        <li>
          <button class="blog-widget__link${state.category === "all" ? " is-active" : ""}" type="button" data-blog-category="all">
            همه مقالات
            <span>${toFaNumber(posts.length)}</span>
          </button>
        </li>
        ${counts
          .map(
            (item) => `
          <li>
            <button class="blog-widget__link${state.category === item.name ? " is-active" : ""}" type="button" data-blog-category="${escapeHtml(item.name)}">
              ${escapeHtml(item.name)}
              <span>${toFaNumber(item.count)}</span>
            </button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  if (recentMount) {
    recentMount.innerHTML = `
      <h2 class="blog-widget__title">آخرین مقالات</h2>
      <ul class="recent-post-list">
        ${posts
          .slice(0, 4)
          .map(
            (post) => `
          <li>
            <a class="recent-post" href="blog.html">
              <img class="recent-post__image" src="${escapeHtml(post.image)}" alt="">
              <span class="recent-post__body">
                <span class="recent-post__title">${escapeHtml(post.title)}</span>
                <time class="recent-post__date" datetime="${escapeHtml(post.datetime)}">${escapeHtml(post.date)}</time>
              </span>
            </a>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
}

function renderToolbar(root, state) {
  root.querySelectorAll("[data-blog-filter]").forEach((chip) => {
    const isActive = chip.dataset.blogFilter === state.category;
    chip.classList.toggle("is-active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });
}

function renderList(root, state) {
  const featuredMount = root.querySelector("[data-blog-featured]");
  const gridMount = root.querySelector("[data-blog-grid]");
  const paginationMount = root.querySelector("[data-blog-pagination]");
  const emptyMount = root.querySelector("[data-blog-empty]");
  const countMount = root.querySelector("[data-blog-count]");
  const filtered = getFilteredPosts(state.category, state.query);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(state.page, totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const slice = filtered.slice(start, start + PAGE_SIZE);
  const showFeatured = page === 1 && state.category === "all" && !state.query.trim() && slice.length > 0;
  const featured = showFeatured ? slice[0] : null;
  const gridItems = featured ? slice.slice(1) : slice;

  if (countMount) {
    countMount.hidden = filtered.length === 0;
    countMount.textContent = filtered.length
      ? `${toFaNumber(filtered.length)} مقاله در این فهرست`
      : "";
  }

  if (featuredMount) {
    featuredMount.hidden = !featured;
    featuredMount.innerHTML = featured ? cardTemplate(featured, { featured: true }) : "";
  }

  if (gridMount) {
    gridMount.hidden = gridItems.length === 0;
    gridMount.innerHTML = gridItems.map((post) => cardTemplate(post)).join("");
  }

  if (emptyMount) {
    emptyMount.hidden = filtered.length > 0;
  }

  if (paginationMount) {
    paginationMount.hidden = filtered.length <= PAGE_SIZE;
    if (filtered.length > PAGE_SIZE) {
      const buttons = Array.from({ length: totalPages }, (_, index) => {
        const number = index + 1;
        return `
          <button class="pagination__btn${number === page ? " is-active" : ""}" type="button" data-blog-page="${number}" aria-label="صفحه ${toFaNumber(number)}" ${number === page ? 'aria-current="page"' : ""}>
            ${toFaNumber(number)}
          </button>
        `;
      }).join("");

      paginationMount.innerHTML = `
        <button class="pagination__btn pagination__btn--nav" type="button" data-blog-page="${page - 1}" ${page === 1 ? "disabled" : ""} aria-label="صفحه قبلی">
          <i class="bi bi-chevron-right" aria-hidden="true"></i>
        </button>
        ${buttons}
        <button class="pagination__btn pagination__btn--nav" type="button" data-blog-page="${page + 1}" ${page === totalPages ? "disabled" : ""} aria-label="صفحه بعدی">
          <i class="bi bi-chevron-left" aria-hidden="true"></i>
        </button>
      `;
    } else {
      paginationMount.innerHTML = "";
    }
  }

  state.page = page;
}

export function initBlogArchive() {
  const root = document.querySelector("[data-blog-archive]");
  if (!root) {
    return;
  }

  const state = {
    category: "all",
    query: "",
    page: 1,
  };

  const searchForm = root.querySelector("[data-blog-search]");
  const searchInput = searchForm?.querySelector("input");

  const render = () => {
    renderToolbar(root, state);
    renderSidebar(root, state);
    renderList(root, state);
  };

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = searchInput?.value || "";
    state.page = 1;
    render();
  });

  root.addEventListener("click", (event) => {
    const filterBtn = event.target.closest("[data-blog-filter], [data-blog-category]");
    if (filterBtn) {
      state.category = filterBtn.dataset.blogFilter || filterBtn.dataset.blogCategory;
      state.page = 1;
      render();
      return;
    }

    const pageBtn = event.target.closest("[data-blog-page]");
    if (!pageBtn || pageBtn.disabled) {
      return;
    }
    const nextPage = Number(pageBtn.dataset.blogPage);
    if (!Number.isFinite(nextPage) || nextPage < 1) {
      return;
    }
    state.page = nextPage;
    render();
    root.querySelector("[data-blog-main]")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  render();
}
