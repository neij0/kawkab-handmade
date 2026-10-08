/* =========================================================
   بيانات المنتجات — من قائمة الأسعار الرسمية.
   كل منتج: الاسم، الفئة، السعر (بالأحجام المتوفرة)، والصورة.
   ملاحظة: صورة كل منتج حالياً "placeholder" (مربع فاضي) —
   لما تجهز الصور الحقيقية، بدّل imageUrl بمسار الصورة.
   ========================================================= */

// ===== عطور (خمر) — 15مل / 30مل / 50مل =====
const perfumes = [
  {
    name: "خمرة التفاح",
    category: "عطور",
    price: "15مل: 35ر.س · 30مل: 75ر.س · 50مل: 130ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة المسك",
    category: "عطور",
    price: "15مل: 25ر.س · 30مل: 60ر.س · 50مل: 100ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة ذهب",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة العنفر",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الكهرمان",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة المارون",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الظفرة",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة فيرزاتشي",
    category: "عطور",
    price: "15مل: 20ر.س · 30مل: 55ر.س · 50مل: 90ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة المحلب",
    category: "عطور",
    price: "15مل: 30ر.س · 30مل: 70ر.س · 50مل: 120ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الصندل",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة اللافندر",
    category: "عطور",
    price: "15مل: 25ر.س · 30مل: 60ر.س · 50مل: 100ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الهيل",
    category: "عطور",
    price: "15مل: 30ر.س · 30مل: 70ر.س · 50مل: 120ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة مشكّلة",
    category: "عطور",
    price: "15مل: 35ر.س · 30مل: 75ر.س · 50مل: 130ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الليمون",
    category: "عطور",
    price: "15مل: 35ر.س · 30مل: 75ر.س · 50مل: 130ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الريل",
    category: "عطور",
    price: "15مل: 35ر.س · 30مل: 75ر.س · 50مل: 130ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة العود",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة آرام",
    category: "عطور",
    price: "15مل: 40ر.س · 30مل: 90ر.س · 50مل: 150ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة سُكّره",
    category: "عطور",
    price: "15مل: 20ر.س · 30مل: 55ر.س · 50مل: 90ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة البرتقال",
    category: "عطور",
    price: "15مل: 35ر.س · 30مل: 75ر.س · 50مل: 130ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الريحان",
    category: "عطور",
    price: "15مل: 30ر.س · 30مل: 70ر.س · 50مل: 120ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة شغف",
    category: "عطور",
    // ⚠️ سعر مؤقت (نفس فئة خمرة التفاح) — بدّله بالسعر الأصلي لما يتحدد
    price: "15مل: 35ر.س · 30مل: 75ر.س · 50مل: 130ر.س",
    imageUrl: null,
  },
  {
    name: "مجموعة عينات كوكب",
    category: "عطور",
    // ⚠️ سعر مؤقت — بدّله بالسعر الأصلي لما يتحدد
    price: "المجموعة: 30ر.س",
    imageUrl: null,
  },
];

// ===== بخور — بعضها متوفر بمقاسات كبيرة برضو =====
const incense = [
  {
    name: "بخور الصندل",
    category: "بخور",
    price: "50غ: 80ر.س · 250غ: 380ر.س · 500غ: 700ر.س",
    imageUrl: null,
  },
  {
    name: "بخور كرات الصندل",
    category: "بخور",
    price: "110غ: 60ر.س",
    imageUrl: null,
  },
  {
    name: "بخور العنفر",
    category: "بخور",
    price: "50غ: 25ر.س · 250غ: 120ر.س · 500غ: 200ر.س",
    imageUrl: null,
  },
  {
    name: "بخور كرات العنفر",
    category: "بخور",
    price: "60غ: 35ر.س",
    imageUrl: null,
  },
  {
    name: "بخور الشاف",
    category: "بخور",
    price: "180غ: 60ر.س · 250غ: 80ر.س · 500غ: 150ر.س · 750غ: 190ر.س",
    imageUrl: null,
  },
  {
    name: "بخور الكبريت",
    category: "بخور",
    price: "110غ: 60ر.س · 250غ: 130ر.س · 500غ: 260ر.س",
    imageUrl: null,
  },
  {
    name: "بخور مبثوث فرنسي",
    category: "بخور",
    price: "60غ: 60ر.س",
    imageUrl: null,
  },
  {
    name: "بخور مبثوث عود",
    category: "بخور",
    price: "60غ: 60ر.س",
    imageUrl: null,
  },
  {
    name: "بخور المبثوث السوداني",
    category: "بخور",
    price: "60غ: 60ر.س",
    imageUrl: null,
  },
  {
    name: "بخور اللبان بالعود",
    category: "بخور",
    price: "50غ: 45ر.س",
    imageUrl: null,
  },
  {
    name: "بخور اللبان بالورد الطائفي",
    category: "بخور",
    price: "60غ: 50ر.س",
    imageUrl: null,
  },
  {
    name: "بخور الجبنة (القهوة)",
    category: "بخور",
    price: "90غ: 30ر.س",
    imageUrl: null,
  },
  {
    name: "بخور المستكة",
    category: "بخور",
    price: "70غ: 20ر.س",
    imageUrl: null,
  },
];

