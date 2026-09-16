const PAGE_SIZE = 6;
const AUTHOR = "تیم فنی تتا";
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
    readTime: "۷ دقیقه",
    tags: ["روغن موتور", "نگهداری خودرو", "سیستم تهویه"],
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
    readTime: "۶ دقیقه",
    tags: ["شاهین", "رادیاتور", "نگهداری خودرو"],
  },
  {
    id: "coolant-temp",
    title: "محدوده نرمال درجه آب موتور خودرو چه قدر است؟",
    excerpt: "دمای غیرعادی آب می‌تواند نشانه اختلال در فن، رادیاتور یا قطعات سرمایش باشد.",
    category: "نگهداری خودرو",
    date: "۱۴۰۳/۱۰/۰۳",
    datetime: "2024-12-23",
    image: "assets/blog/blog-3.jpg",
    readTime: "۵ دقیقه",
    tags: ["دمای آب", "فن کولر", "خنک‌کننده"],
  },
  {
    id: "wear-reduction",
    title: "راه‌های کاهش استهلاک خودرو",
    excerpt: "سرویس دوره‌ای کولر و بخاری یکی از ساده‌ترین راه‌ها برای حفظ راندمان و کاهش استهلاک است.",
    category: "نگهداری خودرو",
    date: "۱۴۰۳/۱۰/۰۳",
    datetime: "2024-12-23",
    image: "assets/blog/blog-4.jpg",
    readTime: "۶ دقیقه",
    tags: ["استهلاک", "سرویس دوره‌ای", "تهویه خودرو"],
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
    readTime: "۷ دقیقه",
    tags: ["شارژ گاز", "کولر خودرو", "اواپراتور"],
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
    readTime: "۸ دقیقه",
    tags: ["کمپرسور کولر", "خرید عمده", "عیب‌یابی"],
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
    readTime: "۶ دقیقه",
    tags: ["اواپراتور", "کندانسور", "راهنمای خرید"],
  },
  {
    id: "heater-radiator",
    title: "نگهداری رادیاتور بخاری پیش از فصل سرما",
    excerpt: "گرفتگی رادیاتور بخاری گرمایش کابین را ضعیف می‌کند. شست‌وشو و کنترل شیلنگ‌ها قبل از زمستان ضروری است.",
    category: "قطعات بخاری",
    date: "۱۴۰۳/۰۸/۲۲",
    datetime: "2024-11-12",
    image: "assets/blog/blog-4.jpg",
    readTime: "۵ دقیقه",
    tags: ["رادیاتور بخاری", "فصل سرما", "شست‌وشو"],
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
    readTime: "۵ دقیقه",
    tags: ["بوی کولر", "فیلتر کابین", "اواپراتور"],
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
    readTime: "۶ دقیقه",
    tags: ["فن کولر", "کندانسور", "کمپرسور"],
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
    readTime: "۷ دقیقه",
    tags: ["خرید عمده", "تعمیرگاه", "کد فنی"],
  },
  {
    id: "heater-service",
    title: "سرویس سیستم بخاری قبل از زمستان",
    excerpt: "کنترل شیر بخاری، رادیاتور و فن کابین قبل از سرما، از خوابیدن گرمایش در روزهای سرد جلوگیری می‌کند.",
    category: "قطعات بخاری",
    date: "۱۴۰۳/۰۶/۳۰",
    datetime: "2024-09-20",
    image: "assets/blog/blog-4.jpg",
    readTime: "۶ دقیقه",
    tags: ["بخاری خودرو", "سرویس زمستانی", "شیر بخاری"],
  },
];

