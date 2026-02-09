protectPage();

const translations = {
  en: { welcome: "Welcome to FarmLink Network" },
  hi: { welcome: "फार्मलिंक नेटवर्क में आपका स्वागत है" },
  te: { welcome: "ఫార్మ్‌లింక్ నెట్‌వర్క్‌కు స్వాగతం" }
};

function changeLanguage() {
  const lang = document.getElementById("language").value;
  document.getElementById("welcome").innerText = translations[lang].welcome;
}
