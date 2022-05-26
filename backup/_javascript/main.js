document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("daily-hours").value =
    fetchValue("daily-hours") || "08:00";
  document.getElementById("start-1").value = fetchValue("start-1") || "08:00";
  document.getElementById("stop-1").value = fetchValue("stop-1") || "11:00";
  document.getElementById("start-2").value = fetchValue("start-2") || "12:00";
  document.getElementById("notification").checked =
    fetchValue("notification") == "true" ? true : false;
  setHour();
  const statusDarkMode = fetchValue("darkmode") == "true" ? true : false;
  document.getElementById("darkmode").checked = statusDarkMode;
  toggleDarkMode(statusDarkMode);
});

var notification = document.getElementById("notification");
var notificationInterval = 0;

function toggleModal(elem = null) {
  if (!elem) {
    elem = document.querySelector(".modal");
  }
  if (elem.classList.contains("is-active")) {
    elem.classList.remove("is-active");
  } else {
    elem.classList.add("is-active");
  }
}

function storeValue(name, value) {
  localStorage.setItem(name, value);
}

function fetchValue(name) {
  return localStorage.getItem(name);
}

function setHour() {
  var start1 = document.getElementById("start-1").value;
  storeValue("start-1", start1);
  var start2 = document.getElementById("start-2").value;
  storeValue("start-2", start2);
  var stop1 = document.getElementById("stop-1").value;
  storeValue("stop-1", stop1);
  var daily = document.getElementById("daily-hours").value;
  storeValue("daily-hours", daily);

  var stop2Elemnt = document.getElementById("stop-2");
  var morning = subtractTime(stop1, start1);
  var leftTime = subtractTime(daily, morning);

  var leftElemnt = document.getElementById("left-hours");

  var stop2Time = addTime(start2, leftTime);

  stop2Elemnt.value = stop2Time;

  var now = normalizeTime(new Date());

  if (stop2Time > now) {
    leftElemnt.value = subtractTime(stop2Time, now);
  } else {
    leftElemnt.value = "";
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

function turnOnNotifications() {
  if (Notification.permission == "granted") {
    clearInterval(notificationInterval);
    notificationInterval = setInterval(() => {
      if (notification.checked && new Date().getSeconds() == 0) {
        const stop1 = document.getElementById("stop-1").value;
        const start2 = document.getElementById("start-2").value;
        const stop2Elemnt = document.getElementById("stop-2").value;
        const actualy = normalizeTime(new Date());
        const icon =
          "https://jonatasma.github.io/work-time-calculator/assets/img/android-chrome-512x512.png";
        switch (actualy) {
          case stop1:
            new Notification(dict[lang].systemNotifications[0], { icon: icon });
          case start2:
            new Notification(dict[lang].systemNotifications[1], { icon: icon });
          case stop2Elemnt:
            new Notification(dict[lang].systemNotifications[2], { icon: icon });
        }
      }
    }, 900);
  } else {
    Notification.requestPermission();
    notification.checked = false;
  }
}

function toggleDarkMode(status) {
  const body = document.body;
  storeValue("darkmode", status);
  status ? body.classList.add("dark") : body.classList.remove("dark");
}
