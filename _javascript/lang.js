var lang = fetchValue('lang') || 'en';
document.querySelector(`input[name="lang"][value="${lang}"]`).checked = true;

const dict = {
    en: {
        title: "How much time I need work today?",
        settings: "Settings",
        notifications: "Notifications",
        darkmode: "Dark Mode",
        dailyHours: "Daily hours:",
        start: "Start:",
        lunch: "Lunch time:",
        back: "Back to work:",
        stop: "Stop! 🙂:",
        systemNotifications: [
            'Time to lunch',
            'Oh no, go back to work!',
            'All done, go rest!'
        ]
    },
    pt: {
        title: "Quanto tempo eu preciso trabalhar hoje?",
        settings: "Configurações",
        notifications: "Notificações",
        darkmode: "Modo escuro",
        dailyHours: "Horas diárias:",
        start: "Começando:",
        lunch: "Hora do almoço:",
        back: "Voltando ao trabalho:",
        stop: "Parei! 🙂:",
        systemNotifications: [
            'Hora do almoço!',
            'É, vamos voltar ao trabalho!',
            'Tudo pronto, vá descansar!'
        ]
    },
    de: {
        title: "Wie lange muss ich heute arbeiten?",
        settings: "Einstellungen",
        notifications: "Benachrichtigungen",
        darkmode: "Dunkler Modus",
        dailyHours: "Tägliche Stunden:",
        start: "Beginnend:",
        lunch: "Mittagessenszeit:",
        back: "Zurück an die arbeit:",
        stop: "Ich hörte auf! 🙂:",
        systemNotifications: [
            'Mittagessenszeit',
            'Ja, lass uns wieder an die Arbeit gehen!',
            'Alles bereit, ruh dich aus!'
        ]
    },

    es: {
        title: "¿Cuánto tiempo tengo que trabajar hoy?",
        settings: "Ajustes",
        notifications: "Notificaciones",
        darkmode: "Modo oscuro",
        dailyHours: "Horas diarias:",
        start: "A partir de:",
        lunch: "Hora del almuerzo:",
        back: "Volver al trabajo:",
        stop: "Finalizar! 🙂:",
        systemNotifications: [
            'Hora del almuerzo!',
            'Volver al trabajo!',
            'Todo listo, ve a descansar!'
        ]
    }
}

function toggleLanguage(langSelected = null) {
    if (!langSelected || (langSelected != 'en' && langSelected != 'pt')) {
        lang = document.querySelector('input[name="lang"]:checked').value;
    } else {
        lang = langSelected;
    }

    storeValue('lang', lang);

    for (const key in dict[lang]) {
        if (Object.hasOwnProperty.call(dict[lang], key)) {
            const elementText = document.getElementById(key);
            if (!!elementText) {
                elementText.textContent = dict[lang][key];
            }
        }
    }
}
toggleLanguage(lang);