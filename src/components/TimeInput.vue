<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  for: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true
  },
  left: {
    type: String,
    required: false
  }
});
</script>

<template>
  <div class="input-field col s6">
    <input :id="for" :value="value" type="time" class="validate">
    <label :id="id" :for="for" :style="left">{{label}}</label>
  </div>
</template>

<style scoped>
</style>