// ===== منتجات الجسم والشعر (تشمل الدلكة والزيوت) =====
const bodyAndHair = [
  {
    name: "دلكة حلوة",
    category: "منتجات الجسم والشعر",
    price: "260غ: 50ر.س · 2000غ: 240ر.س",
    imageUrl: null,
  },
  {
    name: "دلكة المحلب",
    category: "منتجات الجسم والشعر",
    price: "120غ: 50ر.س · 500غ: 190ر.س",
    imageUrl: null,
  },
  {
    name: "عجنة محلب",
    category: "منتجات الجسم والشعر",
    price: "40غ: 40ر.س",
    imageUrl: null,
  },
  {
    name: "عجنة الصندل",
    category: "منتجات الجسم والشعر",
    price: "35غ: 50ر.س",
    imageUrl: null,
  },
  {
    name: "مخمرية الظفرة",
    category: "منتجات الجسم والشعر",
    price: "35غ: 50ر.س",
    imageUrl: null,
  },
  {
    name: "مخمرية المسك",
    category: "منتجات الجسم والشعر",
    price: "35غ: 40ر.س",
    imageUrl: null,
  },
  {
    name: "خمرة الزيت",
    category: "منتجات الجسم والشعر",
    price: "200مل: 35ر.س",
    imageUrl: null,
  },
  {
    name: "زيت وشوشة",
    category: "منتجات الجسم والشعر",
    price: "50مل: 30ر.س",
    imageUrl: null,
  },
  {
    name: "كركار",
    category: "منتجات الجسم والشعر",
    price: "150مل: 80ر.س",
    imageUrl: null,
  },
];

// ===== مرشات — كل واحدة 250مل بسعر 40 ر.س =====
const sprays = [
  {
    name: "مرشة عود ملكي",
    category: "مرشات",
    price: "250مل: 40ر.س",
    imageUrl: null,
  },
  {
    name: "مرشة جاردينيا",
    category: "مرشات",
    price: "250مل: 40ر.س",
    imageUrl: null,
  },
  {
    name: "مرشة مسك",
    category: "مرشات",
    price: "250مل: 40ر.س",
    imageUrl: null,
  },
  {
    name: "مرشة كراون",
    category: "مرشات",
    price: "250مل: 40ر.س",
    imageUrl: null,
  },
  {
    name: "مرشة رويال خلاب",
    category: "مرشات",
    price: "250مل: 40ر.س",
    imageUrl: null,
  },
  {
    name: "مرشة سبلاند",
    category: "مرشات",
    price: "250مل: 40ر.س",
    imageUrl: null,
  },
];

const allProducts = [...perfumes, ...incense, ...bodyAndHair, ...sprays];

// الأكثر مبيعاً — عدّل هذي الأسماء بالمنتجات الأكثر طلباً فعلياً عندكم
const bestSellerNames = [
  "بخور الشاف",
  "بخور المستكة",
  "بخور الكبريت",
  "خمرة الظفرة",
  "خمرة الصندل",
  "مجموعة عينات كوكب",
];
const bestSellers = allProducts.filter((p) => bestSellerNames.includes(p.name));

/* =========================================================
   دالة تبني بطاقة منتج واحدة (تُستخدم مرتين: للأكثر مبيعاً
   وللكتالوج الكامل، بدل ما نكرر نفس الكود)
   ========================================================= */
