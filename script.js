// كائن الترجمة لكل لغة
const translations = {
  ar: {
    direction: 'rtl',
    lang: 'ar',
    logo: 'MiniShop',
    productName: 'اسم المنتج الرائع',
    productDesc: 'وصف قصير ومشوّق للمنتج...',
    buyNow: 'اطلب الآن',
    detailsTitle: 'تفاصيل المنتج',
    feature1Title: 'الميزة الأولى',
    feature1Desc: 'وصف مختصر للميزة الأولى وكيف تفيد المستخدم.',
    feature2Title: 'الميزة الثانية',
    feature2Desc: 'وصف مختصر للميزة الثانية وكيف تفيد المستخدم.',
    feature3Title: 'الميزة الثالثة',
    feature3Desc: 'وصف مختصر للميزة الثالثة وكيف تفيد المستخدم.',
    // لاحظ أننا وضعنا HTML يتضمن صورة الرمز
    priceLabel: 'السعر: 100 <img src="images/riyalsymbol.png" alt="ريال" class="riyalsymbol">',
    addToCart: 'أضف للسلة',
    footerText: 'جميع الحقوق محفوظة © 2025 - MiniShop',
    alertMessage: 'تمت إضافة المنتج إلى السلة!'
  },
  en: {
    direction: 'ltr',
    lang: 'en',
    logo: 'MiniShop',
    productName: 'Amazing Product',
    productDesc: 'A short, exciting description that highlights its features...',
    buyNow: 'Buy Now',
    detailsTitle: 'Product Details',
    feature1Title: 'Feature One',
    feature1Desc: 'Short description of how this feature benefits the user.',
    feature2Title: 'Feature Two',
    feature2Desc: 'Short description of how this feature benefits the user.',
    feature3Title: 'Feature Three',
    feature3Desc: 'Short description of how this feature benefits the user.',
    // هنا نستبدل الصورة بكلمة SAR
    priceLabel: 'Price: 100 SAR',
    addToCart: 'Add to Cart',
    footerText: 'All Rights Reserved © 2025 - MiniShop',
    alertMessage: 'Product added to cart!'
  }
};

// دالة التبديل بين اللغتين
function setLanguage(lang) {
  const t = translations[lang];

  // تغيير لغة و اتجاه الصفحة
  document.documentElement.lang = t.lang;
  document.body.dir = t.direction;

  // استبدال النصوص في الصفحة
  document.getElementById('logo').textContent = t.logo;
  document.getElementById('product-name').textContent = t.productName;
  document.getElementById('product-desc').textContent = t.productDesc;
  document.getElementById('buy-button').textContent = t.buyNow;
  document.getElementById('details-title').textContent = t.detailsTitle;
  document.getElementById('feature1-title').textContent = t.feature1Title;
  document.getElementById('feature1-desc').textContent = t.feature1Desc;
  document.getElementById('feature2-title').textContent = t.feature2Title;
  document.getElementById('feature2-desc').textContent = t.feature2Desc;
  document.getElementById('feature3-title').textContent = t.feature3Title;
  document.getElementById('feature3-desc').textContent = t.feature3Desc;

  // استبدال السعر مع الرمز (قد يحتوي HTML، لذلك نستخدم innerHTML)
  document.getElementById('price-label').innerHTML = t.priceLabel;

  // زر الشراء الثاني
  document.getElementById('buy-button-2').textContent = t.addToCart;

  // الفوتر
  document.getElementById('footer-text').textContent = t.footerText;

  // حفظ الرسالة الخاصة بالتنبيه في حال أردنا تغييرها أيضًا
  window.currentAlertMessage = t.alertMessage;
}

// دالة إضافة المنتج للسلة (تجريبية)
function addToCart() {
  // إذا أردت استخدام رسالة التنبيه للغة الحالية
  alert(window.currentAlertMessage || "تمت إضافة المنتج إلى السلة!");
}
