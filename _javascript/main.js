document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('daily-hours').value = localStorage.getItem('daily-hours') || "08:00"
  setHour();
});

function setHour() {
  const daily = document.getElementById('daily-hours').value;
  const start1 = document.getElementById('start-1').value;
  const start2 = document.getElementById('start-2').value;
  const stop1 = document.getElementById('stop-1').value;
  const stop2Elemnt = document.getElementById('stop-2');

  const morning = subtractTime(stop1, start1);
  const leftTime = subtractTime(daily, morning);

  stop2Elemnt.value = addTime(start2, leftTime);
}

function subtractTime(minundo , subtrahend) {
  const subtrahendSplit = subtrahend.split(':');
  const left = moment(minundo, "hh:mm").subtract(subtrahendSplit[0], 'hour').subtract(subtrahendSplit[1], 'minutes').toDate();
  return `${normalizeTime(left.getHours())}:${normalizeTime(left.getMinutes())}`;
}

function addTime(value1, value2) {
  const value2Split = value2.split(':');
  const product = moment(value1, "hh:mm").add(value2Split[0], 'hour').add(value2Split[1], 'minutes').toDate();
  return `${normalizeTime(product.getHours())}:${normalizeTime(product.getMinutes())}`;
}

function normalizeTime(time) {
  return `0${time}`.slice(-2);
}