function createProductCard(product) {
  return `
    <div class="product-card animate-in" data-category="${product.category}">
      <div class="product-card__image">
        ${product.imageUrl ? `<img src="${product.imageUrl}" alt="${product.name}">` : "صورة المنتج"}
      </div>
      <div class="product-card__body">
        <h3>${product.name}</h3>
        <p class="category">${product.category}</p>
        ${product.price ? `<p class="price">${product.price}</p>` : ""}
      </div>
    </div>
  `;
}

/* =========================================================
   تأثير الظهور عند التمرير (Scroll Reveal)
   Intersection Observer يراقب أي عنصر عليه class "animate-in"،
   ولما يوصله scroll ويبان بالشاشة، يضيف له "is-visible"
   (اللي بيشغّل الأنيميشن المعرّف بـ style.css)، ثم يوقف مراقبته
   عشان الأنيميشن يصير مرة وحدة بس.
   ========================================================= */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

function observeAnimatedElements() {
  document.querySelectorAll(".animate-in:not(.is-visible)").forEach((el) => {
    revealObserver.observe(el);
  });
}

/* ===== عرض الأكثر مبيعاً ===== */
const bestsellersGrid = document.getElementById("bestsellersGrid");
bestsellersGrid.innerHTML = bestSellers.map(createProductCard).join("");

/* ===== عرض الكتالوج الكامل ===== */
const catalogGrid = document.getElementById("catalogGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");

/* =========================================================
   "عرض المزيد" — بفلتر "الكل" بس (48 منتج دفعة وحدة ثقيل
   وبطيء بالتحميل)، نبين أول 12 وبعدين نزيد 12 كل ضغطة.
   لباقي الفلاتر (عطور/بخور/الخ) نعرض كل المطابق دفعة وحدة
   عادي، لأنها أصلاً أقل بكثير من 12 غالباً.
   ========================================================= */
const CATALOG_PAGE_SIZE = 12;
let currentCatalogList = allProducts; // القائمة الحالية بعد الفلترة
let visibleCatalogCount = CATALOG_PAGE_SIZE;

function renderCatalogPage() {
  const visibleProducts = currentCatalogList.slice(0, visibleCatalogCount);
  catalogGrid.innerHTML = visibleProducts.map(createProductCard).join("");
  observeAnimatedElements(); // نراقب بطاقات المنتجات الجديدة (بعد فلترة أو "عرض المزيد")

  // الزر يبان بس لو باقي منتجات بالقائمة الحالية ما ظهرت بعد
  const hasMore = visibleCatalogCount < currentCatalogList.length;
  loadMoreBtn.classList.toggle("is-visible", hasMore);
}

function renderCatalog(products, { paginate = false } = {}) {
  currentCatalogList = products;
  visibleCatalogCount = paginate
    ? Math.min(CATALOG_PAGE_SIZE, products.length)
    : products.length; // فلتر مخصص (مب "الكل") → نعرض كل المطابق دفعة وحدة
  renderCatalogPage();
}

loadMoreBtn.addEventListener("click", () => {
  visibleCatalogCount = Math.min(
    visibleCatalogCount + CATALOG_PAGE_SIZE,
    currentCatalogList.length,
  );
  renderCatalogPage();
});

renderCatalog(allProducts, { paginate: true });

// نراقب باقي عناصر الصفحة الثابتة (عناوين الأقسام، قصتنا، تواصل معنا)
observeAnimatedElements();

/* =========================================================
   الفلاتر — تُبنى تلقائياً حسب الفئات الموجودة بالمنتجات
   (نستخدم Set عشان نشيل التكرار، ثم نحولها array)
   ========================================================= */
const categories = ["الكل", ...new Set(allProducts.map((p) => p.category))];
const filtersContainer = document.getElementById("filters");

filtersContainer.innerHTML = categories
  .map(
    (cat) => `<button class="filter-btn" data-filter="${cat}">${cat}</button>`,
  )
  .join("");

// أول زر ("الكل") يكون مفعّل افتراضياً
filtersContainer.querySelector(".filter-btn").classList.add("active");

