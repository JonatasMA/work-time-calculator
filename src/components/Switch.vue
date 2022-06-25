<script setup>
defineProps({
  id: {
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
  disabled: {
    type: String,
    required: false,
  },
});

defineEmits([
  'update:modelValue'
]);
</script>

<template>
  <div class="switch" style="padding-top: 8px;">
    <label>
      <input type="checkbox" :disabled="disabled" onchange="turnOnNotifications(); storeValue('notification', this.checked);" v-model="modelValue">
      <span class="lever toggle"></span>
      <span :id="id">{{label}}</span>
    </label>
  </div>
</template>

<style scoped>
  .toggle {
    height: 20px !important;
  }

  .toggle::after {
    top: 2px !important;
      left: 2px;
      width: 16px !important;
      height: 16px !important;
  }

  .toggle::before {
    top: 2px !important;
    left: 2px;
    width: 16px !important;
    height: 16px !important;
  }

  .switch {
    display: inline-block;
    white-space: nowrap;
  }

  .switch label .lever:before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    left: 2px;
    top: 2px;
    -webkit-transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
    transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;
    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
  }

  .switch label .lever:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    left: 2px;
    top: 2px;
    -webkit-transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
    transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;
    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
  }
</style>