const articleBodies = {
  "oil-change": {
    lead: "نگهداری درست موتور و سیستم تهویه، عمر قطعات کولر و بخاری را بالا می‌برد و هزینه تعمیر را کم می‌کند.",
    sections: [
      {
        title: "روغن موتور چه ربطی به سیستم تهویه دارد؟",
        paragraphs: [
          "روغن نامناسب یا کهنه، دمای موتور را بالا می‌برد و فشار بیشتری روی رادیاتور، فن و مدار کولر وارد می‌کند. در خودروهایی که کمپرسور با تسمه مشترک کار می‌کند، افزایش دما می‌تواند سرمایش کابین را هم ضعیف کند.",
          "برای تعمیرگاه‌ها و خریداران عمده، انتخاب گرید درست روغن در کنار کنترل قطعات تهویه، یک سرویس کامل و کم‌هزینه‌تر می‌سازد.",
        ],
      },
      {
        title: "زمان مناسب تعویض روغن را چطور تشخیص دهیم؟",
        paragraphs: [
          "کیلومتر اعلام‌شده سازنده نقطه شروع است، اما شرایط شهری، کارکرد کولر در تابستان و حمل بار می‌تواند بازه تعویض را کوتاه کند.",
        ],
        list: [
          "تیرگی بیش از حد روغن و بوی سوختگی",
          "افزایش دمای آب در ترافیک",
          "صدای خشک از موتور یا ضعیف شدن سرمایش هنگام کارکرد طولانی",
          "نشتی از واشرها که سطح روغن را پایین می‌آورد",
        ],
        callout: {
          title: "نکته تعمیرگاه",
          text: "همزمان با تعویض روغن، تسمه کمپرسور، سطح گاز کولر و عملکرد فن را هم بررسی کنید تا برگشت خودرو کم شود.",
        },
      },
      {
        title: "چک‌لیست سرویس همزمان روغن و تهویه",
        paragraphs: ["سرویس یکپارچه به ویژه برای تاکسی‌ها و ناوگان سبک، استهلاک کمپرسور و رادیاتور را کم می‌کند."],
        list: [
          "انتخاب روغن مطابق دفترچه و شرایط آب‌وهوایی",
          "کنترل سطح آب رادیاتور و سلامت ترموستات",
          "بازرسی شیلنگ‌های بخاری و کندانسور",
          "ثبت کد فنی فیلترها و قطعات مصرفی برای سفارش بعدی",
        ],
        figure: {
          src: "assets/blog/blog-3.jpg",
          alt: "بررسی دمای موتور و قطعات سیستم خنک‌کننده",
          caption: "دمای غیرعادی موتور معمولاً هم به روغن و هم به مدار خنک‌کننده مربوط است.",
        },
      },
      {
        title: "توصیه تتا برای تعمیرگاه‌ها و خریداران عمده",
        paragraphs: [
          "اگر پس از تعویض روغن همچنان دمای موتور یا ضعف کولر ادامه دارد، احتمالاً مشکل از فن، رادیاتور، کمپرسور یا نشتی مدار تهویه است. کد فنی قطعه، برند و نوع خودرو را برای استعلام موجودی ارسال کنید.",
        ],
      },
    ],
  },
  "shahin-handling": {
    lead: "پایداری حرارتی موتور در رانندگی شهری به سلامت رادیاتور، فن و مدار تهویه بستگی دارد.",
    sections: [
      {
        title: "چرا در پیچ و ترافیک دمای موتور بالا می‌رود؟",
        paragraphs: [
          "در رانندگی شهری شاهین، دور موتور و بار کولر هم‌زمان بالا می‌رود. اگر رادیاتور گرفته باشد یا فن به‌موقع وارد مدار نشود، پایداری خودرو در مسیرهای پرترافیک کم می‌شود.",
        ],
      },
      {
        title: "قطعات تهویه که باید کنترل شوند",
        list: [
          "رادیاتور و پره‌های کندانسور از نظر گرفتگی",
          "عملکرد فن خنک‌کننده در دور پایین و بالا",
          "سطح آب و سلامت درب رادیاتور",
          "تسمه و کلاچ کمپرسور کولر",
        ],
        callout: {
          title: "نکته تأمین قطعه",
          text: "برای شاهین، سازگاری فن، رادیاتور و کمپرسور را با کد فنی خودرو مطابقت دهید تا نصب در تعمیرگاه بدون برگشت انجام شود.",
        },
      },
      {
        title: "جمع‌بندی برای تعمیرگاه",
        paragraphs: [
          "قبل از بررسی جلوبندی یا فشار باد، مدار خنک‌کننده را چک کنید. بسیاری از شکایت‌های «ضعف در پیچ» در هوای گرم به دمای بالای موتور مربوط است، نه فقط سیستم تعلیق.",
        ],
      },
    ],
  },
  "coolant-temp": {
    lead: "دمای غیرعادی آب می‌تواند نشانه اختلال در فن، رادیاتور یا قطعات سرمایش باشد.",
    sections: [
      {
        title: "محدوده دمای نرمال آب موتور",
        paragraphs: [
          "در بیشتر خودروهای سواری، دمای آب پس از گرم شدن در محدوده ۹۰ تا ۱۰۵ درجه سانتی‌گراد پایدار می‌ماند. نوسان شدید یا رسیدن عقربه به محدوده خطر یعنی مدار خنک‌کننده نیاز به بررسی دارد.",
        ],
      },
      {
        title: "علت‌های رایج افزایش دما",
        list: [
          "خرابی فن یا رله فن",
          "گرفتگی رادیاتور و کندانسور",
          "ترموستات قفل‌شده",
          "کمبود گاز کولر که کمپرسور را تحت فشار می‌گذارد",
        ],
        callout: {
          title: "هشدار سرویس",
          text: "اگر دما فقط هنگام روشن بودن کولر بالا می‌رود، اول فن و کندانسور را بررسی کنید؛ تعویض بی‌مورد واترپمپ هزینه تعمیرگاه را زیاد می‌کند.",
        },
      },
      {
        title: "چه زمانی قطعه عوض شود؟",
        paragraphs: [
          "پس از کنترل سطح آب و هواگیری، اگر فن یا رادیاتور معیوب باشد تعویض قطعه اقتصادی‌تر از تکرار سرویس است. برای سفارش عمده، نوع خودرو و نوع فن (دوفن یا تک‌فن) را اعلام کنید.",
        ],
      },
    ],
  },
  "wear-reduction": {
    lead: "سرویس دوره‌ای کولر و بخاری یکی از ساده‌ترین راه‌ها برای حفظ راندمان و کاهش استهلاک است.",
    sections: [
      {
        title: "تهویه چه ربطی به استهلاک کلی خودرو دارد؟",
        paragraphs: [
          "کولر ضعیف موتور را بیشتر تحت فشار می‌گذارد و بخاری گرفته مصرف سوخت را در زمستان بالا می‌برد. سرویس مدار تهویه، استهلاک تسمه، کمپرسور و حتی سیستم خنک‌کننده را کم می‌کند.",
        ],
      },
      {
        title: "کارهای کم‌هزینه با اثر بالا",
        list: [
          "تعویض فیلتر کابین در بازه منظم",
          "شست‌وشوی اواپراتور در صورت بوی نامطبوع",
          "کنترل گاز کولر پیش از تابستان",
          "باز کردن مسیر رادیاتور بخاری قبل از سرما",
        ],
      },
      {
        title: "برنامه سرویس برای ناوگان",
        paragraphs: [
          "تعمیرگاه‌هایی که قطعات مصرفی تهویه را به‌صورت عمده تأمین می‌کنند، می‌توانند برنامه فصلی داشته باشند: بهار برای کولر و پاییز برای بخاری. تتا موجودی کمپرسور، کندانسور و قطعات بخاری را بر اساس همین نیاز تأمین می‌کند.",
        ],
      },
    ],
  },
  "ac-gas-charge": {
    lead: "کاهش سرمای کابین و یخ‌زدگی اواپراتور معمولاً به کمبود گاز یا نشتی مدار مربوط است. زمان مناسب شارژ را بشناسید.",
    sections: [
      {
        title: "بهترین زمان شارژ گاز چه موقع است؟",
        paragraphs: [
          "اوایل بهار، قبل از شروع گرما، بهترین زمان بررسی مدار است. شارژ بدون نشتی‌یابی فقط چند هفته دوام می‌آورد و کمپرسور را در معرض کار خشک قرار می‌دهد.",
        ],
      },
      {
        title: "علائمی که نباید نادیده گرفت",
        list: [
          "باد کولر گرم یا فقط کمی خنک",
          "یخ زدن شیلنگ اواپراتور",
          "روغن‌ریزی روی اتصالات",
          "قطع و وصل مکرر کمپرسور",
        ],
        callout: {
          title: "نکته فنی",
          text: "گاز را مطابق استاندارد خودرو شارژ کنید. مقدار بیش از حد به کندانسور و فن فشار می‌آورد و سرمای یکنواخت ایجاد نمی‌کند.",
        },
      },
      {
        title: "اگر بعد از شارژ سرما پایدار نماند",
        paragraphs: [
          "نشتی از اواپراتور، کندانسور یا اورینگ‌ها محتمل است. در این حالت قطعه معیوب باید عوض شود. برای خرید عمده، کد فنی کندانسور یا اواپراتور و مدل خودرو را ارسال کنید.",
        ],
      },
    ],
  },
  "compressor-failure": {
    lead: "صدای غیرعادی، ضعف سرمایش و روغن‌ریزی از نشانه‌های رایج خرابی کمپرسور هستند و در خرید عمده باید به سازگاری خودرو توجه شود.",
    sections: [
      {
        title: "کمپرسور چه زمانی نیاز به تعویض دارد؟",
        paragraphs: [
          "کمپرسور قلب مدار کولر است. اگر کلاچ درگیر نمی‌شود، صدای فلزی می‌آید یا روغن از بدنه نشت می‌کند، معمولاً تعمیر موقت به‌صرفه نیست و تعویض کامل توصیه می‌شود.",
        ],
      },
      {
        title: "علائم خرابی را جدی بگیرید",
        list: [
          "صدای جیغ یا تقه هنگام درگیر شدن کلاچ",
          "ضعف سرمایش با وجود شارژ گاز",
          "قفل شدن کمپرسور و پاره شدن تسمه",
          "براده فلز در مدار که کندانسور را هم تهدید می‌کند",
        ],
        figure: {
          src: "assets/blog/blog-4.jpg",
          alt: "کمپرسور کولر خودرو روی میز کار تعمیرگاه",
          caption: "پس از قفل شدن کمپرسور، شست‌وشوی مدار و کنترل کندانسور ضروری است.",
        },
      },
      {
        title: "نکته خرید عمده کمپرسور",
        paragraphs: [
          "پولی، تعداد شیار تسمه، نوع گاز و براکت نصب باید با خودرو یکی باشد. اعلام برند و سال ساخت، اشتباه در سفارش را کم می‌کند و تتا می‌تواند موجودی سازگار را سریع‌تر اعلام کند.",
        ],
        callout: {
          title: "توصیه انبار",
          text: "همراه کمپرسور نو، درایر و اورینگ‌ها را هم عوض کنید تا رطوبت مدار کمپرسور جدید را خراب نکند.",
        },
      },
    ],
  },
  "evaporator-condenser": {
    lead: "اواپراتور سرما را به کابین می‌رساند و کندانسور حرارت را دفع می‌کند. شناخت این دو قطعه انتخاب عمده را دقیق‌تر می‌کند.",
    sections: [
      {
        title: "کار هر قطعه در یک نگاه",
        paragraphs: [
          "کندانسور جلوی خودرو گرمای گاز را به هوای محیط می‌دهد. اواپراتور پشت داشبورد گرمای کابین را می‌گیرد و باد سرد می‌سازد. ضعف هر کدام، علائم متفاوتی دارد.",
        ],
      },
      {
        title: "چطور بفهمیم کدام قطعه خراب است؟",
        list: [
          "کندانسور گرفته: فشار بالا، فن دائم‌کار، گرمای زیاد در جلو",
          "نشتی کندانسور: افت گاز پس از چند روز",
          "اواپراتور گرفته: باد ضعیف از دریچه‌ها و بوی نم",
          "نشتی اواپراتور: کف خیس زیر داشبورد یا بوی گاز",
        ],
      },
      {
        title: "خرید دقیق‌تر برای انبار تعمیرگاه",
        paragraphs: [
          "اواپراتور و کندانسور را با کد فنی جداگانه سفارش دهید. ابعاد، محل لوله‌ها و نوع گاز در مدل‌های ظاهراً مشابه فرق دارد. تیم فروش تتا با مشخصات خودرو موجودی درست را اعلام می‌کند.",
        ],
      },
    ],
  },
  "heater-radiator": {
    lead: "گرفتگی رادیاتور بخاری گرمایش کابین را ضعیف می‌کند. شست‌وشو و کنترل شیلنگ‌ها قبل از زمستان ضروری است.",
    sections: [
      {
        title: "چرا بخاری باد گرم نمی‌دهد؟",
        paragraphs: [
          "اگر موتور گرم است ولی از دریچه‌ها باد ولرم می‌آید، رادیاتور بخاری یا شیر مسیر آب معمولاً مقصر است. رسوب و گرفتگی داخلی جریان آب گرم را قطع می‌کند.",
        ],
      },
      {
        title: "سرویس قبل از سرما",
        list: [
          "شست‌وشوی رادیاتور بخاری در صورت امکان",
          "کنترل شیلنگ‌های رفت و برگشت از نظر ترک و نشتی",
          "اطمینان از باز بودن شیر بخاری",
          "هواگیری مدار آب پس از سرویس",
        ],
        callout: {
          title: "زمان تعویض",
          text: "اگر پس از شست‌وشو همچنان گرمایش ضعیف است یا بوی ضد یخ داخل کابین می‌آید، رادیاتور بخاری باید تعویض شود.",
        },
      },
      {
        title: "سفارش قطعه",
        paragraphs: [
          "ابعاد رادیاتور بخاری و جهت لوله‌ها بین تیپ‌های یک خودرو فرق دارد. مدل دقیق و سال ساخت را برای استعلام قیمت عمده اعلام کنید.",
        ],
      },
    ],
  },
  "ac-odor": {
    lead: "رطوبت روی اواپراتور و آلودگی فیلتر کابین بوی نامطبوع ایجاد می‌کند. سرویس مدار و تعویض فیلتر مشکل را برطرف می‌کند.",
    sections: [
      {
        title: "منشأ بوی نامطبوع کولر",
        paragraphs: [
          "باقی‌ماندن رطوبت روی اواپراتور محیط رشد باکتری می‌سازد. فیلتر کابین اشباع‌شده این بو را به داخل می‌فرستد. گاهی نشتی آب بخاری هم بوی شیرین ضد یخ ایجاد می‌کند.",
        ],
      },
      {
        title: "ترتیب درست رفع ایراد",
        list: [
          "تعویض فیلتر کابین",
          "ضدعفونی و شست‌وشوی اواپراتور",
          "کنترل شیلنگ تخلیه آب کولر",
          "بررسی نشتی رادیاتور بخاری در صورت بوی ضد یخ",
        ],
      },
      {
        title: "پیشگیری برای مشتری تعمیرگاه",
        paragraphs: [
          "چند دقیقه قبل از رسیدن به مقصد، کولر را خاموش و فقط فن را روشن بگذارید تا اواپراتور خشک شود. این کار ساده، مراجعه تکراری بابت بو را کم می‌کند.",
        ],
      },
    ],
  },
  "ac-fan": {
    lead: "اگر کندانسور داغ می‌ماند یا کمپرسور زود قطع می‌شود، فن خنک‌کننده را بررسی کنید تا از آسیب مدار تهویه جلوگیری شود.",
    sections: [
      {
        title: "نقش فن در سلامت کمپرسور",
        paragraphs: [
          "فن، حرارت کندانسور را دفع می‌کند. اگر فن کار نکند فشار مدار بالا می‌رود، کمپرسور زود قطع می‌شود و در گرمای شدید ممکن است آسیب ببیند.",
        ],
      },
      {
        title: "نشانه‌های خرابی فن",
        list: [
          "بالا رفتن دما فقط در حالت درجا",
          "کولر در حرکت خنک و در توقف گرم",
          "کار نکردن یکی از دورهای فن",
          "صدای بلبرینگ یا لرزش مجموعه فن",
        ],
        callout: {
          title: "قبل از تعویض کمپرسور",
          text: "همیشه فن، رله و سنسور دما را چک کنید. بسیاری از ضعف‌های سرمایش با یک فن سالم برطرف می‌شود.",
        },
      },
      {
        title: "انتخاب فن مناسب",
        paragraphs: [
          "تعداد دور، قطر پروانه و سوکت برق باید با خودرو یکی باشد. برای سفارش عمده فن کولر، نوع موتور و دو دور یا تک دور بودن را مشخص کنید.",
        ],
      },
    ],
  },
  "wholesale-hvac": {
    lead: "برای سفارش عمده، کد فنی، برند و سازگاری خودرو را مشخص کنید تا موجودی، قیمت و زمان تأمین دقیق اعلام شود.",
    sections: [
      {
        title: "چه اطلاعاتی سفارش را دقیق می‌کند؟",
        paragraphs: [
          "تعمیرگاه‌ها و عمده‌فروشان وقتی کد فنی، مدل خودرو، سال ساخت و برند موردنظر را بفرستند، اعلام موجودی سریع‌تر و خطای ارسال کمتر می‌شود.",
        ],
        list: [
          "نام قطعه: کمپرسور، کندانسور، اواپراتور یا قطعات بخاری",
          "برند و تیپ خودرو",
          "تعداد سفارش و فوریت تأمین",
          "نمونه عکس قطعه در صورت نبود کد فنی",
        ],
      },
      {
        title: "چرا سازگاری مهم‌تر از قیمت واحد است؟",
        paragraphs: [
          "قطعه ارزان ناسازگار هزینه نصب، برگشت کالا و خواب خودرو را بالا می‌برد. تتا روی تطبیق فنی تمرکز دارد تا خرید عمده برای انبار تعمیرگاه قابل اتکا باشد.",
        ],
        callout: {
          title: "مسیر استعلام",
          text: "از فرم تماس یا پشتیبانی تلفنی مشخصات را ارسال کنید. قیمت عمده بر اساس تعداد، برند و موجودی انبار اعلام می‌شود.",
        },
      },
      {
        title: "پیشنهاد برای موجودی فصلی",
        paragraphs: [
          "قبل از تابستان کمپرسور، کندانسور و گاز؛ قبل از زمستان رادیاتور بخاری و شیر بخاری را در اولویت انبار بگذارید. این برنامه‌ریزی توقف کار تعمیرگاه را کم می‌کند.",
        ],
      },
    ],
  },
  "heater-service": {
    lead: "کنترل شیر بخاری، رادیاتور و فن کابین قبل از سرما، از خوابیدن گرمایش در روزهای سرد جلوگیری می‌کند.",
    sections: [
      {
        title: "سرویس بخاری را به اولین سرما موکول نکنید",
        paragraphs: [
          "در روزهای سرد، نوبت تعمیرگاه پر می‌شود و قطعه کمیاب‌تر است. بازبینی اواسط پاییز زمان کافی برای شست‌وشو یا سفارش رادیاتور بخاری می‌دهد.",
        ],
      },
      {
        title: "چک‌لیست سرویس زمستانی",
        list: [
          "سلامت شیر بخاری و عملکرد اهرم یا موتور برقی",
          "گرفتگی رادیاتور بخاری",
          "فن کابین در تمام دورها",
          "نشتی شیلنگ‌ها و بوی ضد یخ در کابین",
        ],
      },
      {
        title: "اگر فقط یک سمت کابین گرم می‌شود",
        paragraphs: [
          "ممکن است دریچه هوا یا رادیاتور به‌صورت موضعی گرفته باشد. عیب‌یابی دقیق از تعویض چندباره قطعه جلوگیری می‌کند. برای تأمین قطعات بخاری، مدل خودرو را به تتا اعلام کنید.",
        ],
      },
    ],
  },
};