// نستمع لأي ضغطة على أي زر فلتر
filtersContainer.addEventListener("click", function (event) {
  const clickedButton = event.target.closest(".filter-btn");
  if (!clickedButton) return;

  const selectedCategory = clickedButton.dataset.filter;

  // نحدث أي زر هو "active" حالياً
  filtersContainer.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  clickedButton.classList.add("active");

  // نفلتر المنتجات حسب الفئة المختارة
  const isAll = selectedCategory === "الكل";
  const filtered = isAll
    ? allProducts
    : allProducts.filter((p) => p.category === selectedCategory);

  renderCatalog(filtered, { paginate: isAll });
});

/* =========================================================
   Preloader / Splash Screen
   ننتظر "load" (مو DOMContentLoaded) عشان نتأكد إن الشعار
   وكل الصور خلصت تحميل فعلياً قبل لا نخفي شاشة البداية.

   بس المشكلة: لو التحميل سريع (زي الوضع الحالي، صفحة خفيفة)،
   حدث "load" يصير بسرعة جداً والشاشة تختفي قبل ما تبان أصلاً.
   الحل: نفرض حد أدنى لمدة العرض (MIN_DISPLAY_MS) بغض النظر
   عن سرعة التحميل، عشان الأنيميشن يبان بوضوح دايماً.

   وكمان نجمّد تمرير الصفحة (class "no-scroll" على body) طول
   ما الشاشة ظاهرة، ونشيله بنفس لحظة الاختفاء بالضبط.
   ========================================================= */
const preloader = document.getElementById("preloader");
const MIN_DISPLAY_MS = 2200; // عدّل هذا الرقم لو تبي الشاشة تبان أطول/أقصر
const pageLoadStartedAt = performance.now();

document.body.classList.add("no-scroll");

function reallyHidePreloader() {
  preloader.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
}

function hidePreloader() {
  const elapsed = performance.now() - pageLoadStartedAt;
  const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
  setTimeout(reallyHidePreloader, remaining);
}

window.addEventListener("load", hidePreloader);

// شبكة أمان: لو لسبب ما "load" تأخر كثير (نت بطيء مثلاً)،
// نخفي شاشة البداية بعد 6 ثواني بأي حال عشان ما تعلّق بوش الزائر
setTimeout(reallyHidePreloader, 6000);

/* =========================================================
   زر واتساب عائم — يختفي لما قسم "تواصل معنا" يبان بالشاشة
   (لأنه فيه زر واتساب أصلي هناك، ما نحتاج نكرره)
   ========================================================= */
const floatingWhatsapp = document.getElementById("floatingWhatsapp");
const contactSection = document.getElementById("contact");

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      floatingWhatsapp.classList.toggle("is-hidden", entry.isIntersecting);
      updateBackToCatalogStack(); // نحدّث موقع زر الرجوع لو تغيّر ظهور زر الواتساب
    });
  },
  { threshold: 0.1 },
);

contactObserver.observe(contactSection);

/* =========================================================
   زر الرجوع لأعلى الكتالوج — يظهر بس بعد ما الزائر يتجاوز
   قسم "جميع المنتجات" نزولاً، ولما يضغطه يرجعه لأول نفس
   القسم (وين الفلاتر)، مب لأعلى الصفحة كلها
   ========================================================= */
const backToCatalogBtn = document.getElementById("backToCatalog");
const catalogSection = document.getElementById("catalog");
const catalogTopMarker = document.getElementById("catalogTopMarker");

function updateBackToCatalogStack() {
  // لو زر الواتساب ظاهر بنفس الوقت، نرفع زر الرجوع فوقه عشان ما يتراكبوا
  const whatsappVisible = !floatingWhatsapp.classList.contains("is-hidden");
  backToCatalogBtn.classList.toggle("is-stacked", whatsappVisible);
}

const catalogObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // العلامة (مب القسم كامل) هي اللي نتابعها — فيبان الزر أول ما
      // نتجاوز بداية الكتالوج بالضبط، مب لازم نوصل نهايته
      const scrolledPast =
        !entry.isIntersecting && entry.boundingClientRect.top < 0;
      backToCatalogBtn.classList.toggle("is-visible", scrolledPast);
    });
  },
  { threshold: 0 },
);

catalogObserver.observe(catalogTopMarker);

