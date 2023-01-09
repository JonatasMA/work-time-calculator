import { reactive, createApp } from "vue";
import helpers from "./assets/js/helpers.js";
import App from "./App.vue";

const app = createApp(App);

const timeValues = reactive({
    daily: '08:00',
    start: '08:00',
    lunch: '11:00',
    hours: [],
    back: '12:00',
    end: '',
    left: '',
    overtime: '',
    now: helpers.normalizeTime(new Date()),
});
app.provide('timeValues', timeValues);

app.mount("#app");