const categories = ["راهنمای خرید", "نگهداری خودرو", "سیستم کولر", "قطعات بخاری"];

export function postHref(id) {
  return `blog-single.html?id=${encodeURIComponent(id)}`;
}

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

function getPostById(id) {
  return posts.find((post) => post.id === id) || posts[0];
}

function getRelatedPosts(post, count = 3) {
  const same = posts.filter((item) => item.id !== post.id && item.category === post.category);
  const others = posts.filter((item) => item.id !== post.id && item.category !== post.category);
  return [...same, ...others].slice(0, count);
}

function renderCallout(callout) {
  if (!callout) {
    return "";
  }

  return `
    <aside class="article__callout">
      <span class="article__callout-icon" aria-hidden="true"><i class="bi bi-info-circle"></i></span>
      <div>
        <strong>${escapeHtml(callout.title)}</strong>
        <p>${escapeHtml(callout.text)}</p>
      </div>
    </aside>
  `;
}

function renderFigure(figure) {
  if (!figure) {
    return "";
  }

  return `
    <figure class="article__figure">
      <img src="${escapeHtml(figure.src)}" alt="${escapeHtml(figure.alt)}">
      <figcaption>${escapeHtml(figure.caption)}</figcaption>
    </figure>
  `;
}

function renderArticleBody(post) {
  const body = articleBodies[post.id];
  if (!body) {
    return `
      <p class="article__lead">${escapeHtml(post.excerpt)}</p>
      <h2 id="section-1">بررسی تخصصی موضوع</h2>
      <p>در تأمین قطعات تهویه خودرو، شناخت درست علائم و زمان سرویس هزینه خواب خودرو را کم می‌کند. این جمع‌بندی برای تعمیرگاه‌ها و خریداران عمده آماده شده است.</p>
    `;
  }

  const sections = body.sections
    .map((section, index) => {
      const headingId = `section-${index + 1}`;
      const paragraphs = (section.paragraphs || []).map((text) => `<p>${escapeHtml(text)}</p>`).join("");
      const list = section.list
        ? `<ul>${section.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        : "";

      return `
        <h2 id="${headingId}">${escapeHtml(section.title)}</h2>
        ${paragraphs}
        ${list}
        ${renderCallout(section.callout)}
        ${renderFigure(section.figure)}
      `;
    })
    .join("");

  return `
    <p class="article__lead">${escapeHtml(body.lead || post.excerpt)}</p>
    ${sections}
  `;
}

function cardTemplate(post, { featured = false } = {}) {
  const className = featured ? "media-card media-card--featured" : "media-card";
  return `
    <article class="${className}">
      <a class="media-card__link" href="${postHref(post.id)}" aria-label="مطالعه مقاله: ${escapeHtml(post.title)}">
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

function renderSidebar(root, state, { linkToArchive = false } = {}) {
  const categoriesMount = root.querySelector("[data-blog-categories]");
  const recentMount = root.querySelector("[data-blog-recent]");

  if (categoriesMount) {
    const counts = categories.map((name) => ({
      name,
      count: posts.filter((post) => post.category === name).length,
    }));

    const allControl = linkToArchive
      ? `<a class="blog-widget__link${state.category === "all" ? " is-active" : ""}" href="blog.html">
            همه مقالات
            <span>${toFaNumber(posts.length)}</span>
          </a>`
      : `<button class="blog-widget__link${state.category === "all" ? " is-active" : ""}" type="button" data-blog-category="all">
            همه مقالات
            <span>${toFaNumber(posts.length)}</span>
          </button>`;

    categoriesMount.innerHTML = `
      <h2 class="blog-widget__title">دسته‌بندی‌ها</h2>
      <ul class="blog-widget__list">
        <li>${allControl}</li>
        ${counts
          .map((item) => {
            const isActive = state.category === item.name;
            if (linkToArchive) {
              return `
                <li>
                  <a class="blog-widget__link${isActive ? " is-active" : ""}" href="blog.html">
                    ${escapeHtml(item.name)}
                    <span>${toFaNumber(item.count)}</span>
                  </a>
                </li>
              `;
            }

            return `
              <li>
                <button class="blog-widget__link${isActive ? " is-active" : ""}" type="button" data-blog-category="${escapeHtml(item.name)}">
                  ${escapeHtml(item.name)}
                  <span>${toFaNumber(item.count)}</span>
                </button>
              </li>
            `;
          })
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
            <a class="recent-post" href="${postHref(post.id)}">
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
    countMount.textContent = filtered.length ? `${toFaNumber(filtered.length)} مقاله در این فهرست` : "";
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

function renderToc(root, headings) {
  const tocMount = root.querySelector("[data-blog-toc]");
  if (!tocMount) {
    return;
  }

  if (!headings.length) {
    tocMount.hidden = true;
    tocMount.innerHTML = "";
    return;
  }

  tocMount.hidden = false;
  tocMount.innerHTML = `
    <h2 class="blog-toc__title">در این مقاله</h2>
    <ol class="blog-toc__list">
      ${headings
        .map(
          (heading, index) => `
        <li>
          <a class="blog-toc__link" href="#${escapeHtml(heading.id)}">
            <span class="blog-toc__num">${toFaNumber(index + 1)}</span>
            <span>${escapeHtml(heading.textContent)}</span>
          </a>
        </li>
      `
        )
        .join("")}
    </ol>
  `;
}

function renderPager(root, post) {
  const pager = root.querySelector("[data-article-pager]");
  if (!pager) {
    return;
  }

  const index = posts.findIndex((item) => item.id === post.id);
  const newer = index > 0 ? posts[index - 1] : null;
  const older = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null;

  const itemTemplate = (item, label, modifier) => {
    if (!item) {
      return `
        <a class="article-pager__item article-pager__item--placeholder" href="blog.html">
          <span>
            <span class="article-pager__label">${label}</span>
            <span class="article-pager__title">بازگشت به آرشیو وبلاگ</span>
          </span>
        </a>
      `;
    }

    return `
      <a class="article-pager__item article-pager__item--${modifier}" href="${postHref(item.id)}">
        <img src="${escapeHtml(item.image)}" alt="">
        <span>
          <span class="article-pager__label">${label}</span>
          <span class="article-pager__title">${escapeHtml(item.title)}</span>
        </span>
      </a>
    `;
  };

  pager.innerHTML = `
    ${itemTemplate(older, "مطلب قبلی", "older")}
    ${itemTemplate(newer, "مطلب بعدی", "newer")}
  `;
}

function bindShare(root, post) {
  const pageUrl = new URL(postHref(post.id), window.location.href).href;
  const shareText = `${post.title} | تتا`;
  const telegram = root.querySelector("[data-share='telegram']");
  const whatsapp = root.querySelector("[data-share='whatsapp']");
  const copyBtn = root.querySelector("[data-copy-link]");
  const status = root.querySelector("[data-copy-status]");

  if (telegram) {
    telegram.href = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  }

  if (whatsapp) {
    whatsapp.href = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`;
  }

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      if (status) {
        status.textContent = "لینک مقاله کپی شد.";
      }
    } catch {
      if (status) {
        status.textContent = "کپی لینک انجام نشد.";
      }
    }
  });
}

