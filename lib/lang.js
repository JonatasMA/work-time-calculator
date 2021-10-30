'use strict';

var lang = fetchValue('lang') || 'en';
document.querySelector('input[name="lang"][value="' + lang + '"]').checked = true;

var dict = {
    en: {
        title: "How much time i do need work today?",
        settings: "Settings",
        notifications: "Notifications",
        dailyHours: "Daily hours:",
        start: "Start:",
        lunch: "Lunch time:",
        back: "Back to work:",
        stop: "Stop! 🙂:",
        systemNotifications: ['Time to lunch', 'Oh no, go back to work!', 'All done, go rest!']
    },
    pt: {
        title: "Quanto tempo eu preciso trabalhar hoje?",
        settings: "Configurações",
        notifications: "Notificações",
        dailyHours: "Horas diárias:",
        start: "Começando:",
        lunch: "Hora do almoço:",
        back: "Voltando ao trabalho:",
        stop: "Parei! 🙂:",
        systemNotifications: ['Hora do almoço!', 'É, vamos voltar ao trabalho!', 'Tudo pronto, vá descançar!']
    },
    de: {
        title: "Wie lange muss ich heute arbeiten?",
        settings: "Einstellungen",
        notifications: "Benachrichtigungen",
        dailyHours: "Tägliche Stunden:",
        start: "Beginnend:",
        lunch: "Mittagessenszeit:",
        back: "Zurück an die arbeit:",
        stop: "Ich hörte auf! 🙂:",
        systemNotifications: ['Mittagessenszeit', 'Ja, lass uns wieder an die Arbeit gehen!', 'Alles bereit, ruh dich aus!']
    }
};

function toggleLanguage() {
    var langSelected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!langSelected || langSelected != 'en' && langSelected != 'pt') {
        lang = document.querySelector('input[name="lang"]:checked').value;
    } else {
        lang = langSelected;
    }

    storeValue('lang', lang);

    for (var key in dict[lang]) {
        if (Object.hasOwnProperty.call(dict[lang], key)) {
            var elementText = document.getElementById(key);
            if (!!elementText) {
                elementText.textContent = dict[lang][key];
            }
        }
    }
}
toggleLanguage(lang);