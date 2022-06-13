<script setup>
import helpers from '../assets/js/helpers.js';
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
  modelValue: {
    type: String,
    required: true
  },
  readonly: {
    type: String,
    required: false
  },
  left: {
    type: String,
    required: false
  }
});

defineEmits([
  'update:modelValue'
]);
</script>

<template>
  <div class="input-field col s12 m6">
    <input :id="for" :value="modelValue" type="time" :class="{ validate: !readonly }" @input="$emit('update:modelValue', $event.target.value)" :readonly="readonly">
    <label :id="id" :for="for" :style="left">{{label}}</label>
  </div>
</template>

<style scoped>
</style>