backToCatalogBtn.addEventListener("click", () => {
  catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* =========================================================
   الناف (Header) — يصغر ويصير شفاف مع تمويه خلفي لما الزائر
   ينزل بالصفحة، ويرجع لشكله الطبيعي لما يرجع لفوق (زي Overwatch)
   ========================================================= */
const siteHeader = document.querySelector(".header");
const SCROLL_THRESHOLD = 150; // بعد كم بكسل نزول يبدأ التصغير

function updateHeaderOnScroll() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
}

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll(); // نتأكد من الحالة الصحيحة أول ما الصفحة تفتح (لو كانت مفتوحة نص الصفحة مثلاً)

/* =========================================================
   قائمة الجوال (اللسان المنسحب) — يبان زرها بس بالشاشات
   الصغيرة (شوف @media max-width:640px بـ style.css). يفتح
   اللسان من جهة اليسار مع طبقة تعتيم خلفه، ويقفل بثلاث طرق:
   الضغط على الزر نفسه تاني، الضغط على التعتيم، أو اختيار رابط.
   ========================================================= */
const navToggle = document.getElementById("navToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerClose = document.getElementById("drawerClose");

function openDrawer() {
  mobileDrawer.classList.add("is-open");
  drawerOverlay.classList.add("is-open");
  navToggle.classList.add("is-active");
  navToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("no-scroll"); // نجمّد الصفحة خلف اللسان طول ما مفتوح
}

function closeDrawer() {
  mobileDrawer.classList.remove("is-open");
  drawerOverlay.classList.remove("is-open");
  navToggle.classList.remove("is-active");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
}

navToggle.addEventListener("click", () => {
  mobileDrawer.classList.contains("is-open") ? closeDrawer() : openDrawer();
});

drawerOverlay.addEventListener("click", closeDrawer);

// زر الإغلاق (✕) اللي جوا رأس اللسان — ضروري لأن اللسان نفسه (z-index أعلى)
// يغطي زر الهمبرغر الأصلي بالهيدر وهو مفتوح، فبدون هذا الزر ما فيه طريقة واضحة تقفل فيها
drawerClose.addEventListener("click", closeDrawer);

// نقفل اللسان تلقائياً لما تضغط أي رابط جواه (بعد ما يختار وجهته)
mobileDrawer.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

// نقفله كمان لو ضغط "Escape" — تحسين بسيط لسهولة الاستخدام بلوحة المفاتيح
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});

/* =========================================================
   Scrollytelling — قسم السرد السينمائي (بين الـ Hero و"الأكثر
   مبيعاً"). صفوف الصور (Marquee) تتحرك بـ CSS بحت طول الوقت —
   هذا الملف بس يتحكم بشيئين مرتبطين بالسكرول فعلياً:
   1) شفافية طبقة التعتيم (تعتيم تدريجي ثم رجوع للضوء)
   2) شفافية النص الذهبي (يظهر بمنتصف الجزء المظلم بس)
   وبيوقف/يشغّل حركة الصفوف حسب ظهور القسم بالشاشة (توفير أداء).

   نتأكد أول شي إن الزائر ما مفعّل "تقليل الحركة" — لو مفعّلها،
   نسيب القسم بحالته الافتراضية (بدون تعتيم ولا حركة) بدل ما
   نفرض عليه تغيير إضاءة كبير ومفاجئ هو أصلاً حساس منه.
   ========================================================= */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
  const scrollySection = document.getElementById("scrollytelling");
  const scrollyDark = document.getElementById("scrollyDark");
  const scrollyText = document.getElementById("scrollyText");
  // السطر الجديد: جلبنا حاوية القطار
  const scrollyMarquee = document.querySelector(".scrollytelling__marquee");

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function darkOpacity(p) {
    if (p < 0.2) return p / 0.2;
    if (p > 0.8) return (1 - p) / 0.2;
    return 1;
  }

  function textOpacity(p) {
    if (p < 0.2) return 0;
    if (p < 0.35) return (p - 0.2) / 0.15;
    if (p < 0.65) return 1;
    if (p < 0.8) return (0.8 - p) / 0.15;
    return 0;
  }

  function updateScrollytelling() {
    const rect = scrollySection.getBoundingClientRect();
    const scrollableDistance = scrollySection.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = clamp(scrolled / scrollableDistance, 0, 1);

    // توحيد الشفافية: الآن الظلام، والقطار، والنص يظهرون ويختفون في نفس اللحظة بالضبط
    const currentOpacity = darkOpacity(progress);

    scrollyDark.style.opacity = currentOpacity;
    scrollyMarquee.style.opacity = currentOpacity;
    scrollyText.style.opacity = currentOpacity;
  }

  let scrollyTicking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!scrollyTicking) {
        requestAnimationFrame(() => {
          updateScrollytelling();
          scrollyTicking = false;
        });
        scrollyTicking = true;
      }
    },
    { passive: true },
  );

  updateScrollytelling();

  const marqueeTracks = document.querySelectorAll(".marquee-track");
  const marqueeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const playState = entry.isIntersecting ? "running" : "paused";
        marqueeTracks.forEach((track) => {
          track.style.animationPlayState = playState;
        });
      });
    },
    { threshold: 0 },
  );
  marqueeObserver.observe(scrollySection);
}

