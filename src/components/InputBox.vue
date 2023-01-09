<script setup>
import {reactive, watch} from 'vue';
import TimeInput from "./TimeInput.vue";
import helpers from "../assets/js/helpers.js";
import { toggleLanguage } from "../assets/js/lang.js";
import { inject } from 'vue'

const timeValues = inject('timeValues');

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
  timeValues.now = helpers.normalizeTime(new Date());
  helpers.subtractTime(timeValues.now, timeValues.end);
}, 1000);

watch(timeValues, () => {
  helpers.setHour(timeValues);
  if (timeValues.left != '' || timeValues.overtime != '') {
    setTimeout(() => {
      toggleLanguage();
    }, 0);
  }
});

function addNewAdditionalHours(){
  timeValues.hours.push({
    start: '',
    end: ''
  });
  setTimeout(() => {
    toggleLanguage();
  }, 0);
}

function removeAdditionalHour(index){
  timeValues.hours.splice(index, 1);
}


</script>

<template>
  <div class="col s12">
    <TimeInput id="dailyHours" for="daily-hours" label="Daily Hours:" v-model="timeValues.daily" left="left: 0px;" />
    <div>
      <div class="card row s12 m6" style="padding: 6px;">
        <div class="col s10 m11" style="padding-left: 0px;">
          <TimeInput id="starting" for="start-input" label="Start:" v-model="timeValues.start"
            style="margin-bottom: 0px;" />
          <TimeInput id="stoping" for="lunch-input" label="Lunch time:" v-model="timeValues.lunch"
            style="margin-bottom: 0px;" />
        </div>
        <div class="col s2 m1">
          <button class="right waves-effect waves-light rounded-button s2 m2" v-on:click="addNewAdditionalHours()"><i
              class="material-icons" style="top: 2px;">add</i></button>
        </div>
      </div>
      <div class="card row s12 m6" v-for="(hour,index) in timeValues.hours" :key="index" style="padding: 6px;">
        <div class="col s10 m11" style="padding-left: 0px;">
          <TimeInput id="starting" for="start-input" label="Start:" v-model="hour.start" style="margin-bottom: 0px;" />
          <TimeInput id="stoping" for="lunch-input" label="Lunch time:" v-model="hour.end"
            style="margin-bottom: 0px;" />
        </div>
        <div class="col s2 m1">
          <button class="right waves-effect waves-light rounded-button" v-on:click="removeAdditionalHour(index)"><i
              class="material-icons" style="top: 2px;">delete</i></button>
        </div>
      </div>
      <div class="row s12 m6">
        <TimeInput id="back" for="back-input" label="Back to work:" v-model="timeValues.back" />
        <TimeInput id="ending" for="stop-input" label="Stop! 🙂:" v-model="timeValues.end" readonly="true" />
      </div>
    </div>
    <TimeInput id="leftHours" for="left-hours" label="Hours left:" left="left: 0px;" v-model="timeValues.left"
      readonly="true" v-if="timeValues.left != ''" />
    <TimeInput id="overtime" for="overtime-input" label="Overtime:" left="left: 0px;" v-model="timeValues.overtime"
      readonly="true" v-if="timeValues.overtime != ''" />
  </div>
</template>

<style scoped>
  .rounded-button {
    color: white;
    background-color: mediumpurple;
    margin: 15px 0px;
    border: none;
    border-radius: 50%;
    font-size: 1.8rem;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 412px) {
    .rounded-button {
      bottom: -66px;
    }
  }
</style>
