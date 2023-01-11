import moment from 'moment';
import { dict } from './lang';
import { inject } from 'vue'

var notificationInterval = 0;

export function storeValue(name, value) {
    localStorage.setItem(name, value);
}

export function fetchValue(name) {
    return localStorage.getItem(name);
}

function storeHours(timeValues) {
    storeValue("daily-hours", timeValues.daily);
    storeValue("start-input", timeValues.start);
    storeValue("lunch-input", timeValues.lunch);
    storeValue("back-input", timeValues.back);
    storeValue("hours", JSON.stringify(timeValues.hours));
}

function setHour(timeValues) {
    storeHours(timeValues);
    var morning = subtractTime(timeValues.lunch, timeValues.start);
    var leftTime = subtractTime(timeValues.daily, morning);
    for (var hour of timeValues.hours) {
        if (hour) {
            var breakTime = subtractTime(hour.end, hour.start);
            leftTime = subtractTime(leftTime, breakTime);
        }
    }
    var stop2Time = addTime(timeValues.back, leftTime);

    timeValues.end = stop2Time;

    var now = normalizeTime(new Date());

    if (stop2Time > now) {
        timeValues.left = subtractTime(stop2Time, now);
        timeValues.overtime = "";
    } else {
        timeValues.left = "";
        timeValues.overtime = subtractTime(now, stop2Time);
    }
}

function subtractTime(minundo, subtrahend) {
    const subtrahendSplit = subtrahend.split(":");
    const left = moment(minundo, "hh:mm")
        .subtract(subtrahendSplit[0], "hour")
        .subtract(subtrahendSplit[1], "minutes")
        .toDate();
    return normalizeTime(left);
}

function addTime(value1, value2) {
    const value2Split = value2.split(":");
    const product = moment(value1, "hh:mm")
        .add(value2Split[0], "hour")
        .add(value2Split[1], "minutes")
        .toDate();
    return normalizeTime(product);
}

function normalizeTime(date) {
    return `${sliceTime(date.getHours())}:${sliceTime(date.getMinutes())}`;
}

function sliceTime(time) {
    return `0${time}`.slice(-2);
}

function turnOnNotifications(notification, timeValues) {
    console.log(notification);
    storeValue('notification', notification);

    if (!notification) {
        clearInterval(notificationInterval)
        return;
    }

    if (Notification.permission == "granted" && notification) {
        clearInterval(notificationInterval);
        notificationInterval = setInterval(() => {
            if (new Date().getSeconds() == 0) {
                const lang = fetchValue("lang") || "en";
                const actualy = normalizeTime(new Date());
                const icon =
                    "https://github.com/JonatasMA/work-time-calculator/raw/main/src/assets/img/android-chrome-512x512.png";
                console.log(actualy, timeValues.back, actualy == timeValues.back);

                switch (actualy) {
                    // case timeValues.end:
                    //     new Notification(dict[lang].systemNotifications[0], { icon: icon });
                    case timeValues.back:
                        new Notification(dict[lang].systemNotifications[1], { icon: icon });
                        break;
                    case timeValues.end:
                        new Notification(dict[lang].systemNotifications[2], { icon: icon });
                        break;
                }
            }
        }, 1000);
    } else {
        Notification.requestPermission();
        notification = false;
    }
}

// function toggleDarkMode(status) {
//     const body = document.body;
//     storeValue("darkmode", status);
//     status ? body.classList.add("dark") : body.classList.remove("dark");
// }


export default {
    setHour,
    storeValue,
    fetchValue,
    normalizeTime,
    subtractTime,
    addTime,
    turnOnNotifications
}