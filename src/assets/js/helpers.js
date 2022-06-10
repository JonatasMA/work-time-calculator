import moment from 'moment';

// var notification = document.getElementById("notification");
// var notificationInterval = 0;

function storeValue(name, value) {
    localStorage.setItem(name, value);
}

function fetchValue(name) {
    return localStorage.getItem(name);
}

function storeHours(timeValues)
{
    storeValue("daily-hours", timeValues.daily);
    storeValue("start-input", timeValues.start);
    storeValue("lunch-input", timeValues.lunch);
    storeValue("back-input", timeValues.back);
}

function setHour(timeValues) {
    storeHours(timeValues);
    var morning = subtractTime(timeValues.lunch, timeValues.start);
    var leftTime = subtractTime(timeValues.daily, morning);

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

// function turnOnNotifications() {
//     if (Notification.permission == "granted") {
//         clearInterval(notificationInterval);
//         notificationInterval = setInterval(() => {
//             if (notification.checked && new Date().getSeconds() == 0) {
//                 const stop1 = document.getElementById("stop-1").value;
//                 const start2 = document.getElementById("start-2").value;
//                 const stop2Elemnt = document.getElementById("stop-2").value;
//                 const actualy = normalizeTime(new Date());
//                 const icon =
//                     "https://jonatasma.github.io/work-time-calculator/assets/img/android-chrome-512x512.png";
//                 switch (actualy) {
//                     case stop1:
//                         new Notification(dict[lang].systemNotifications[0], { icon: icon });
//                     case start2:
//                         new Notification(dict[lang].systemNotifications[1], { icon: icon });
//                     case stop2Elemnt:
//                         new Notification(dict[lang].systemNotifications[2], { icon: icon });
//                 }
//             }
//         }, 900);
//     } else {
//         Notification.requestPermission();
//         notification.checked = false;
//     }
// }

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
    subtractTime
}