(function () {
  "use strict";

  // Translations
  var translations = {
    en: {
      nav_home: "Home",
      nav_privacy: "Privacy",
      nav_terms: "Terms",
      nav_faq: "FAQ",
      nav_status: "Status",
      home_heading: "Download P K",
      home_sub: "Get P K on iPhone as an installable web app, or download the Android app.",
      btn_ios_label: "Install for iOS",
      btn_ios_sub: "Progressive Web App",
      btn_bazaar_label: "Cafe Bazaar",
      btn_myket_label: "Myket",
      btn_android_sub: "Android",
      qr_heading: "Download the P K app",
      qr_sub: "Scan to get the app",
      security_heading: "Security Built on Blockchain",
      security_sub: "P K accounts are protected with end-to-end encryption and blockchain-based verification, so you stay in control of your data.",
      posts_heading: "User Comments",
      posts_subtitle: "Real experiences from people using P K",
      devices_title: "P K, more than social media",
      devices_desc: "Stay close to your friends, share moments as they happen, and never miss what's trending. Fast, reliable, and always there.",
      ios_eyebrow: "Web App",
      ios_title: "PWA Version",
      ios_desc: "Open P K straight from Safari or Chrome, no App Store needed. Loads fast and stays up to date on its own.",
      ios_cta: "Enter the web app",
      android_eyebrow: "Android",
      android_title: "P K Android App",
      android_desc: "Install the P K Android app from Cafe Bazaar or Myket and connect to P K with full speed and security.",
      footer_download_cta: "Download the app",
      footer_about_h: "About P K",
      footer_about_p: "P K is a social platform built for speed, privacy, and real conversations. Available on iOS as a web app, and on Android through Cafe Bazaar and Myket.",
      footer_feat1: "End-to-end encrypted accounts",
      footer_feat2: "Fast, installable web app",
      footer_feat3: "Native Android apps",
      footer_links_h: "Links",
      faq_title: "Frequently Asked Questions",
      faq_sub: "Common questions about safety and uptime.",
      faq_q1: "Is my data safe on P K?",
      faq_a1: "Yes. Accounts are protected with end-to-end encryption and blockchain-based verification.",
      faq_q2: "What happens if the service goes down?",
      faq_a2: "You can check live status anytime from the Status page.",
      faq_q3: "Is it safe to download from Cafe Bazaar or Myket?",
      faq_a3: "Yes, both are distributed directly through the official Cafe Bazaar and Myket apps.",
      faq_q4: "Does the PWA update automatically?",
      faq_a4: "Yes. The web app loads the latest version every time you open it, no manual update needed.",
      faq_q5: "How do I report a security issue?",
      faq_a5: "Use the contact details listed on the Privacy Policy page to reach the P K team.",
      status_title: "Server Status",
      status_sub: "Live status for P K's core services.",
      status_item_web: "Website (p-k.me)",
      status_item_dl: "Download servers (Bazaar / Myket)",
      status_item_app: "Web app (PWA)",
      status_state: "Operational",
      status_uptime: "97.9% uptime",
      explain_heading: "Choose how you connect",
      item1_title: "iOS - Progressive Web App",
      item1_desc: "Runs right from Safari. No App Store needed.",
      item2_title: "Android - Cafe Bazaar",
      item2_desc: "Get the Android app from Cafe Bazaar.",
      item3_title: "Android - Myket",
      item3_desc: "Get the Android app from Myket.",
      footer_copy: "© 2026 P K. All rights reserved.",
      modal_title: "Install on iOS",
      modal_step1: "Open P K in Safari.",
      modal_step2: "Tap the Share icon in the toolbar.",
      modal_step3: "Select Add to Home Screen.",
      modal_step4: "Tap Add to confirm.",
      modal_enter_site: "Go to the site",
      privacy_title: "Privacy Policy",
      terms_title: "Terms and Conditions",
      p_intro_h: "Introduction",
      p_intro_p: "This document explains how P K collects, uses, and retains user information.",
      p_collect_h: "Information We Collect",
      p_collect_p: "When you sign up and use the service, we collect things like your username, email, posted content, and basic device data.",
      p_use_h: "How We Use Information",
      p_use_p: "We use this information to run and improve the service, talk to users, and keep the platform secure.",
      p_sharing_h: "Data Sharing",
      p_sharing_p: "We don't share user information with third parties without consent, except where the law requires it.",
      p_retention_h: "Data Retention",
      p_retention_p: "We keep information while an account stays active, or as long as the law requires.",
      p_rights_h: "Your Rights",
      p_rights_p: "You can ask to see, correct, or delete your information at any time.",
      p_security_h: "Security",
      p_security_p: "We use reasonable technical and organizational measures to protect your data, though no method of storage or transmission is fully secure.",
      p_changes_h: "Changes to This Policy",
      p_changes_p: "This policy may change over time. We'll announce major changes through the service.",
      p_contact_h: "Contact",
      p_contact_p: "For questions about this policy, use the contact details listed on the site.",
      t_accept_h: "Acceptance of Terms",
      t_accept_p: "By using P K, you agree to these Terms and Conditions.",
      t_eligibility_h: "Eligibility",
      t_eligibility_p: "You must meet the minimum legal age in your country to use the service.",
      t_accounts_h: "Accounts",
      t_accounts_p: "You're responsible for keeping your login details private and for all activity on your account.",
      t_use_h: "Acceptable Use",
      t_use_p: "Don't post illegal or abusive content, or content that breaks someone else's rights.",
      t_content_h: "Content Ownership",
      t_content_p: "You keep ownership of what you post. Posting it gives P K a license to show it on the platform.",
      t_termination_h: "Termination",
      t_termination_p: "P K can limit access or deactivate an account that breaks these terms.",
      t_disclaimers_h: "Disclaimers",
      t_disclaimers_p: "The service is provided as is, with no guarantee it will always run without errors or interruptions.",
      t_liability_h: "Limitation of Liability",
      t_liability_p: "P K isn't liable for indirect damages from using the service.",
      t_law_h: "Governing Law",
      t_law_p: "These terms follow the laws of the Islamic Republic of Iran.",
      t_changes_h: "Changes to These Terms",
      t_changes_p: "These terms may be updated. The new version applies from its publish date.",
      t_contact_h: "Contact",
      t_contact_p: "For questions about these terms, use the contact details listed on the site."
    },
    fa: {
      nav_home: "خانه",
      nav_privacy: "حریم خصوصی",
      nav_terms: "قوانین و مقررات",
      nav_faq: "سوالات متداول",
      nav_status: "وضعیت سرور",
      home_heading: "دانلود P K",
      home_sub: "پی کی (P K)، پیام‌رسان و رسانه اجتماعی ایرانی را روی آیفون به‌صورت وب‌اپ نصب کنید یا نسخه اندروید را از کافه بازار و مایکت دانلود کنید.",
      btn_ios_label: "نصب برای iOS",
      btn_ios_sub: "وب‌اپ پیشرو (PWA)",
      btn_bazaar_label: "کافه بازار",
      btn_myket_label: "مایکت",
      btn_android_sub: "اندروید",
      qr_heading: "دانلود اپلیکیشن P K",
      qr_sub: "برای دریافت اپلیکیشن اسکن کنید",
      security_heading: "امنیت مبتنی بر بلاک‌چین",
      security_sub: "حساب‌های P K با رمزنگاری سرتاسری و تأیید هویت مبتنی بر بلاک‌چین محافظت می‌شوند تا کنترل داده‌هایتان همیشه دست خودتان بماند.",
      posts_heading: "نظرات کاربران",
      posts_subtitle: "تجربه واقعی کاربران از پیام‌رسان و فضای گفتگوی P K",
      devices_title: "P K فراتر از یک رسانه اجتماعی",
      devices_desc: "با P K راحت در جریان دوستانت باش، لحظه‌ها رو به اشتراک بذار و هیچ‌وقت ترندهای جدید رو از دست نده. سریع، قابل‌اعتماد و همیشه در دسترس.",
      ios_eyebrow: "وب اپ",
      ios_title: "نسخه PWA",
      ios_desc: "مستقیماً از Safari یا Chrome وارد P K شو، بدون نیاز به نصب از App Store. سریع بالا میاد و همیشه به‌روزه.",
      ios_cta: "ورود به وب اپلیکیشن",
      android_eyebrow: "اندروید",
      android_title: "اپلیکیشن اندروید P K",
      android_desc: "اپلیکیشن اندروید P K رو از کافه بازار یا مایکت نصب کن و با سرعت و امنیت کامل به P K وصل شو.",
      footer_download_cta: "دانلود اپلیکیشن",
      footer_about_h: "درباره P K",
      footer_about_p: "P K یک پلتفرم اجتماعی برای گفتگوهای واقعی با تمرکز بر سرعت و حریم خصوصیه. روی iOS به‌صورت وب‌اپ و روی اندروید از طریق کافه بازار و مایکت در دسترسه.",
      footer_feat1: "حساب‌های رمزنگاری‌شده سرتاسری",
      footer_feat2: "وب‌اپ سریع و قابل‌نصب",
      footer_feat3: "اپلیکیشن بومی اندروید",
      footer_links_h: "لینک‌ها",
      faq_title: "سوالات متداول",
      faq_sub: "پرسش‌های رایج درباره امنیت و پایداری سرویس.",
      faq_q1: "آیا اطلاعات من روی P K امن است؟",
      faq_a1: "بله. حساب‌ها با رمزنگاری سرتاسری و تأیید هویت مبتنی بر بلاک‌چین محافظت می‌شوند.",
      faq_q2: "در صورت قطعی سرویس چه اتفاقی می‌افتد؟",
      faq_a2: "می‌توانید با مراجعه به بخش وضعیت سرور وضعیت لحظه‌ای سرور را مشاهده کنید.",
      faq_q3: "دانلود از کافه بازار یا مایکت امن است؟",
      faq_a3: "بله، هر دو نسخه مستقیماً از طریق اپلیکیشن‌های رسمی کافه بازار و مایکت در دسترس می‌باشد.",
      faq_q4: "آیا نسخه PWA به‌صورت خودکار به‌روزرسانی می‌شود؟",
      faq_a4: "بله نسخه وب اپ دائما مطابق با آخرین بروزرسانی‌ها تغییر می‌کند و نیازی به بروزرسانی و آپدیت دستی نمی‌باشد.",
      faq_q5: "چطور یک مشکل امنیتی رو گزارش کنم؟",
      faq_a5: "از طریق اطلاعات تماس درج‌شده در صفحه حریم خصوصی می‌توانید با تیم P K در ارتباط باشید.",
      status_title: "وضعیت سرور",
      status_sub: "وضعیت لحظه‌ای سرویس‌های اصلی P K.",
      status_item_web: "وب‌سایت (p-k.me)",
      status_item_dl: "سرورهای دانلود (بازار / مایکت)",
      status_item_app: "وب‌اپ (PWA)",
      status_state: "فعال",
      status_uptime: "۹۷.۹٪ آپ‌تایم",
      explain_heading: "روش اتصال را انتخاب کنید",
      item1_title: "iOS - وب‌اپ پیشرو",
      item1_desc: "مستقیماً از طریق Safari اجرا می‌شود. نیازی به App Store نیست.",
      item2_title: "اندروید - کافه بازار",
      item2_desc: "اپلیکیشن اندروید را از کافه بازار دریافت کنید.",
      item3_title: "اندروید - مایکت",
      item3_desc: "اپلیکیشن اندروید را از مایکت دریافت کنید.",
      footer_copy: "© ۲۰۲۶ P K. تمامی حقوق محفوظ است.",
      modal_title: "نصب روی iOS",
      modal_step1: "P K را در Safari باز کنید.",
      modal_step2: "در نوار ابزار روی آیکن اشتراک‌گذاری (Share) بزنید.",
      modal_step3: "گزینه Add to Home Screen را انتخاب کنید.",
      modal_step4: "برای تأیید روی Add بزنید.",
      modal_enter_site: "ورود به سایت",
      privacy_title: "حریم خصوصی",
      terms_title: "قوانین و مقررات",
      p_intro_h: "مقدمه",
      p_intro_p: "این سند نحوه جمع‌آوری، استفاده و نگهداری اطلاعات کاربران در P K را توضیح می‌دهد.",
      p_collect_h: "اطلاعاتی که جمع‌آوری می‌کنیم",
      p_collect_p: "هنگام ثبت‌نام و استفاده از سرویس، اطلاعاتی مانند نام کاربری، ایمیل، محتوای منتشرشده و داده‌های پایه دستگاه جمع‌آوری می‌شود.",
      p_use_h: "نحوه استفاده از اطلاعات",
      p_use_p: "از این اطلاعات برای اجرا و بهبود سرویس، ارتباط با کاربران و تأمین امنیت پلتفرم استفاده می‌کنیم.",
      p_sharing_h: "اشتراک‌گذاری داده‌ها",
      p_sharing_p: "اطلاعات کاربران بدون رضایت، جز در مواردی که قانون الزام کند، با اشخاص ثالث به اشتراک گذاشته نمی‌شود.",
      p_retention_h: "نگهداری داده‌ها",
      p_retention_p: "اطلاعات تا زمانی که حساب کاربری فعال باشد یا تا جایی که قانون لازم بداند نگهداری می‌شود.",
      p_rights_h: "حقوق کاربران",
      p_rights_p: "می‌توانید هر زمان درخواست مشاهده، اصلاح یا حذف اطلاعات خود را بدهید.",
      p_security_h: "امنیت",
      p_security_p: "برای محافظت از داده‌های شما از اقدامات فنی و سازمانی متعارف استفاده می‌شود، هرچند هیچ روش ذخیره‌سازی یا انتقالی صد در صد ایمن نیست.",
      p_changes_h: "تغییرات در این سیاست",
      p_changes_p: "این سیاست ممکن است تغییر کند. تغییرات مهم از طریق سرویس اطلاع‌رسانی خواهد شد.",
      p_contact_h: "تماس با ما",
      p_contact_p: "برای پرسش درباره این سیاست از طریق اطلاعات تماس درج‌شده در سایت با ما در ارتباط باشید.",
      t_accept_h: "پذیرش قوانین",
      t_accept_p: "با استفاده از P K، این قوانین و مقررات را می‌پذیرید.",
      t_eligibility_h: "شرایط استفاده",
      t_eligibility_p: "باید حداقل سن قانونی کشور خود را برای استفاده از سرویس داشته باشید.",
      t_accounts_h: "حساب کاربری",
      t_accounts_p: "حفظ محرمانگی اطلاعات ورود و تمام فعالیت‌های حساب‌تان بر عهده شماست.",
      t_use_h: "استفاده مجاز",
      t_use_p: "انتشار محتوای غیرقانونی، آزاردهنده یا ناقض حقوق دیگران مجاز نیست.",
      t_content_h: "مالکیت محتوا",
      t_content_p: "مالکیت محتوای منتشرشده با شماست. با انتشار آن، مجوز نمایش آن در پلتفرم را به P K می‌دهید.",
      t_termination_h: "فسخ دسترسی",
      t_termination_p: "P K می‌تواند در صورت نقض این قوانین، دسترسی یا حساب کاربر را محدود کند.",
      t_disclaimers_h: "سلب مسئولیت",
      t_disclaimers_p: "سرویس به‌صورت «همان‌گونه که هست» ارائه می‌شود، بدون تضمین عملکرد همیشگی بدون وقفه یا خطا.",
      t_liability_h: "محدودیت مسئولیت",
      t_liability_p: "P K در قبال خسارات غیرمستقیم ناشی از استفاده از سرویس مسئولیتی ندارد.",
      t_law_h: "قانون حاکم",
      t_law_p: "این قوانین تابع قوانین جمهوری اسلامی ایران است.",
      t_changes_h: "تغییرات در قوانین",
      t_changes_p: "این قوانین ممکن است به‌روزرسانی شود و نسخه جدید از تاریخ انتشار معتبر است.",
      t_contact_h: "تماس با ما",
      t_contact_p: "برای پرسش درباره این قوانین از طریق اطلاعات تماس درج‌شده در سایت با ما در ارتباط باشید."
    }
  };

  var pageTitles = {
    home: { en: "Download P K", fa: "دانلود P K" },
    privacy: { en: "Privacy Policy - P K", fa: "حریم خصوصی - P K" },
    terms: { en: "Terms and Conditions - P K", fa: "قوانین و مقررات - P K" },
    faq: { en: "FAQ - P K", fa: "سوالات متداول - P K" },
    status: { en: "Server Status - P K", fa: "وضعیت سرور - P K" }
  };

  var LANG_KEY = "pk_lang";
  var THEME_KEY = "pk_theme";
  var currentLang = "fa";
  try {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "fa") currentLang = saved;
  } catch (e) {}

  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Detect current page from path
  function getCurrentPage() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    path = path.toLowerCase();
    if (path === "" || path === "index.html" || path === "خانه.html" || path === "home.html") return "home";
    if (path.indexOf("privacy") !== -1 || path.indexOf("حریم") !== -1) return "privacy";
    if (path.indexOf("terms") !== -1 || path.indexOf("قوانین") !== -1) return "terms";
    if (path.indexOf("faq") !== -1 || path.indexOf("سوالات") !== -1) return "faq";
    if (path.indexOf("status") !== -1 || path.indexOf("وضعیت") !== -1) return "status";
    return "home";
  }

  var currentPage = getCurrentPage();

  function applyTranslations() {
    var dict = translations[currentLang];
    document.querySelectorAll("[data-key]").forEach(function (el) {
      var key = el.getAttribute("data-key");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "fa" ? "rtl" : "ltr";
    var langLabel = document.getElementById("langToggleLabel");
    if (langLabel) langLabel.textContent = currentLang === "fa" ? "English" : "فارسی";
    if (pageTitles[currentPage]) {
      document.title = pageTitles[currentPage][currentLang];
    }
    try {
      localStorage.setItem(LANG_KEY, currentLang);
    } catch (e) {}
  }

  function setTheme(theme) {
    theme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    // Force critical surfaces so theme always applies even if CSS cascade fails
    var isDark = theme === "dark";
    document.body.style.backgroundColor = isDark ? "#0a0f1a" : "#ffffff";
    document.body.style.color = isDark ? "#e8eef8" : "#0b1220";
    var header = document.querySelector("header");
    if (header) {
      header.style.background = isDark ? "rgba(10,15,26,0.88)" : "rgba(255,255,255,0.82)";
    }
    var sun = document.getElementById("sunIcon");
    var moon = document.getElementById("moonIcon");
    if (sun && moon) {
      if (isDark) {
        sun.classList.remove("hidden");
        moon.classList.add("hidden");
      } else {
        sun.classList.add("hidden");
        moon.classList.remove("hidden");
      }
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
  }

  // Init theme
  var theme = "light";
  try {
    var savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === "dark" || savedTheme === "light") {
      theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  } catch (e) {}
  setTheme(theme);

  // Lang toggle
  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "fa" ? "en" : "fa";
      applyTranslations();
    });
  }

  // Theme toggle
  window.__pkSetTheme = setTheme;
  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.onclick = function () {
      var current = document.documentElement.getAttribute("data-theme") || "light";
      var next = (current === "dark") ? "light" : "dark";
      window.__pkLastThemeClick = current + "->" + next;
      setTheme(next);
    };
  }

  // Highlight active nav
  document.querySelectorAll(".tab[data-route]").forEach(function (tab) {
    var route = tab.getAttribute("data-route");
    tab.classList.toggle("active", route === currentPage);
  });

  // iOS Modal
  var iosModal = document.getElementById("iosModal");
  var btnIos = document.getElementById("btnIos");
  var modalClose = document.getElementById("iosModalClose");
  if (btnIos && iosModal) {
    btnIos.addEventListener("click", function () {
      iosModal.classList.add("open");
    });
  }
  if (modalClose && iosModal) {
    modalClose.addEventListener("click", function () {
      iosModal.classList.remove("open");
    });
  }
  if (iosModal) {
    iosModal.addEventListener("click", function (e) {
      if (e.target === iosModal) iosModal.classList.remove("open");
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && iosModal) iosModal.classList.remove("open");
  });

  // Scroll progress
  var scrollProgress = document.getElementById("scrollProgress");
  function updateScrollProgress() {
    if (!scrollProgress) return;
    var el = document.documentElement;
    var scrollTop = el.scrollTop || document.body.scrollTop;
    var height = el.scrollHeight - el.clientHeight;
    scrollProgress.style.width = (height > 0 ? (scrollTop / height) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Reveal on scroll
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  // Parallax for globe if present
  var globeImg = document.getElementById("globeImg");
  if (globeImg && !prefersReducedMotion) {
    var ticking = false;
    function updateGlobe() {
      var rect = globeImg.parentElement.getBoundingClientRect();
      var offset = 36 * ((window.innerHeight - rect.top) / (window.innerHeight + rect.height) - 0.5);
      globeImg.style.transform = "translateY(" + offset + "px) scale(1.1)";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(updateGlobe);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateGlobe();
  }

  // 3D tilt effect
  function setupTilt(stageId, targetId, intensity) {
    var stage = document.getElementById(stageId);
    var target = document.getElementById(targetId);
    if (!stage || !target || prefersReducedMotion) return;
    stage.addEventListener("mousemove", function (e) {
      var rect = stage.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      target.style.transform = "perspective(900px) rotateY(" + x * intensity + "deg) rotateX(" + -y * intensity + "deg)";
    });
    stage.addEventListener("mouseleave", function () {
      target.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    });
  }
  setupTilt("phoneStage", "phoneFrame", 18);
  setupTilt("devicesStage", "devicesGroup", 10);
  setupTilt("pwaStage", "pwaGroup", 10);
  setupTilt("androidStage", "androidGroup", 14);

  // QR Code (home only)
  try {
    if (window.QRious) {
      var qrCanvas = document.getElementById("qrCanvas");
      if (qrCanvas) {
        new QRious({
          element: qrCanvas,
          value: "https://p-k.me",
          size: 200,
          background: "#ffffff",
          foreground: "#0b1220",
          level: "H"
        });
        // Logo overlay if available
        var logoK = document.querySelector(".logo-k");
        if (logoK) {
          var ctx = qrCanvas.getContext("2d");
          var img = new Image();
          img.onload = function () {
            var size = 42;
            var cx = qrCanvas.width / 2;
            var cy = qrCanvas.height / 2;
            var x = cx - 21 - 6;
            var y = cy - 21 - 6;
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(x + 10, y);
            ctx.arcTo(x + 54, y, x + 54, y + 54, 10);
            ctx.arcTo(x + 54, y + 54, x, y + 54, 10);
            ctx.arcTo(x, y + 54, x, y, 10);
            ctx.arcTo(x, y, x + 54, y, 10);
            ctx.closePath();
            ctx.fill();
            ctx.drawImage(img, cx - 21, cy - 21, size, size);
          };
          img.src = logoK.getAttribute("src");
        }
      }
    }
  } catch (e) {}

  // Clone logo into slots
  var logoMark = document.querySelector(".logo-mark");
  if (logoMark) {
    var securitySlot = document.getElementById("securityLogoSlot");
    var footerSlot = document.getElementById("footerLogoSlot");
    if (securitySlot) securitySlot.innerHTML = logoMark.innerHTML;
    if (footerSlot) footerSlot.innerHTML = logoMark.innerHTML;
  }

  // Copy image srcs for mockups
  function copySrc(fromSel, toId) {
    var from = document.querySelector(fromSel);
    var to = document.getElementById(toId);
    if (from && to) to.setAttribute("src", from.getAttribute("src"));
  }
  copySrc("#devicesLaptopImg", "pwaLaptopImg");
  copySrc("#phoneFrame img", "pwaPhoneImg");
  copySrc(".phone-mock-a img", "androidPhoneImg");
  copySrc("#btnBazaar .icon-box img", "bazaarIcon2");
  copySrc("#btnMyket .icon-box img", "myketIcon2");

  // PWA CTA button
  var btnPwaCta = document.getElementById("btnPwaCta");
  if (btnPwaCta && iosModal) {
    btnPwaCta.addEventListener("click", function () {
      iosModal.classList.add("open");
    });
  }

  // Scroll to sections on home
  document.querySelectorAll(".item[data-target]").forEach(function (item) {
    function scrollToTarget() {
      var target = document.getElementById(item.getAttribute("data-target"));
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      }
    }
    item.addEventListener("click", scrollToTarget);
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTarget();
      }
    });
  });

  // Footer download button
  var footerDl = document.getElementById("footerDownloadBtn");
  if (footerDl) {
    footerDl.addEventListener("click", function () {
      if (currentPage !== "home") {
        var isPersianName = /[\u0600-\u06FF]/.test(window.location.pathname);
        window.location.href = isPersianName ? "خانه.html" : "index.html";
      } else {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    });
  }

  // Particles background
  var particlesCanvas = document.getElementById("particlesBg");
  if (particlesCanvas && !prefersReducedMotion) {
    var ctx = particlesCanvas.getContext("2d");
    var w, h;
    function resize() {
      w = particlesCanvas.width = window.innerWidth;
      h = particlesCanvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    var mouse = { x: w / 2, y: h / 2 };
    var particles = [];
    var lastMouse = { x: null, y: null };

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      var dx = lastMouse.x === null ? 999 : mouse.x - lastMouse.x;
      var dy = lastMouse.y === null ? 999 : mouse.y - lastMouse.y;
      if (dx * dx + dy * dy < 100) return;
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      particles.push({
        x: mouse.x + 6 * (Math.random() - 0.5),
        y: mouse.y + 6 * (Math.random() - 0.5),
        vx: 0.7 * (Math.random() - 0.5),
        vy: 0.7 * (Math.random() - 0.5) - 0.22,
        size: 2.2 * Math.random() + 1,
        life: 0,
        maxLife: 40 + 30 * Math.random()
      });
      if (particles.length > 45) particles.splice(0, particles.length - 45);
    });

    function animate() {
      ctx.clearRect(0, 0, w, h);
      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.004;
        p.life++;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        var lifeRatio = 1 - p.life / p.maxLife;
        var size = p.size * (0.6 + 0.8 * lifeRatio);
        var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 3 * size);
        grad.addColorStop(0, "rgba(57,146,235," + (0.55 * lifeRatio).toFixed(3) + ")");
        grad.addColorStop(1, "rgba(57,146,235,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * size, 0, 2 * Math.PI);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(230,240,255," + (0.85 * lifeRatio).toFixed(3) + ")";
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }

  // Apply translations on load
  applyTranslations();
})();
