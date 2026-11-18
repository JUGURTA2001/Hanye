/**
 * HANYE - LOGIQUE JAVASCRIPT DU SITE VITRINE
 * Gestion multilingue (AR, FR, EN), menu burger mobile,
 * configuration des prix et intégration WhatsApp dynamique.
 */

// ============================================================================
// 1. CONFIGURATION FACILE DES PRIX (Modifiable ici)
// ============================================================================
const PRICES = {
  miel: '1500 DA',
  propolis: '2000 DA',
  pollen: '1200 DA'
};

// Numéro WhatsApp & Téléphone de contact
const CONTACT_PHONE = '0666830962';
const WHATSAPP_NUMBER = '213666830962';

// ============================================================================
// 2. DICTIONNAIRE DE TRADUCTIONS (FR, AR, EN)
// ============================================================================
const TRANSLATIONS = {
  fr: {
    meta_title: "Hanye - Produits Naturels de la Ruche | Miel, Propolis & Pollen",
    meta_desc: "Découvrez les trésors purs de la ruche Hanye : miel naturel, propolis brute et pollen d'abeille frais. Produits naturels récoltés avec passion, de la ruche à votre table.",
    
    // Navigation
    nav_home: "Accueil",
    nav_products: "Produits",
    nav_about: "À propos",
    nav_why: "Pourquoi nous",
    nav_contact: "Contact",

    // Accueil (Hero)
    hero_badge: "🍯 100% Naturel & Artisanal",
    hero_title: "La pureté de la ruche, directement à votre table",
    hero_desc: "Découvrez notre miel pur, notre propolis brute et notre pollen frais, récoltés avec passion dans le plus grand respect des abeilles et de la nature.",
    hero_cta: "Commander sur WhatsApp",
    chip_honey: "Miel pur",
    chip_propolis: "Propolis brute",
    chip_pollen: "Pollen frais",

    // Produits
    products_tag: "Nos Trésors",
    products_title: "Nos Produits de la Ruche",
    products_intro: "Des produits authentiques et non transformés, issus directement de nos ruches pour préserver toute leur richesse naturelle.",
    prod_miel_name: "Miel Naturel",
    prod_miel_desc: "Un miel doré aux arômes floraux délicats, récolté à maturité selon les traditions apicoles pour préserver sa douceur et sa pureté.",
    prod_propolis_name: "Propolis Brute",
    prod_propolis_desc: "La résine protectrice végétale collectée et enrichie par les abeilles, récoltée à l'état brut pour vous offrir toute l'authenticité de la ruche.",
    prod_pollen_name: "Pollen d'Abeille",
    prod_pollen_desc: "De fines pelotes dorées de pollen floral frais récoltées par les butineuses. Une source authentique de vitalité végétale issue des fleurs sauvages.",
    btn_order: "Commander",

    // À propos
    about_tag: "Notre Passion",
    about_title: "À Propos de Hanye",
    about_text_1: "Apiculteur passionné par le monde fascinant des abeilles, je veille chaque jour sur nos ruchers avec respect, rigueur et bienveillance.",
    about_text_2: "Chez Hanye, notre philosophie est claire : respecter le rythme naturel des colonies et proposer des produits d'une pureté irréprochable, sans additifs, sans conservateurs et sans transformation industrielle. De la ruche à votre table, vous savourez l'essence même de la nature.",
    val_1: "100% Artisanal",
    val_2: "Zéro Additif",
    val_3: "Respect du Rucher",
    about_photo_alt: "Apiculteur Hanye avec ses produits naturels",

    // Pourquoi nous choisir
    why_tag: "Nos Engagements",
    why_title: "Pourquoi Nous Choisir ?",
    why_intro: "Des principes fermes et transparents pour vous garantir les meilleurs produits de la ruche.",
    why_1_title: "100% Naturel",
    why_1_desc: "Tous nos produits sont bruts, purs et authentiques, sans ajout de sucres, sans colorants ni conservateurs.",
    why_2_title: "Qualité & Respect",
    why_2_desc: "Une récolte artisanale soignée qui préserve la santé des abeilles et garantit des arômes floraux incomparables.",
    why_3_title: "Livraison Disponible",
    why_3_desc: "Commandez en quelques clics et recevez vos produits rapidement dans un emballage sécurisé et soigné.",

    // Contact
    contact_tag: "Échangeons",
    contact_title: "Contactez-nous",
    contact_intro: "Une question sur nos produits ou une commande à passer ? Nous sommes à votre entière écoute pour vous conseiller.",
    contact_phone_label: "Téléphone :",
    btn_call: "Appeler",
    btn_whatsapp: "WhatsApp",

    // Boutons Flottants & Footer
    fab_call: "Appeler",
    fab_wa: "WhatsApp",
    footer_copy: "© Hanye. Tous droits réservés.",

    // Messages WhatsApp prédéfinis
    wa_order_prefix: "Bonjour, je souhaite commander : ",
    wa_hero_msg: "Bonjour, je souhaite commander des produits de la ruche Hanye",
    wa_contact_msg: "Bonjour Hanye, je souhaite avoir des informations sur vos produits"
  },

  ar: {
    meta_title: "هاني - منتجات الخلية الطبيعية | عسل، عكبر، حبوب اللقاح",
    meta_desc: "اكتشفوا خيرات الخلية النقية من منحل هاني: عسل طبيعي نقي، عكبر خام وحبوب لقاح النحل الطازجة. منتجات طبيعية من المنحل إلى مائدتكم.",
    
    // Navigation
    nav_home: "الرئيسية",
    nav_products: "منتجاتنا",
    nav_about: "من نحن",
    nav_why: "لماذا نحن؟",
    nav_contact: "اتصل بنا",

    // Accueil (Hero)
    hero_badge: "🍯 طبيعي 100% ومجني تقليدياً",
    hero_title: "نقاء الخلية، مباشرة من المنحل إلى مائدتكم",
    hero_desc: "اكتشفوا عسلنا الطبيعي النقي، وعكبر النحل الخام، وحبوب اللقاح الطازجة، مجنية بكل حب وشغف في احترام كامل للنحل والطبيعة.",
    hero_cta: "اطلب عبر واتساب",
    chip_honey: "عسل نقي",
    chip_propolis: "عكبر خام",
    chip_pollen: "لقاح طازج",

    // Produits
    products_tag: "خيرات المنحل",
    products_title: "منتجاتنا من الخلية",
    products_intro: "منتجات أصلية ونقية غير معالجة صناعياً، مستخرجة مباشرة من خلايا النحل للحفاظ على كل فوائدها وقيمتها الطبيعية.",
    prod_miel_name: "عسل طبيعي نقي",
    prod_miel_desc: "عسل ذهبي صافٍ بنكهات زهرية غنية، مجني عند اكتمال نضجه وفقاً لتقاليد تربية النحل الأصيلة.",
    prod_propolis_name: "عكبر النحل الخام",
    prod_propolis_desc: "صمغ النحل الطبيعي الذي تجمعه العاملات لحماية الخلية، مجني في أنقى صوره الخام لتقديم كل أصالته الطبيعية.",
    prod_pollen_name: "حبوب لقاح النحل",
    prod_pollen_desc: "حبيبات لقاح الأزهار الطازجة مجنية يومياً من رحيق البراري، مصدر طبيعي خالص للطاقة والحيوية.",
    btn_order: "اطلب الآن",

    // À propos
    about_tag: "شغفنا",
    about_title: "عن منحل هاني",
    about_text_1: "نحال شغوف بالحياة المدهشة للنحل وبجمال الطبيعة، أعتني يومياً بمناحلنا بكل أمانة ورعاية واحترام لدورة حياة النحل.",
    about_text_2: "في هاني، التزامنا صادق وبسيط: أن نقدم لكم منتجات خلية نقية 100% وخالية تماماً من الإضافات أو السكريات أو المعالجة الصناعية. من الخلية إلى مائدتكم، تتذوقون جوهر الطبيعة كما صنعتها سواعد النحل.",
    val_1: "100% تقليدي",
    val_2: "بدون إضافات",
    val_3: "احترام النحل",
    about_photo_alt: "صورة النحال هاني مع منتجات الخلية الطبيعية",

    // Pourquoi nous choisir
    why_tag: "التزاماتنا",
    why_title: "لماذا تختارون هاني؟",
    why_intro: "مبادئ واضحة وأمينة تضمن لكم الحصول على أفضل ما تجود به الخلية.",
    why_1_title: "طبيعي 100%",
    why_1_desc: "جميع منتجاتنا نقية وخام وخالية تماماً من السكر المضاف والمواد الحافظة والملونات.",
    why_2_title: "جودة واحترام",
    why_2_desc: "جني يدوي دقيق يحافظ على سلامة خلايا النحل ويضمن مذاقاً زكياً ونكهة زهرية فريدة.",
    why_3_title: "توصيل متوفر",
    why_3_desc: "اطلبوا بسهولة وسرعة، واستلموا منتجاتكم في تغليف متقن ومحكم يحمي سلامتها.",

    // Contact
    contact_tag: "تواصلوا معنا",
    contact_title: "اتصلوا بنا",
    contact_intro: "هل لديكم سؤال حول منتجاتنا أو ترغبون في تقديم طلب؟ نحن دائماً في خدمتكم للإجابة على كل استفساراتكم.",
    contact_phone_label: "الهاتف:",
    btn_call: "اتصال هاتفي",
    btn_whatsapp: "واتساب",

    // Boutons Flottants & Footer
    fab_call: "اتصال",
    fab_wa: "واتساب",
    footer_copy: "© هاني (Hanye). جميع الحقوق محفوظة.",

    // Messages WhatsApp prédéfinis
    wa_order_prefix: "السلام عليكم، أرغب في طلب: ",
    wa_hero_msg: "السلام عليكم، أرغب في طلب منتجات الخلية من هاني",
    wa_contact_msg: "السلام عليكم، أود الحصول على معلومات حول منتجاتكم"
  },

  en: {
    meta_title: "Hanye - Pure Hive Products | Natural Honey, Propolis & Bee Pollen",
    meta_desc: "Discover Hanye's pure bee products: 100% natural raw honey, propolis and fresh bee pollen. Sustainably harvested with passion, from hive to table.",
    
    // Navigation
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About",
    nav_why: "Why Us",
    nav_contact: "Contact",

    // Accueil (Hero)
    hero_badge: "🍯 100% Natural & Artisanal",
    hero_title: "Pure hive goodness, straight to your table",
    hero_desc: "Discover our raw honey, unrefined propolis, and fresh bee pollen, harvested with passion and utmost respect for the bees and nature.",
    hero_cta: "Order on WhatsApp",
    chip_honey: "Pure Honey",
    chip_propolis: "Raw Propolis",
    chip_pollen: "Fresh Pollen",

    // Produits
    products_tag: "Our Treasures",
    products_title: "Pure Bee Hive Products",
    products_intro: "Authentic, unadulterated products harvested directly from our hives to preserve their full natural richness.",
    prod_miel_name: "Pure Natural Honey",
    prod_miel_desc: "A golden honey with delicate floral notes, naturally ripened and harvested following beekeeping traditions to preserve pure taste.",
    prod_propolis_name: "Raw Propolis",
    prod_propolis_desc: "The protective resin collected and enriched by bees, harvested in its raw state to bring you pure, authentic hive protection.",
    prod_pollen_name: "Fresh Bee Pollen",
    prod_pollen_desc: "Fine golden beads of fresh floral pollen gathered daily by foragers. An authentic plant-powered gift of vibrant energy.",
    btn_order: "Order",

    // À propos
    about_tag: "Our Passion",
    about_title: "About Hanye",
    about_text_1: "As a beekeeper passionate about the fascinating world of honeybees, I tend to our apiaries every single day with care, diligence, and respect.",
    about_text_2: "At Hanye, our promise is simple: to offer hive products of impeccable purity, completely free of additives, preservatives, and industrial processing. From our hives to your table, you taste the true essence of nature.",
    val_1: "100% Artisanal",
    val_2: "Zero Additives",
    val_3: "Bee-friendly",
    about_photo_alt: "Beekeeper Hanye with natural hive products",

    // Pourquoi nous choisir
    why_tag: "Our Values",
    why_title: "Why Choose Hanye?",
    why_intro: "Honest, uncompromising principles to ensure you receive the finest products nature can offer.",
    why_1_title: "100% Natural",
    why_1_desc: "All our products are raw, pure, and free from added sugars, dyes, or artificial preservatives.",
    why_2_title: "Quality & Respect",
    why_2_desc: "Gentle artisanal harvesting that preserves bee colonies and guarantees unmatched botanical flavors.",
    why_3_title: "Delivery Available",
    why_3_desc: "Order in just a few clicks and receive your carefully packed hive products delivered right to your door.",

    // Contact
    contact_tag: "Get in Touch",
    contact_title: "Contact Us",
    contact_intro: "Have a question about our products or want to place an order? We are here to advise and assist you.",
    contact_phone_label: "Phone:",
    btn_call: "Call Us",
    btn_whatsapp: "WhatsApp",

    // Boutons Flottants & Footer
    fab_call: "Call",
    fab_wa: "WhatsApp",
    footer_copy: "© Hanye. All rights reserved.",

    // Messages WhatsApp prédéfinis
    wa_order_prefix: "Hello, I would like to order: ",
    wa_hero_msg: "Hello, I would like to order Hanye hive products",
    wa_contact_msg: "Hello Hanye, I would like more information about your products"
  }
};

