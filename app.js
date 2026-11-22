// ARISE 1.3 — fresh standalone shell. Live data integration will be added module-by-module.
const languageButton = document.querySelector('#languageBtn');
const statusText = document.querySelector('#statusText');
let language = 'ar';
languageButton.addEventListener('click', () => {
  language = language === 'ar' ? 'en' : 'ar';
  languageButton.textContent = language === 'ar' ? 'EN' : 'عربي';
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  statusText.textContent = language === 'ar' ? 'مصادر البيانات غير مرتبطة' : 'Data sources not connected';
});