// =========================================================
// منطق تشغيل الأكورديون (القائمة المنسدلة لجميع المنتجات)
// =========================================================
const accordionToggle = document.getElementById("accordionToggle");
const accordionContent = document.getElementById("accordionContent");

if (accordionToggle && accordionContent) {
  accordionToggle.addEventListener("click", () => {
    // نتحقق إذا كانت القائمة مفتوحة حالياً
    const isOpen = accordionContent.classList.contains("is-open");

    if (isOpen) {
      // إغلاق القائمة
      accordionContent.classList.remove("is-open");
      accordionToggle.classList.remove("is-active");
      accordionToggle.setAttribute("aria-expanded", "false");
    } else {
      // فتح القائمة
      accordionContent.classList.add("is-open");
      accordionToggle.classList.add("is-active");
      accordionToggle.setAttribute("aria-expanded", "true");
    }
  });
}

// =========================================================
// ربط روابط القائمة الجانبية (الأكورديون) بفلاتر الكتالوج
// =========================================================
const drawerCategoryLinks = document.querySelectorAll("#accordionContent a");

drawerCategoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // 1. إغلاق اللسان المنسحب فوراً عند الضغط
    closeDrawer();

    // 2. قراءة اسم القسم من الرابط الذي تم الضغط عليه
    const categoryName = link.getAttribute("data-filter");

    // 3. البحث عن زر الفلتر المطابق في قسم الكتالوج والضغط عليه برمجياً
    const targetFilterBtn = document.querySelector(
      `.filter-btn[data-filter="${categoryName}"]`,
    );
    if (targetFilterBtn) {
      targetFilterBtn.click();
    }
  });
});

// =========================================================
// رحلة الزر السينمائية (تحديث: التوقف عند اكتمال الفيد إن)
// يمر بقسم السرد ويتوقف لمدة 2.5 ثانية قبل إكمال الطريق
// =========================================================
const heroDiscoverBtn = document.querySelector(".hero__content .btn");
const scrollytellingSec = document.getElementById("scrollytelling");
const bestsellersSec = document.getElementById("bestsellers");

if (heroDiscoverBtn && scrollytellingSec && bestsellersSec) {
  heroDiscoverBtn.addEventListener("click", (e) => {
    e.preventDefault(); // نمنع القفز السريع الافتراضي للزر

    // 1. حساب مسافة التمرير الخاصة بالقسم بدقة لضمان دقة التوقف
    const rect = scrollytellingSec.getBoundingClientRect();
    const scrollableDistance =
      scrollytellingSec.offsetHeight - window.innerHeight;

    // 2. النقطة الذهبية الجديدة: 35% من القسم
    // (لحظة اكتمال الظلام وظهور النص بوضوح، قبل أن يبدأ الفيد أوت)
    const sweetSpot = window.scrollY + rect.top + scrollableDistance * 0.35;

    // 3. النزول السلس إلى المشهد
    window.scrollTo({
      top: sweetSpot,
      behavior: "smooth",
    });

    // 4. إيقاف مؤقت لمدة ثانيتين ونصف (2500 ملي ثانية) لتأمل المشهد
    setTimeout(() => {
      // 5. استكمال الرحلة بهدوء إلى قسم الأكثر مبيعاً
      bestsellersSec.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2500);
  });
}
