var lang = fetchValue("lang") || "en";
document.querySelector("select.languageSelect").value = lang;

const dict = {
  en: {
    title: "How much time do I need to work today?",
    settings: "Settings",
    notifications: "Notifications",
    lbldark: "Dark mode",
    dailyHours: "Daily hours:",
    start: "Start:",
    lunch: "Lunch time:",
    back: "Back to work:",
    stop: "Stop! 🙂:",
    leftHours: "Hours left:",
    systemNotifications: [
      "Time to lunch",
      "Oh no, go back to work!",
      "All done, go rest!",
    ],
  },
  pt: {
    title: "Quanto tempo eu preciso trabalhar hoje?",
    settings: "Configurações",
    notifications: "Notificações",
    lbldark: "Modo escuro",
    dailyHours: "Horas diárias:",
    start: "Começando:",
    lunch: "Hora do almoço:",
    back: "Voltando ao trabalho:",
    stop: "Parei! 🙂:",
    leftHours: "Horas restantes:",
    systemNotifications: [
      "Hora do almoço!",
      "É, vamos voltar ao trabalho!",
      "Tudo pronto, vá descansar!",
    ],
  },
  de: {
    title: "Wie lange muss ich heute arbeiten?",
    settings: "Einstellungen",
    notifications: "Benachrichtigungen",
    lbldark: "Dunkler modus",
    dailyHours: "Tägliche Stunden:",
    start: "Beginnend:",
    lunch: "Mittagessenszeit:",
    back: "Zurück an die arbeit:",
    stop: "Ich hörte auf! 🙂:",
    leftHours: "Stunden übrig:",
    systemNotifications: [
      "Mittagessenszeit",
      "Ja, lass uns wieder an die Arbeit gehen!",
      "Alles bereit, ruh dich aus!",
    ],
  },
  es: {
    title: "¿Cuánto tiempo tengo que trabajar hoy?",
    settings: "Ajustes",
    notifications: "Notificaciones",
    lbldark: "Modo oscuro",
    dailyHours: "Horas diarias:",
    start: "A partir de:",
    lunch: "Hora del almuerzo:",
    back: "Volver al trabajo:",
    stop: "Finalizar! 🙂:",
    leftHours: "Horas restantes:",
    systemNotifications: [
      "Hora del almuerzo!",
      "Volver al trabajo!",
      "Todo listo, ve a descansar!",
    ],
  },
  ko: {
    title: "오늘은 언제까지 일해야 하나요?",
    settings: "설정",
    notifications: "알림",
    lbldark: "다크 모드",
    dailyHours: "일일 시간:",
    start: "시작",
    lunch: "점심 시간:",
    back: "다시 일하기:",
    stop: "나는 멈췄다! 🙂",
    leftHours: "남은 시간:",
    systemNotifications: ["점심 시간!", "다시 일하러!", "준비 완료, 쉬세요!"],
  },
};

function toggleLanguage(langSelected = null) {
  if (!langSelected || (langSelected != "en" && langSelected != "pt")) {
    lang = document.querySelector("select.languageSelect").value;
  } else {
    lang = langSelected;
  }

  storeValue("lang", lang);

  for (const key in dict[lang]) {
    if (Object.hasOwnProperty.call(dict[lang], key)) {
      const elementText = document.getElementById(key);
      if (elementText) {
        elementText.textContent = dict[lang][key];
      }
    }
  }
}
toggleLanguage(lang);
