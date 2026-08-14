const gkQuestions = [
  {
    id: 301,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय पशु कौन सा है?",
    options: ["शेर", "हाथी", "बाघ", "मोर"],
    answer: 2,
    explanation: "बाघ भारत का राष्ट्रीय पशु है।"
  },

  {
    id: 302,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    options: ["तोता", "मोर", "हंस", "गरुड़"],
    answer: 1,
    explanation: "मोर भारत का राष्ट्रीय पक्षी है।"
  },

  {
    id: 303,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय फूल कौन सा है?",
    options: ["गुलाब", "कमल", "चमेली", "सूरजमुखी"],
    answer: 1,
    explanation: "कमल भारत का राष्ट्रीय फूल है।"
  },

  {
    id: 304,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय फल कौन सा है?",
    options: ["सेब", "केला", "आम", "संतरा"],
    answer: 2,
    explanation: "आम भारत का राष्ट्रीय फल है।"
  },

  {
    id: 305,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    options: ["नीम", "बरगद", "पीपल", "आम"],
    answer: 1,
    explanation: "बरगद भारत का राष्ट्रीय वृक्ष है।"
  },

  {
    id: 306,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
    options: [
      "गंगा डॉल्फिन",
      "मगरमच्छ",
      "कछुआ",
      "व्हेल"
    ],
    answer: 0,
    explanation: "गंगा नदी की डॉल्फिन भारत का राष्ट्रीय जलीय जीव है।"
  },

  {
    id: 307,
    subject: "General Knowledge",
    question: "भारत की राजधानी क्या है?",
    options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
    answer: 1,
    explanation: "भारत की राजधानी नई दिल्ली है।"
  },

  {
    id: 308,
    subject: "General Knowledge",
    question: "भारत में कितने राज्य हैं?",
    options: ["26", "27", "28", "29"],
    answer: 2,
    explanation: "भारत में वर्तमान में 28 राज्य हैं।"
  },

  {
    id: 309,
    subject: "General Knowledge",
    question: "भारत में कितने केंद्र शासित प्रदेश हैं?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "भारत में वर्तमान में 8 केंद्र शासित प्रदेश हैं।"
  },

  {
    id: 310,
    subject: "General Knowledge",
    question: "भारतीय संविधान कब लागू हुआ?",
    options: [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "26 नवंबर 1949",
      "2 अक्टूबर 1950"
    ],
    answer: 1,
    explanation: "भारतीय संविधान 26 जनवरी 1950 को लागू हुआ।"
  },

  {
    id: 311,
    subject: "General Knowledge",
    question: "भारतीय संविधान को कब अपनाया गया था?",
    options: [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "26 नवंबर 1949",
      "14 नवंबर 1949"
    ],
    answer: 2,
    explanation: "संविधान सभा ने भारतीय संविधान को 26 नवंबर 1949 को अपनाया था।"
  },

  {
    id: 312,
    subject: "General Knowledge",
    question: "भारत का सर्वोच्च न्यायालय कहाँ स्थित है?",
    options: ["मुंबई", "नई दिल्ली", "प्रयागराज", "जयपुर"],
    answer: 1,
    explanation: "भारत का सर्वोच्च न्यायालय नई दिल्ली में स्थित है।"
  },

  {
    id: 313,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय खेल आधिकारिक रूप से कौन सा है?",
    options: ["हॉकी", "क्रिकेट", "फुटबॉल", "कोई आधिकारिक राष्ट्रीय खेल नहीं"],
    answer: 3,
    explanation:
      "भारत सरकार ने किसी भी खेल को आधिकारिक रूप से राष्ट्रीय खेल घोषित नहीं किया है।"
  },

  {
    id: 314,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रीय गीत कौन सा है?",
    options: ["जन गण मन", "वंदे मातरम्", "सारे जहाँ से अच्छा", "ऐ मेरे वतन"],
    answer: 1,
    explanation: "'वंदे मातरम्' भारत का राष्ट्रीय गीत है।"
  },

  {
    id: 315,
    subject: "General Knowledge",
    question: "भारत का राष्ट्रगान कौन सा है?",
    options: ["वंदे मातरम्", "जन गण मन", "जननी जन्मभूमि", "सारे जहाँ से अच्छा"],
    answer: 1,
    explanation: "'जन गण मन' भारत का राष्ट्रगान है।"
  },

  {
    id: 316,
    subject: "General Knowledge",
    question: "भारतीय राष्ट्रीय ध्वज में कितने रंग प्रमुख रूप से होते हैं?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "भारतीय राष्ट्रीय ध्वज में केसरिया, सफेद और हरा तीन प्रमुख रंग हैं।"
  },

  {
    id: 317,
    subject: "General Knowledge",
    question: "अशोक चक्र में कितनी तीलियाँ होती हैं?",
    options: ["20", "22", "24", "26"],
    answer: 2,
    explanation: "अशोक चक्र में 24 तीलियाँ होती हैं।"
  },

  {
    id: 318,
    subject: "General Knowledge",
    question: "भारत की सबसे लंबी नदी कौन सी है?",
    options: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"],
    answer: 1,
    explanation: "गंगा भारत की सबसे लंबी नदी मानी जाती है।"
  },

  {
    id: 319,
    subject: "General Knowledge",
    question: "भारत का सबसे बड़ा राज्य क्षेत्रफल की दृष्टि से कौन सा है?",
    options: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "उत्तर प्रदेश"],
    answer: 2,
    explanation: "क्षेत्रफल की दृष्टि से राजस्थान भारत का सबसे बड़ा राज्य है।"
  },

  {
    id: 320,
    subject: "General Knowledge",
    question: "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    options: ["बिहार", "महाराष्ट्र", "उत्तर प्रदेश", "पश्चिम बंगाल"],
    answer: 2,
    explanation: "उत्तर प्रदेश भारत का सबसे अधिक जनसंख्या वाला राज्य है।"
  },

  {
    id: 321,
    subject: "General Knowledge",
    question: "भारत का सबसे छोटा राज्य क्षेत्रफल की दृष्टि से कौन सा है?",
    options: ["सिक्किम", "गोवा", "त्रिपुरा", "मणिपुर"],
    answer: 1,
    explanation: "क्षेत्रफल की दृष्टि से गोवा भारत का सबसे छोटा राज्य है।"
  },

  {
    id: 322,
    subject: "General Knowledge",
    question: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
    answer: 2,
    explanation: "बुध सूर्य के सबसे निकट स्थित ग्रह है।"
  },

  {
    id: 323,
    subject: "General Knowledge",
    question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options: ["शनि", "बृहस्पति", "पृथ्वी", "नेपच्यून"],
    answer: 1,
    explanation: "बृहस्पति सौरमंडल का सबसे बड़ा ग्रह है।"
  },

  {
    id: 324,
    subject: "General Knowledge",
    question: "पृथ्वी का एकमात्र प्राकृतिक उपग्रह कौन सा है?",
    options: ["सूर्य", "चंद्रमा", "मंगल", "शुक्र"],
    answer: 1,
    explanation: "चंद्रमा पृथ्वी का प्राकृतिक उपग्रह है।"
  },

  {
    id: 325,
    subject: "General Knowledge",
    question: "पृथ्वी सूर्य की परिक्रमा लगभग कितने समय में पूरी करती है?",
    options: ["24 घंटे", "30 दिन", "365 दिन", "12 घंटे"],
    answer: 2,
    explanation: "पृथ्वी सूर्य की एक परिक्रमा लगभग 365 दिन और 6 घंटे में पूरी करती है।"
  },

  {
    id: 326,
    subject: "General Knowledge",
    question: "जल का रासायनिक सूत्र क्या है?",
    options: ["CO₂", "O₂", "H₂O", "N₂"],
    answer: 2,
    explanation: "जल का रासायनिक सूत्र H₂O है।"
  },

  {
    id: 327,
    subject: "General Knowledge",
    question: "वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    options: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer: 1,
    explanation: "पृथ्वी के वायुमंडल में नाइट्रोजन की मात्रा सबसे अधिक है।"
  },

  {
    id: 328,
    subject: "General Knowledge",
    question: "मनुष्य के शरीर में रक्त को पंप करने वाला अंग कौन सा है?",
    options: ["फेफड़ा", "हृदय", "यकृत", "गुर्दा"],
    answer: 1,
    explanation: "हृदय शरीर में रक्त का संचार करता है।"
  },

  {
    id: 329,
    subject: "General Knowledge",
    question: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options: ["हृदय", "त्वचा", "यकृत", "मस्तिष्क"],
    answer: 1,
    explanation: "त्वचा मानव शरीर का सबसे बड़ा अंग है।"
  },

  {
    id: 330,
    subject: "General Knowledge",
    question: "विटामिन C की कमी से कौन सा रोग होता है?",
    options: ["रिकेट्स", "स्कर्वी", "रातांधता", "बेरी-बेरी"],
    answer: 1,
    explanation: "विटामिन C की कमी से स्कर्वी रोग हो सकता है।"
  },

  {
    id: 331,
    subject: "General Knowledge",
    question: "विटामिन D की कमी से कौन सा रोग हो सकता है?",
    options: ["स्कर्वी", "रिकेट्स", "एनीमिया", "बेरी-बेरी"],
    answer: 1,
    explanation: "विटामिन D की कमी से बच्चों में रिकेट्स हो सकता है।"
  },

  {
    id: 332,
    subject: "General Knowledge",
    question: "भारत में हरित क्रांति का संबंध मुख्यतः किससे है?",
    options: ["दूध उत्पादन", "कृषि उत्पादन", "मछली उत्पादन", "वन उत्पादन"],
    answer: 1,
    explanation: "हरित क्रांति का मुख्य संबंध कृषि उत्पादन में वृद्धि से है।"
  },

  {
    id: 333,
    subject: "General Knowledge",
    question: "श्वेत क्रांति का संबंध किससे है?",
    options: ["दूध उत्पादन", "गेहूँ उत्पादन", "मछली उत्पादन", "तेल उत्पादन"],
    answer: 0,
    explanation: "श्वेत क्रांति का संबंध दूध उत्पादन में वृद्धि से है।"
  },

  {
    id: 334,
    subject: "General Knowledge",
    question: "नीली क्रांति का संबंध मुख्यतः किससे है?",
    options: ["मछली उत्पादन", "दूध उत्पादन", "गेहूँ उत्पादन", "फल उत्पादन"],
    answer: 0,
    explanation: "नीली क्रांति का संबंध मत्स्य उत्पादन से है।"
  },

  {
    id: 335,
    subject: "General Knowledge",
    question: "भारतीय अंतरिक्ष अनुसंधान संगठन का संक्षिप्त नाम क्या है?",
    options: ["DRDO", "ISRO", "NASA", "BARC"],
    answer: 1,
    explanation: "Indian Space Research Organisation का संक्षिप्त नाम ISRO है।"
  },

  {
    id: 336,
    subject: "General Knowledge",
    question: "भारत का पहला उपग्रह कौन सा था?",
    options: ["आर्यभट्ट", "रोहिणी", "भास्कर", "INSAT-1A"],
    answer: 0,
    explanation: "आर्यभट्ट भारत का पहला उपग्रह था, जिसे 1975 में प्रक्षेपित किया गया था।"
  },

  {
    id: 337,
    subject: "General Knowledge",
    question: "भारतीय रिजर्व बैंक की स्थापना किस वर्ष हुई थी?",
    options: ["1920", "1935", "1947", "1950"],
    answer: 1,
    explanation: "भारतीय रिजर्व बैंक की स्थापना 1935 में हुई थी।"
  },

  {
    id: 338,
    subject: "General Knowledge",
    question: "भारत की मुद्रा क्या है?",
    options: ["डॉलर", "रुपया", "पाउंड", "येन"],
    answer: 1,
    explanation: "भारत की आधिकारिक मुद्रा भारतीय रुपया है।"
  },

  {
    id: 339,
    subject: "General Knowledge",
    question: "भारतीय संसद का निचला सदन कौन सा है?",
    options: ["राज्यसभा", "लोकसभा", "विधानसभा", "विधान परिषद"],
    answer: 1,
    explanation: "लोकसभा भारतीय संसद का निचला सदन है।"
  },

  {
    id: 340,
    subject: "General Knowledge",
    question: "भारतीय संसद का उच्च सदन कौन सा है?",
    options: ["लोकसभा", "राज्यसभा", "विधानसभा", "नगरपालिका"],
    answer: 1,
    explanation: "राज्यसभा भारतीय संसद का उच्च सदन है।"
  },

  {
    id: 341,
    subject: "General Knowledge",
    question: "भारत में मतदान की न्यूनतम आयु कितनी है?",
    options: ["16 वर्ष", "18 वर्ष", "21 वर्ष", "25 वर्ष"],
    answer: 1,
    explanation: "भारत में नागरिक 18 वर्ष की आयु के बाद मतदान कर सकते हैं।"
  },

  {
    id: 342,
    subject: "General Knowledge",
    question: "भारत में शिक्षक दिवस कब मनाया जाता है?",
    options: [
      "5 सितंबर",
      "14 नवंबर",
      "26 जनवरी",
      "15 अगस्त"
    ],
    answer: 0,
    explanation: "भारत में शिक्षक दिवस 5 सितंबर को डॉ. सर्वपल्ली राधाकृष्णन की जयंती पर मनाया जाता है।"
  },

  {
    id: 343,
    subject: "General Knowledge",
    question: "भारत में बाल दिवस कब मनाया जाता है?",
    options: [
      "5 सितंबर",
      "14 नवंबर",
      "2 अक्टूबर",
      "15 अगस्त"
    ],
    answer: 1,
    explanation: "भारत में बाल दिवस 14 नवंबर को मनाया जाता है।"
  },

  {
    id: 344,
    subject: "General Knowledge",
    question: "राष्ट्रीय विज्ञान दिवस कब मनाया जाता है?",
    options: [
      "28 फरवरी",
      "5 जून",
      "15 अगस्त",
      "26 जनवरी"
    ],
    answer: 0,
    explanation: "राष्ट्रीय विज्ञान दिवस भारत में 28 फरवरी को मनाया जाता है।"
  },

  {
    id: 345,
    subject: "General Knowledge",
    question: "विश्व पर्यावरण दिवस कब मनाया जाता है?",
    options: [
      "5 जून",
      "22 अप्रैल",
      "1 मई",
      "10 दिसंबर"
    ],
    answer: 0,
    explanation: "विश्व पर्यावरण दिवस हर वर्ष 5 जून को मनाया जाता है।"
  },

  {
    id: 346,
    subject: "General Knowledge",
    question: "पृथ्वी दिवस कब मनाया जाता है?",
    options: [
      "22 अप्रैल",
      "5 जून",
      "28 फरवरी",
      "16 सितंबर"
    ],
    answer: 0,
    explanation: "पृथ्वी दिवस हर वर्ष 22 अप्रैल को मनाया जाता है।"
  },

  {
    id: 347,
    subject: "General Knowledge",
    question: "संयुक्त राष्ट्र संघ का मुख्यालय कहाँ स्थित है?",
    options: [
      "लंदन",
      "न्यूयॉर्क",
      "पेरिस",
      "जिनेवा"
    ],
    answer: 1,
    explanation: "संयुक्त राष्ट्र संघ का मुख्यालय न्यूयॉर्क में स्थित है।"
  },

  {
    id: 348,
    subject: "General Knowledge",
    question: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options: [
      "हिंद महासागर",
      "अटलांटिक महासागर",
      "प्रशांत महासागर",
      "आर्कटिक महासागर"
    ],
    answer: 2,
    explanation: "प्रशांत महासागर विश्व का सबसे बड़ा महासागर है।"
  },

  {
    id: 349,
    subject: "General Knowledge",
    question: "विश्व का सबसे ऊँचा पर्वत कौन सा है?",
    options: [
      "कंचनजंगा",
      "माउंट एवरेस्ट",
      "K2",
      "नंदा देवी"
    ],
    answer: 1,
    explanation: "माउंट एवरेस्ट समुद्र तल से विश्व का सबसे ऊँचा पर्वत है।"
  },

  {
    id: 350,
    subject: "General Knowledge",
    question: "शिक्षा का अधिकार अधिनियम किस आयु वर्ग के बच्चों के लिए है?",
    options: [
      "3–6 वर्ष",
      "6–14 वर्ष",
      "14–18 वर्ष",
      "18–21 वर्ष"
    ],
    answer: 1,
    explanation:
      "भारत में शिक्षा का अधिकार अधिनियम 6 से 14 वर्ष के बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा का प्रावधान करता है।"
  }
];

export default gkQuestions;