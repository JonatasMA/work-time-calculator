'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('daily-hours').value = fetchValue('daily-hours') || "08:00";
  document.getElementById('start-1').value = fetchValue('start-1') || "08:00";
  document.getElementById('stop-1').value = fetchValue('stop-1') || "11:00";
  document.getElementById('start-2').value = fetchValue('start-2') || "12:00";
  document.getElementById('notification').checked = fetchValue('notification') == 'true' ? true : false;
  setHour();
});

var notification = document.getElementById('notification');
var notificationInterval = 0;

function toggleDropdown(elem) {
  var backdrop = document.getElementById('backdrop');
  console.log(elem);
  if (elem.className.indexOf('is-active') >= 0) {
    elem.className = 'dropdown margin-button';
    backdrop.className = '';
  } else {
    elem.className += ' is-active';
    backdrop.className = 'backdrop';
  }
}

function storeValue(name, value) {
  localStorage.setItem(name, value);
}

function fetchValue(name) {
  return localStorage.getItem(name);
}

function setHour() {
  var start1 = document.getElementById('start-1').value;
  storeValue('start-1', start1);
  var start2 = document.getElementById('start-2').value;
  storeValue('start-2', start2);
  var stop1 = document.getElementById('stop-1').value;
  storeValue('stop-1', stop1);
  var daily = document.getElementById('daily-hours').value;
  storeValue('daily-hours', daily);

  var stop2Elemnt = document.getElementById('stop-2');
  var morning = subtractTime(stop1, start1);
  var leftTime = subtractTime(daily, morning);

  stop2Elemnt.value = addTime(start2, leftTime);
}

function subtractTime(minundo, subtrahend) {
  var subtrahendSplit = subtrahend.split(':');
  var left = moment(minundo, "hh:mm").subtract(subtrahendSplit[0], 'hour').subtract(subtrahendSplit[1], 'minutes').toDate();
  return normalizeTime(left);
}

function addTime(value1, value2) {
  var value2Split = value2.split(':');
  var product = moment(value1, "hh:mm").add(value2Split[0], 'hour').add(value2Split[1], 'minutes').toDate();
  return normalizeTime(product);
}

function normalizeTime(date) {
  return sliceTime(date.getHours()) + ':' + sliceTime(date.getMinutes());
}

function sliceTime(time) {
  return ('0' + time).slice(-2);
}

function turnOnNotifications() {
  if (Notification.permission == 'granted') {
    clearInterval(notificationInterval);
    notificationInterval = setInterval(function () {
      if (notification.checked && new Date().getSeconds() == 0) {
        var stop1 = document.getElementById('stop-1').value;
        var start2 = document.getElementById('start-2').value;
        var stop2Elemnt = document.getElementById('stop-2').value;
        var actualy = normalizeTime(new Date());
        var icon = 'https://jonatasma.github.io/work-time-calculator/assets/img/android-chrome-512x512.png';
        console.log(actualy == stop1, actualy == start2, actualy == stop2Elemnt);
        switch (actualy) {
          case stop1:
            new Notification('Time to lunch', { icon: icon });
          case start2:
            new Notification('Oh no, go back to work!', { icon: icon });
          case stop2Elemnt:
            new Notification('All done, go rest!', { icon: icon });
        }
      }
    }, 900);
  } else {
    Notification.requestPermission();
    notification.checked = false;
  }
}