// ============================================================================
// 3. FONCTIONS UTILITAIRES & FORMATTAGE
// ============================================================================

/**
 * Formate le prix selon la langue choisie
 */
function getFormattedPrice(productKey, lang) {
  const price = PRICES[productKey] || '';
  if (lang === 'ar') {
    return price.replace('DA', 'دج');
  }
  return price;
}

/**
 * Crée un lien WhatsApp sécurisé avec encodage URI
 */
function buildWhatsAppUrl(messageText) {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// ============================================================================
// 4. GESTION DE LA LANGUE (I18N)
// ============================================================================
let currentLang = 'fr';

/**
 * Récupère la langue sauvegardée dans localStorage avec try/catch
 */
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem('hanye_lang');
    if (saved && (saved === 'ar' || saved === 'fr' || saved === 'en')) {
      return saved;
    }
  } catch (e) {
    console.warn('Accès à localStorage non autorisé ou indisponible :', e);
  }
  return 'fr'; // Langue par défaut
}

/**
 * Sauvegarde la langue choisie avec try/catch
 */
function saveLanguage(lang) {
  try {
    localStorage.setItem('hanye_lang', lang);
  } catch (e) {
    console.warn('Impossible de sauvegarder la langue dans localStorage :', e);
  }
}

/**
 * Applique la langue sur l'ensemble de la page
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  saveLanguage(lang);

  // 1. Attributs HTML globaux (RTL pour l'arabe, LTR pour fr/en)
  const isRtl = (lang === 'ar');
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  // 2. Mise à jour Title et Meta Description SEO
  document.title = TRANSLATIONS[lang].meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', TRANSLATIONS[lang].meta_desc);
  }

  // 3. Remplacement de tous les textes avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key] !== undefined) {
      element.textContent = TRANSLATIONS[lang][key];
    }
  });

  // 4. Remplacement des attributs alt avec data-i18n-alt
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    if (TRANSLATIONS[lang][key] !== undefined) {
      element.setAttribute('alt', TRANSLATIONS[lang][key]);
    }
  });

  // 5. Mise à jour des boutons du sélecteur de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 6. Mise à jour des prix affichés
  const priceMielEl = document.getElementById('price-miel');
  const pricePropolisEl = document.getElementById('price-propolis');
  const pricePollenEl = document.getElementById('price-pollen');
  if (priceMielEl) priceMielEl.textContent = getFormattedPrice('miel', lang);
  if (pricePropolisEl) pricePropolisEl.textContent = getFormattedPrice('propolis', lang);
  if (pricePollenEl) pricePollenEl.textContent = getFormattedPrice('pollen', lang);

  // 7. Mise à jour dynamique des liens WhatsApp pour chaque produit
  document.querySelectorAll('.btn-order[data-product]').forEach(btn => {
    const productKey = btn.getAttribute('data-product');
    const productNameKey = `prod_${productKey}_name`;
    const productName = TRANSLATIONS[lang][productNameKey] || productKey;
    const orderMsg = `${TRANSLATIONS[lang].wa_order_prefix}${productName}`;
    btn.setAttribute('href', buildWhatsAppUrl(orderMsg));
  });

  // 8. Mise à jour des liens WhatsApp généraux (Hero, Contact, FAB)
  const heroWaBtn = document.getElementById('hero-wa-btn');
  if (heroWaBtn) {
    heroWaBtn.setAttribute('href', buildWhatsAppUrl(TRANSLATIONS[lang].wa_hero_msg));
  }

  const contactWaBtn = document.getElementById('contact-wa-btn');
  if (contactWaBtn) {
    contactWaBtn.setAttribute('href', buildWhatsAppUrl(TRANSLATIONS[lang].wa_contact_msg));
  }

  const fabWaBtn = document.getElementById('fab-wa-btn');
  if (fabWaBtn) {
    fabWaBtn.setAttribute('href', buildWhatsAppUrl(TRANSLATIONS[lang].wa_hero_msg));
  }
}

// ============================================================================
// 5. INITIALISATION DES ÉVÉNEMENTS & MENU MOBILE
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // A. Initialiser la langue
  const initialLang = getSavedLanguage();
  setLanguage(initialLang);

  // B. Écouteurs sur les boutons du sélecteur de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.currentTarget.getAttribute('data-lang');
      if (selectedLang && selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });

  // C. Gestion du Menu Burger Mobile
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  function toggleMenu(forceClose = false) {
    if (!burgerBtn || !navMenu) return;
    const isOpen = forceClose ? false : !navMenu.classList.contains('open');

    if (isOpen) {
      navMenu.classList.add('open');
      burgerBtn.classList.add('active');
      burgerBtn.setAttribute('aria-expanded', 'true');
    } else {
      navMenu.classList.remove('open');
      burgerBtn.classList.remove('active');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      toggleMenu();
    });
  }

  // Fermer le menu lors du clic sur un lien de navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(true);
    });
  });

  // Fermer le menu au clic en dehors
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        toggleMenu(true);
      }
    }
  });

  // Fermer le menu avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
      toggleMenu(true);
    }
  });
});
