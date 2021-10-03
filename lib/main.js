'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

function setHour() {
  var daily = document.getElementById('daily-hours').value;
  var start1 = document.getElementById('start-1').value;
  var start2 = document.getElementById('start-2').value;
  var stop1 = document.getElementById('stop-1').value;
  var stop2Elemnt = document.getElementById('stop-2');

  var morning = subtractTime(stop1, start1);
  var leftTime = subtractTime(daily, morning);

  stop2Elemnt.value = addTime(start2, leftTime);
}

function subtractTime(minundo, subtrahend) {
  var subtrahendSplit = subtrahend.split(':');
  var left = moment(minundo, "hh:mm").subtract(subtrahendSplit[0], 'hour').subtract(subtrahendSplit[1], 'minutes').toDate();
  return normalizeTime(left.getHours()) + ':' + normalizeTime(left.getMinutes());
}

function addTime(value1, value2) {
  var value2Split = value2.split(':');
  var product = moment(value1, "hh:mm").add(value2Split[0], 'hour').add(value2Split[1], 'minutes').toDate();
  return normalizeTime(product.getHours()) + ':' + normalizeTime(product.getMinutes());
}

function normalizeTime(time) {
  return ('0' + time).slice(-2);
}

setHour();