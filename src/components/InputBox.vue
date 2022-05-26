<script setup>
import TimeInput from "./TimeInput.vue";
</script>

<template>
  <div class="col s12">
    <TimeInput id="dailyHours" for="daily-hours" label="Daily Hours:" value="08:00" left="left: 0px;"/>
    <div>
      <div class="row s6">
        <TimeInput id="start" for="start-input"  label="Start:" value="08:00"/>
        <TimeInput id="lunch" for="lunch-input"  label="Lunch time:" value="11:00"/>
      </div>
      <div class="row s6">
        <TimeInput id="back" for="back-input"  label="Back to work:" value="12:00"/>
        <TimeInput id="stop" for="stop-input"  label="Stop! 🙂:"/>
      </div>
    </div>
    <TimeInput id="leftHours" for="left-hours"  label="Hours left:" left="left: 0px;"/>
  </div>
</template>

<style scoped>
</style>
