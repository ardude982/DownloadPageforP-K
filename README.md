# P K Download Landing Page (Open Source)

این پروژه نسخه بازمتن صفحه دانلود پیام‌رسان و شبکه اجتماعی **P K** است.

## ساختار پروژه (Multi-page)

صفحات قبلاً به صورت SPA (تک‌صفحه‌ای با hash routing) بودند. حالا به صفحات جداگانه تقسیم شده‌اند:

| فایل | توضیح |
|------|--------|
| `index.html` یا `خانه.html` | صفحه اصلی / دانلود |
| `privacy.html` یا `حریم-خصوصی.html` | حریم خصوصی |
| `terms.html` یا `قوانین.html` | قوانین و مقررات |
| `faq.html` یا `سوالات-متداول.html` | سوالات متداول |
| `status.html` یا `وضعیت-سرور.html` | وضعیت سرور |

### پوشه‌ها

```
pk-download/
├── index.html              # صفحه اصلی
├── خانه.html               # نام فارسی صفحه اصلی
├── privacy.html
├── حریم-خصوصی.html
├── terms.html
├── قوانین.html
├── faq.html
├── سوالات-متداول.html
├── status.html
├── وضعیت-سرور.html
├── css/
│   └── style.css           # استایل‌های کامل (شامل فونت Vazirmatn)
├── js/
│   ├── app.js              # منطق اپلیکیشن (زبان، تم، انیمیشن‌ها، QR و ...)
│   └── qrious.min.js       # کتابخانه تولید QR Code (GPL v3)
└── README.md
```

## ویژگی‌ها

- پشتیبانی کامل دو زبانه (فارسی / English) با قابلیت تغییر زبان
- تم روشن / تاریک
- Progressive Web App (PWA) برای iOS
- لینک دانلود از کافه بازار و مایکت
- QR Code برای اسکن سریع
- انیمیشن‌های ذرات پس‌زمینه و افکت‌های 3D
- صفحات جداگانه برای SEO بهتر و بارگذاری سریع‌تر هر بخش

## نحوه اجرا

فقط فایل‌ها را روی هر وب‌سرور استاتیک (Nginx, Apache, GitHub Pages, Netlify و ...) قرار دهید.

برای تست محلی:

```bash
# با Python
python3 -m http.server 8080

# یا با npx
npx serve .
```

سپس مرورگر را روی `http://localhost:8080` باز کنید.

## تکنولوژی‌ها

- HTML5 + CSS3 (RTL-first)
- JavaScript خالص (بدون فریم‌ورک)
- [QRious](https://github.com/neocotic/qrious) برای QR Code
- فونت [Vazirmatn](https://github.com/rastikerdar/vazirmatn) (embedded)

## لایسنس

کد اصلی این صفحه متعلق به تیم P K است.  
کتابخانه QRious تحت لایسنس GPL v3 منتشر شده است.

---

**P K** — پیام‌رسان و رسانه اجتماعی ایرانی  
سایت: [https://p-k.me](https://p-k.me)

## Structure

```
pk-download/
├── index.html          # Home / download page
├── pages/
│   ├── privacy.html
│   ├── terms.html
│   ├── faq.html
│   └── status.html
├── css/
│   ├── style.css
│   └── fonts/          # Local Vazirmatn + Lalezar
├── js/
│   ├── app.js
│   └── qrious.min.js
├── assets/             # Logo images
├── LICENSE
└── README.md
```

Language (FA/EN) is switched in the UI — no separate HTML files per language.
