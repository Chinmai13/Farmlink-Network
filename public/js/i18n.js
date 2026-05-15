(function (global) {
  const STORAGE_KEY = "farmlink_lang";
  const DEFAULT_LANG = "en";

  const translations = {
    en: {
      role_farmer: "farmer",
      role_buyer: "buyer",
      title_home: "FarmLink Network",
      title_signin: "Sign In - FarmLink Network",
      title_signup: "Sign Up - FarmLink Network",
      title_addcrop: "Add Crop - FarmLink Network",
      title_products: "FarmLink - Products",
      title_feedback: "Feedback - FarmLink Network",
      title_profile: "Farmer Profile - FarmLink",
      appTitle: "FarmLink Network",
      tagline: "Direct farm to buyer. No middleman.",
      loadingAccount: "Loading account...",
      addCrop: "Add Crop",
      viewCrops: "View Crops",
      feedback: "Feedback",
      myAccount: "My Account",
      logout: "Logout",
      accountInfo: "Name: {name}\nRole: {role}\nPhone: {phone}",
      signIn: "Sign In",
      email: "Email",
      password: "Password",
      login: "Login",
      createAccountLink: "Create new account",
      enterEmailPassword: "Enter email and password.",
      createAccount: "Create Account",
      fullName: "Full name",
      phoneNumber: "Phone number",
      passwordPlaceholder: "Password (6+ chars)",
      farmer: "Farmer",
      buyer: "Buyer",
      signUp: "Sign Up",
      alreadyRegistered: "Already registered? Sign in",
      fillAllFields: "Please fill all fields and use password of at least 6 characters.",
      addCropTitle: "Add Crop",
      productName: "Product Name (Crop Type):",
      quantityKg: "Quantity (kg):",
      farmerName: "Farmer Name:",
      farmLocation: "Farm Location:",
      costPerKg: "Cost (per kg):",
      contactNumber: "Contact Number:",
      contactHint: "Buyers will call this number.",
      cropImage: "Crop Image:",
      cropPreview: "Crop Preview",
      contactPlaceholder: "Enter 10-digit number",
      publishCrop: "Publish Crop",
      back: "Back",
      cropPublished: "Crop published successfully.",
      errorPrefix: "Error: ",
      productsHeader: "FarmLink Product Listings",
      filterByCrop: "Filter by crop",
      filterByLocation: "Filter by location",
      backHome: "Back to Home",
      crop: "Crop:",
      contact: "Contact:",
      cost: "Cost:",
      quantity: "Quantity:",
      call: "Call",
      whatsapp: "WhatsApp",
      share: "Share",
      reviews: "Reviews:",
      loadingReviews: "Loading reviews...",
      noReviews: "No reviews yet.",
      noProducts: "No products found.",
      perKg: "per kg",
      kg: "kg",
      shareCopied: "Share text copied.",
      shareFresh: "Fresh {crop}",
      shareLine: "{qty} kg | Rs {price} per kg",
      shareContact: "Contact: {phone}",
      feedbackPageTitle: "Farmlink Network - Feedback",
      rateReview: "Rate and Review",
      selectProduct: "Select a Product",
      thumbsUp: "Thumbs Up",
      thumbsDown: "Thumbs Down",
      writeReview: "Write your review...",
      submit: "Submit",
      submittedSuccess: "Submitted Successfully!",
      noReviewableProducts: "No reviewable products available",
      noProductsReview: "No products available to review.",
      cannotReviewOwn: "You cannot review your own product or product not found.",
      fillReviewFields: "Please fill in all fields",
      errorLoadingProducts: "Error loading products: ",
      farmerProfile: "Farmer Profile",
      location: "Location:",
      productsCrops: "Products/Crops:",
      costLabel: "Cost:",
      noReviewsYet: "No reviews yet",
      errorLoadingReviews: "Error loading reviews",
      noFarmerProducts: "This farmer hasn't listed any products yet.",
      errorLoadingProductsShort: "Error loading products.",
      noFarmerSelected: "No farmer selected.",
      na: "N/A"
    },
    hi: {
      role_farmer: "किसान",
      role_buyer: "खरीदार",
      title_home: "फार्मलिंक नेटवर्क",
      title_signin: "साइन इन - फार्मलिंक",
      title_signup: "साइन अप - फार्मलिंक",
      title_addcrop: "फसल जोड़ें - फार्मलिंक",
      title_products: "फार्मलिंक - उत्पाद",
      title_feedback: "प्रतिक्रिया - फार्मलिंक",
      title_profile: "किसान प्रोफ़ाइल - फार्मलिंक",
      appTitle: "फार्मलिंक नेटवर्क",
      tagline: "सीधे किसान से खरीदार। कोई बिचौलिया नहीं।",
      loadingAccount: "खाता लोड हो रहा है...",
      addCrop: "फसल जोड़ें",
      viewCrops: "फसलें देखें",
      feedback: "प्रतिक्रिया",
      myAccount: "मेरा खाता",
      logout: "लॉग आउट",
      accountInfo: "नाम: {name}\nभूमिका: {role}\nफ़ोन: {phone}",
      signIn: "साइन इन",
      email: "ईमेल",
      password: "पासवर्ड",
      login: "लॉगिन",
      createAccountLink: "नया खाता बनाएं",
      enterEmailPassword: "ईमेल और पासवर्ड दर्ज करें।",
      createAccount: "खाता बनाएं",
      fullName: "पूरा नाम",
      phoneNumber: "फ़ोन नंबर",
      passwordPlaceholder: "पासवर्ड (6+ अक्षर)",
      farmer: "किसान",
      buyer: "खरीदार",
      signUp: "साइन अप",
      alreadyRegistered: "पहले से पंजीकृत? साइन इन करें",
      fillAllFields: "सभी फ़ील्ड भरें और कम से कम 6 अक्षर का पासवर्ड उपयोग करें।",
      addCropTitle: "फसल जोड़ें",
      productName: "उत्पाद का नाम (फसल):",
      quantityKg: "मात्रा (किग्रा):",
      farmerName: "किसान का नाम:",
      farmLocation: "खेत का स्थान:",
      costPerKg: "कीमत (प्रति किग्रा):",
      contactNumber: "संपर्क नंबर:",
      contactHint: "खरीदार इस नंबर पर कॉल करेंगे।",
      cropImage: "फसल की तस्वीर:",
      cropPreview: "फसल पूर्वावलोकन",
      contactPlaceholder: "10 अंकों का नंबर दर्ज करें",
      publishCrop: "फसल प्रकाशित करें",
      back: "वापस",
      cropPublished: "फसल सफलतापूर्वक प्रकाशित हुई।",
      errorPrefix: "त्रुटि: ",
      productsHeader: "फार्मलिंक उत्पाद सूची",
      filterByCrop: "फसल से फ़िल्टर",
      filterByLocation: "स्थान से फ़िल्टर",
      backHome: "होम पर वापस",
      crop: "फसल:",
      contact: "संपर्क:",
      cost: "कीमत:",
      quantity: "मात्रा:",
      call: "कॉल",
      whatsapp: "व्हाट्सऐप",
      share: "साझा करें",
      reviews: "समीक्षाएँ:",
      loadingReviews: "समीक्षाएँ लोड हो रही हैं...",
      noReviews: "अभी कोई समीक्षा नहीं।",
      noProducts: "कोई उत्पाद नहीं मिला।",
      perKg: "प्रति किग्रा",
      kg: "किग्रा",
      shareCopied: "साझा पाठ कॉपी हो गया।",
      shareFresh: "ताज़ा {crop}",
      shareLine: "{qty} किग्रा | ₹ {price} प्रति किग्रा",
      shareContact: "संपर्क: {phone}",
      feedbackPageTitle: "फार्मलिंक - प्रतिक्रिया",
      rateReview: "रेटिंग और समीक्षा",
      selectProduct: "उत्पाद चुनें",
      thumbsUp: "अच्छा",
      thumbsDown: "खराब",
      writeReview: "अपनी समीक्षा लिखें...",
      submit: "जमा करें",
      submittedSuccess: "सफलतापूर्वक जमा हुआ!",
      noReviewableProducts: "समीक्षा के लिए कोई उत्पाद नहीं",
      noProductsReview: "समीक्षा के लिए कोई उत्पाद उपलब्ध नहीं।",
      cannotReviewOwn: "आप अपने उत्पाद की समीक्षा नहीं कर सकते या उत्पाद नहीं मिला।",
      fillReviewFields: "कृपया सभी फ़ील्ड भरें",
      errorLoadingProducts: "उत्पाद लोड करने में त्रुटि: ",
      farmerProfile: "किसान प्रोफ़ाइल",
      location: "स्थान:",
      productsCrops: "उत्पाद/फसलें:",
      costLabel: "कीमत:",
      noReviewsYet: "अभी कोई समीक्षा नहीं",
      errorLoadingReviews: "समीक्षाएँ लोड करने में त्रुटि",
      noFarmerProducts: "इस किसान ने अभी कोई उत्पाद सूचीबद्ध नहीं किया।",
      errorLoadingProductsShort: "उत्पाद लोड करने में त्रुटि।",
      noFarmerSelected: "कोई किसान चयनित नहीं।",
      na: "उपलब्ध नहीं"
    },
    te: {
      role_farmer: "రైతు",
      role_buyer: "కొనుగోలుదారు",
      title_home: "ఫార్మ్‌లింక్ నెట్‌వర్క్",
      title_signin: "సైన్ ఇన్ - ఫార్మ్‌లింక్",
      title_signup: "సైన్ అప్ - ఫార్మ్‌లింక్",
      title_addcrop: "పంట జోడించు - ఫార్మ్‌లింక్",
      title_products: "ఫార్మ్‌లింక్ - ఉత్పత్తులు",
      title_feedback: "అభిప్రాయం - ఫార్మ్‌లింక్",
      title_profile: "రైతు ప్రొఫైల్ - ఫార్మ్‌లింక్",
      appTitle: "ఫార్మ్‌లింక్ నెట్‌వర్క్",
      tagline: "నేరుగా రైతు నుండి కొనుగోలుదారుకు. మధ్యవర్తి లేదు.",
      loadingAccount: "ఖాతా లోడ్ అవుతోంది...",
      addCrop: "పంట జోడించు",
      viewCrops: "పంటలు చూడండి",
      feedback: "అభిప్రాయం",
      myAccount: "నా ఖాతా",
      logout: "లాగ్ అవుట్",
      accountInfo: "పేరు: {name}\nపాత్ర: {role}\nఫోన్: {phone}",
      signIn: "సైన్ ఇన్",
      email: "ఇమెయిల్",
      password: "పాస్‌వర్డ్",
      login: "లాగిన్",
      createAccountLink: "కొత్త ఖాతా సృష్టించండి",
      enterEmailPassword: "ఇమెయిల్ మరియు పాస్‌వర్డ్ నమోదు చేయండి.",
      createAccount: "ఖాతా సృష్టించు",
      fullName: "పూర్తి పేరు",
      phoneNumber: "ఫోన్ నంబర్",
      passwordPlaceholder: "పాస్‌వర్డ్ (6+ అక్షరాలు)",
      farmer: "రైతు",
      buyer: "కొనుగోలుదారు",
      signUp: "సైన్ అప్",
      alreadyRegistered: "ఇప్పటికే నమోదు? సైన్ ఇన్",
      fillAllFields: "అన్ని ఫీల్డ్‌లు పూరించండి మరియు కనీసం 6 అక్షరాల పాస్‌వర్డ్ ఉపయోగించండి.",
      addCropTitle: "పంట జోడించు",
      productName: "ఉత్పత్తి పేరు (పంట):",
      quantityKg: "పరిమాణం (కిలో):",
      farmerName: "రైతు పేరు:",
      farmLocation: "పొలం స్థలం:",
      costPerKg: "ధర (కిలోకు):",
      contactNumber: "సంప్రదింపు నంబర్:",
      contactHint: "కొనుగోలుదారులు ఈ నంబర్‌కు కాల్ చేస్తారు.",
      cropImage: "పంట చిత్రం:",
      cropPreview: "పంట ప్రివ్యూ",
      contactPlaceholder: "10 అంకెల నంబర్ నమోదు చేయండి",
      publishCrop: "పంట ప్రచురించు",
      back: "వెనక్కి",
      cropPublished: "పంట విజయవంతంగా ప్రచురించబడింది.",
      errorPrefix: "లోపం: ",
      productsHeader: "ఫార్మ్‌లింక్ ఉత్పత్తి జాబితా",
      filterByCrop: "పంట ద్వారా ఫిల్టర్",
      filterByLocation: "స్థలం ద్వారా ఫిల్టర్",
      backHome: "హోమ్‌కు తిరిగి",
      crop: "పంట:",
      contact: "సంప్రదింపు:",
      cost: "ధర:",
      quantity: "పరిమాణం:",
      call: "కాల్",
      whatsapp: "వాట్సాప్",
      share: "షేర్",
      reviews: "సమీక్షలు:",
      loadingReviews: "సమీక్షలు లోడ్ అవుతున్నాయి...",
      noReviews: "ఇంకా సమీక్షలు లేవు.",
      noProducts: "ఉత్పత్తులు కనుగొనబడలేదు.",
      perKg: "కిలోకు",
      kg: "కిలో",
      shareCopied: "షేర్ టెక్స్ట్ కాపీ అయింది.",
      shareFresh: "తాజా {crop}",
      shareLine: "{qty} కిలో | Rs {price} కిలోకు",
      shareContact: "సంప్రదింపు: {phone}",
      feedbackPageTitle: "ఫార్మ్‌లింక్ - అభిప్రాయం",
      rateReview: "రేటింగ్ మరియు సమీక్ష",
      selectProduct: "ఉత్పత్తి ఎంచుకోండి",
      thumbsUp: "మంచిది",
      thumbsDown: "చెడ్డది",
      writeReview: "మీ సమీక్ష రాయండి...",
      submit: "సమర్పించు",
      submittedSuccess: "విజయవంతంగా సమర్పించబడింది!",
      noReviewableProducts: "సమీక్షించదగిన ఉత్పత్తులు లేవు",
      noProductsReview: "సమీక్షించడానికి ఉత్పత్తులు లేవు.",
      cannotReviewOwn: "మీరు మీ ఉత్పత్తిని సమీక్షించలేరు లేదా ఉత్పత్తి కనుగొనబడలేదు.",
      fillReviewFields: "దయచేసి అన్ని ఫీల్డ్‌లు పూరించండి",
      errorLoadingProducts: "ఉత్పత్తులు లోడ్ చేయడంలో లోపం: ",
      farmerProfile: "రైతు ప్రొఫైల్",
      location: "స్థలం:",
      productsCrops: "ఉత్పత్తులు/పంటలు:",
      costLabel: "ధర:",
      noReviewsYet: "ఇంకా సమీక్షలు లేవు",
      errorLoadingReviews: "సమీక్షలు లోడ్ చేయడంలో లోపం",
      noFarmerProducts: "ఈ రైతు ఇంకా ఉత్పత్తులు జాబితా చేయలేదు.",
      errorLoadingProductsShort: "ఉత్పత్తులు లోడ్ చేయడంలో లోపం.",
      noFarmerSelected: "రైతు ఎంచుకోబడలేదు.",
      na: "లభ్యం కాదు"
    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return translations[saved] ? saved : DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "te" ? "te" : lang === "hi" ? "hi" : "en";
    apply();
    global.dispatchEvent(new CustomEvent("farmlink:langchange", { detail: { lang } }));
  }

  function t(key, params) {
    const lang = getLang();
    let text = (translations[lang] && translations[lang][key]) || translations.en[key] || key;
    if (params) {
      Object.keys(params).forEach((k) => {
        text = text.replace(new RegExp("\\{" + k + "\\}", "g"), params[k]);
      });
    }
    return text;
  }

  function roleLabel(role) {
    return t(role === "farmer" ? "role_farmer" : "role_buyer");
  }

  function apply() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.id === "modalReview" || el.id === "userLine") return;
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    const titleKey = document.body && document.body.getAttribute("data-i18n-title");
    if (titleKey) document.title = t(titleKey);
    const select = document.getElementById("languageSelect");
    if (select) select.value = getLang();
  }

  function injectStyles() {
    if (document.getElementById("i18n-styles")) return;
    const style = document.createElement("style");
    style.id = "i18n-styles";
    style.textContent =
      ".lang-switcher{position:fixed;top:12px;right:12px;z-index:9999;}" +
      ".lang-switcher select{padding:8px 10px;border-radius:8px;border:1px solid #ccc;font-size:14px;background:#fff;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.08);}";
    document.head.appendChild(style);
  }

  function mountLangSwitcher() {
    if (document.getElementById("languageSelect")) return;
    injectStyles();
    const div = document.createElement("div");
    div.className = "lang-switcher";
    div.innerHTML =
      '<select id="languageSelect" aria-label="Language">' +
      '<option value="en">English</option>' +
      '<option value="hi">हिंदी</option>' +
      '<option value="te">తెలుగు</option>' +
      "</select>";
    document.body.appendChild(div);
    document.getElementById("languageSelect").value = getLang();
    document.getElementById("languageSelect").addEventListener("change", (e) => setLang(e.target.value));
  }

  function init() {
    mountLangSwitcher();
    apply();
  }

  global.I18n = { getLang, setLang, t, roleLabel, apply, init };
})(window);
