import helpers from "./helpers";

var lang = helpers.fetchValue("lang") || "en";
// document.querySelector("select.languageSelect").value = lang;

const dict = {
  en: {
    name: "English",
    title: "How much time I need work today?",
    settings: "Settings",
    language: "Language",
    notifications: "Notifications",
    theme: "Dark mode",
    dailyHours: "Daily hours:",
    starting: "Starting:",
    stoping: "Stopping:",
    back: "Back to work:",
    ending: "Ending the day! 🙂:",
    leftHours: "Hours left:",
    overtime: "Overtime:",
    systemNotifications: [
      "Time to lunch",
      "Oh no, go back to work!",
      "All done, go rest!",
    ],
  },
  pt: {
    name: "Português",
    title: "Quanto tempo eu preciso trabalhar hoje?",
    settings: "Configurações",
    language: "Idioma",
    notifications: "Notificações",
    theme: "Modo escuro",
    dailyHours: "Horas diárias:",
    starting: "Começando:",
    stoping: "Parando:",
    back: "Voltando ao trabalho:",
    ending: "Dia finalizado! 😎:",
    leftHours: "Horas restantes:",
    overtime: "Horas extras:",
    systemNotifications: [
      "Hora do almoço!",
      "É, vamos voltar ao trabalho!",
      "Tudo pronto, vá descansar!",
    ],
  },
  de: {
    name: "Deutsch",
    title: "Wie lange muss ich heute arbeiten?",
    settings: "Einstellungen",
    language: "Sprache",
    notifications: "Benachrichtigungen",
    theme: "Dunkler modus",
    dailyHours: "Tägliche Stunden:",
    starting: "Beginnend:",
    stoping: "Stoppen:",
    back: "Zurück an die arbeit:",
    ending: "Arbeitstag fertig! 🙂:",
    leftHours: "Stunden übrig:",
    overtime: "Überstunden gemacht:",
    systemNotifications: [
      "Mittagessenszeit",
      "Ja, lass uns wieder an die Arbeit gehen!",
      "Alles bereit, ruh dich aus!",
    ],
  },
  es: {
    name: "Español",
    title: "¿Cuánto tiempo tengo que trabajar hoy?",
    settings: "Ajustes",
    language: "Idioma",
    notifications: "Notificaciones",
    theme: "Modo oscuro",
    dailyHours: "Horas diarias:",
    starting: "Comenzando:",
    stoping: "Parada:",
    back: "Volver al trabajo:",
    ending: "Jornada terminada! 🙂:",
    leftHours: "Horas restantes:",
    overtime: "La horas extraordinarias:",
    systemNotifications: [
      "Hora del almuerzo!",
      "Volver al trabajo!",
      "Todo listo, ve a descansar!",
    ],
  },
  ko: {
    name: "한국어",
    title: "오늘은 언제까지 일해야 하나요?",
    settings: "설정",
    language: "언어",
    notifications: "알림",
    theme: "다크 모드",
    dailyHours: "일일 시간:",
    starting: "시작",
    stoping: "점심 시간:",
    back: "다시 일하기:",
    ending: "임무 완수! 🙂",
    leftHours: "남은 시간:",
    overtime: "시간 외에:",
    systemNotifications: ["점심 시간!", "다시 일하러!", "준비 완료, 쉬세요!"],
  },
  ja: {
    name: "日本語",
    title: "今日の労働時間はどれくらいですか？",
    settings: "設定",
    language: "言語",
    notifications: "お知らせ",
    theme: "ダークモード",
    dailyHours: "1日あたりの労働時間:",
    starting: "始業",
    stoping: "仕事の終わり:",
    back: "仕事に戻った時間:",
    ending: "終業! 🙂",
    leftHours: "残り時間:",
    overtime: "残業:",
    systemNotifications: [
      "昼食の時間です!",
      "大変だ、仕事に戻ってください！",
      "全て終わったので、休んでください！",
    ],
  },
};

function toggleLanguage(langSelected = null) {
  if (!langSelected) {
    lang = helpers.fetchValue("lang") || "en";
  } else {
    lang = langSelected;
  }

  helpers.storeValue("lang", lang);

  for (const key in dict[lang]) {
    if (Object.hasOwnProperty.call(dict[lang], key)) {
      const elementText = document.querySelectorAll(`#${key}`);
      if (elementText) {
        for (var i = 0; i < elementText.length; i++) {
          elementText[i].innerText = dict[lang][key];
        }
      }
    }
  }
}
toggleLanguage(lang);

export default { toggleLanguage, dict };