function bindReadProgress(article) {
  const bar = document.querySelector("[data-read-progress-bar]");
  if (!bar || !article) {
    return;
  }

  const update = () => {
    const rect = article.getBoundingClientRect();
    const start = window.scrollY + rect.top - 96;
    const distance = Math.max(article.offsetHeight - window.innerHeight + 160, 1);
    const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
    bar.style.width = `${progress * 100}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function bindTocSpy(headings, tocRoot) {
  if (!headings.length || !tocRoot) {
    return;
  }

  const links = [...tocRoot.querySelectorAll(".blog-toc__link")];

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) {
        setActive(visible.target.id);
      }
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
  );

  headings.forEach((heading) => observer.observe(heading));
  setActive(headings[0].id);
}

function updateDocumentMeta(post) {
  const title = `تتا | ${post.title}`;
  const url = `https://teta.co.com/blog/${post.id}/`;
  document.title = title;

  const description = document.querySelector("[data-article-description]");
  const canonical = document.querySelector("[data-article-canonical]");
  const ogTitle = document.querySelector("[data-article-og-title]");
  const ogDescription = document.querySelector("[data-article-og-description]");
  const ogUrl = document.querySelector("[data-article-og-url]");
  const ogImage = document.querySelector("[data-article-og-image]");
  const jsonld = document.querySelector("[data-article-jsonld]");

  description?.setAttribute("content", post.excerpt);
  canonical?.setAttribute("href", url);
  ogTitle?.setAttribute("content", title);
  ogDescription?.setAttribute("content", post.excerpt);
  ogUrl?.setAttribute("content", url);
  ogImage?.setAttribute("content", post.image);

  if (jsonld) {
    jsonld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      inLanguage: "fa-IR",
      datePublished: post.datetime,
      image: `https://teta.co.com/${post.image}`,
      author: { "@type": "Organization", name: "تتا" },
      publisher: { "@type": "Organization", name: "تتا", url: "https://teta.co.com/" },
      mainEntityOfPage: url,
    });
  }
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

