<script setup>
import helpers from '../assets/js/helpers.js';
const props = defineProps({
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

function getTime() {
    const date = new Date();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes;
}
</script>

<template>
    <div class="input-field col s12 m6">
        <input :id="for" :value="modelValue" type="time" :class="{ validate: !readonly }"
            @input="$emit('update:modelValue', $event.target.value)" :readonly="readonly">
        <label :id="id" :for="for" :style="left">{{label}}</label>
        <i v-if="props.for.includes('input')" @click="modelValue = getTime()" class="material-icons prefix icon-position">update</i>
    </div>
</template>

<style scoped>
.icon-position {
    font-size: 17px;
    top: 0.9rem;
    right: -0.8em;
    background-color: white;
}
</style>
