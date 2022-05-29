<script setup>
import {reactive, watch} from 'vue';
import TimeInput from "./TimeInput.vue";
import helpers from "../assets/js/helpers.js";

const timeValues = reactive({
  daily: '08:00',
  start: '08:00',
  lunch: '11:00',
  back: '12:00',
  end: '',
  left: '',
  now: helpers.normalizeTime(new Date()),
});

timeValues.daily = helpers.fetchValue("daily-hours") || "08:00";
timeValues.start = helpers.fetchValue("start-input") || "08:00";
timeValues.lunch = helpers.fetchValue("lunch-input") || "11:00";
timeValues.back = helpers.fetchValue("back-input") || "13:00";
    // document.getElementById("notification").checked =
        // fetchValue("notification") == "true" ? true : false;
    // setHour();
    // const statusDarkMode = fetchValue("darkmode") == "true" ? true : false;
    // document.getElementById("darkmode").checked = statusDarkMode;
    // toggleDarkMode(statusDarkMode);

helpers.setHour(timeValues);

setInterval(()=>{
  if (timeValues.left != '') {
    timeValues.now = helpers.normalizeTime(new Date());
    helpers.subtractTime(timeValues.now, timeValues.end);
  }
}, 1000);

watch(timeValues, () => {
  helpers.setHour(timeValues);
});

</script>

<template>
  <div class="col s12">
    <TimeInput id="dailyHours" for="daily-hours" label="Daily Hours:" v-model="timeValues.daily" left="left: 0px;"/>
    <div>
      <div class="row s12 m6">
        <TimeInput id="start" for="start-input"  label="Start:" v-model="timeValues.start"/>
        <TimeInput id="lunch" for="lunch-input"  label="Lunch time:" v-model="timeValues.lunch"/>
      </div>
      <div class="row s12 m6">
        <TimeInput id="back" for="back-input"  label="Back to work:" v-model="timeValues.back"/>
        <TimeInput id="stop" for="stop-input"  label="Stop! 🙂:" v-model="timeValues.end" readonly="true"/>
      </div>
    </div>
    <TimeInput id="leftHours" for="left-hours"  label="Hours left:" left="left: 0px;" v-model="timeValues.left" readonly="true" v-if="timeValues.left != ''"/>
  </div>
</template>

<style scoped>
</style>