export function initBlogSingle() {
  const root = document.querySelector("[data-blog-single]");
  if (!root) {
    return;
  }

  const requestedId = new URLSearchParams(window.location.search).get("id");
  const post = getPostById(requestedId);
  const contentMount = root.querySelector("[data-article-content]");
  const image = root.querySelector("[data-article-image]");
  const category = root.querySelector("[data-article-category]");
  const title = root.querySelector("[data-article-title]");
  const crumb = root.querySelector("[data-article-crumb]");
  const date = root.querySelector("[data-article-date]");
  const readTime = root.querySelector("[data-article-readtime]");
  const tagsMount = root.querySelector("[data-article-tags]");
  const relatedMount = root.querySelector("[data-blog-related]");

  updateDocumentMeta(post);

  if (image) {
    image.src = post.image;
    image.alt = post.title;
  }
  if (category) {
    category.textContent = post.category;
  }
  if (title) {
    title.textContent = post.title;
  }
  if (crumb) {
    crumb.textContent = post.title;
  }
  if (date) {
    date.textContent = post.date;
    date.setAttribute("datetime", post.datetime);
  }
  if (readTime) {
    readTime.textContent = `${post.readTime || "۶ دقیقه"} مطالعه`;
  }

  root.querySelectorAll("[data-article-author]").forEach((node) => {
    node.textContent = AUTHOR;
  });

  if (contentMount) {
    contentMount.innerHTML = renderArticleBody(post);
  }

  if (tagsMount) {
    const tags = post.tags?.length ? post.tags : [post.category];
    tagsMount.innerHTML = tags
      .map((tag) => `<li><a class="article-tags__item" href="blog.html">${escapeHtml(tag)}</a></li>`)
      .join("");
  }

  if (relatedMount) {
    relatedMount.innerHTML = getRelatedPosts(post).map((item) => cardTemplate(item)).join("");
  }

  renderSidebar(root, { category: post.category }, { linkToArchive: true });
  renderPager(root, post);
  bindShare(root, post);

  const headings = [...(contentMount?.querySelectorAll("h2[id]") || [])];
  renderToc(root, headings);
  bindTocSpy(headings, root.querySelector("[data-blog-toc]"));
  bindReadProgress(root.querySelector(".article"));
}
