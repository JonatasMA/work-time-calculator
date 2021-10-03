document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('daily-hours').value = localStorage.getItem('daily-hours') || "08:00"
  document.getElementById('notification').checked = localStorage.getItem('notification') == 'true' ? true : false
  setHour();
});

var notification = document.getElementById('notification');
var notificationInterval = 0;

const start1 = document.getElementById('start-1');
const start2 = document.getElementById('start-2');
const stop1 = document.getElementById('stop-1');
const stop2Elemnt = document.getElementById('stop-2');

function setHour() {
  const daily = document.getElementById('daily-hours').value;

  const morning = subtractTime(stop1.value, start1.value);
  const leftTime = subtractTime(daily, morning);

  stop2Elemnt.value = addTime(start2.value, leftTime);
}

function subtractTime(minundo, subtrahend) {
  const subtrahendSplit = subtrahend.split(':');
  const left = moment(minundo, "hh:mm").subtract(subtrahendSplit[0], 'hour').subtract(subtrahendSplit[1], 'minutes').toDate();
  return normalizeTime(left);
}

function addTime(value1, value2) {
  const value2Split = value2.split(':');
  const product = moment(value1, "hh:mm").add(value2Split[0], 'hour').add(value2Split[1], 'minutes').toDate();
  return normalizeTime(product);
}

function normalizeTime(date) {
  return `${sliceTime(date.getHours())}:${sliceTime(date.getMinutes())}`;
}

function sliceTime(time) {
  return `0${time}`.slice(-2);
}

function turnOnNotifications() {
  if (Notification.permission == 'granted') {
    clearInterval(notificationInterval);
    notificationInterval = setInterval(() => {
      if (notification.checked && (new Date).getSeconds() == 0) {
        const actualy = normalizeTime(new Date());
        const icon = 'https://jonatasma.github.io/work-time-calculator/assets/img/android-chrome-512x512.png';
        switch (actualy) {
          case stop1.value:
            new Notification('Time to lunch', { icon: icon })
          case start2.value:
            new Notification('Oh no, go back to work!', { icon: icon })
          case stop2Elemnt.value:
            new Notification('All done, go rest!', { icon: icon })
        }
      }
    }, 900);
  } else {
    Notification.requestPermission();
    notification.checked = false;
  }
}