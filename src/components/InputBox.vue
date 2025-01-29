<script setup>
import { watch } from 'vue';
import helpers from "../assets/js/helpers.js";
import { inject } from 'vue'
import { useLocale } from 'vuetify'
const { t } = useLocale();

const timeValues = inject('timeValues');

timeValues.daily = helpers.fetchValue("daily-hours") || "08:00";
timeValues.hours = JSON.parse(helpers.fetchValue("hours")) || [];
timeValues.start = helpers.fetchValue("start-input") || "08:00";
timeValues.lunch = helpers.fetchValue("lunch-input") || "11:00";
timeValues.back = helpers.fetchValue("back-input") || "13:00";

helpers.setHour(timeValues);

setInterval(() => {
    timeValues.now = helpers.normalizeTime(new Date());
    helpers.subtractTime(timeValues.now, timeValues.end);
}, 1000);

watch(timeValues, () => {
    helpers.setHour(timeValues);
    if (timeValues.left != '' || timeValues.overtime != '') {
    }
});

function addNewAdditionalHours() {
    const time = {
        start: '',
        end: ''
    };

    if (timeValues.hours.length == 0) {
        time.start = timeValues.back;
        time.end = helpers.addTime(timeValues.back, '00:30');
    } else {
        time.start = helpers.addTime(timeValues.hours.at(-1).end, '00:30');
        time.end = helpers.addTime(time.start, '00:30');
    }

    timeValues.hours.push(time);
    timeValues.back = helpers.addTime(time.end, '01:00');

    setTimeout(() => {
        toggleLanguage();
    }, 0);
}

function removeAdditionalHour(index) {
    timeValues.hours.splice(index, 1);
}

function getTime() {
    const date = new Date();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes;
}

</script>

<template>
    <v-container>

        <v-text-field id="dailyHours" :label="t('$vuetify.dailyHours')" v-model="timeValues.daily"
            type="time"></v-text-field>
        <v-card>
            <v-row class="pa-6 d-flex flex-wrap ga-3">
                <v-text-field id="starting" :label="t('$vuetify.starting')" v-model="timeValues.start" type="time"
                    append-inner-icon="md:update" @click:append-inner="timeValues.start = getTime()"></v-text-field>
                <v-text-field id="stoping" :label="t('$vuetify.stoping')" v-model="timeValues.lunch" type="time"
                    append-inner-icon="md:update" @click:append-inner="timeValues.lunch = getTime()"></v-text-field>
                <v-btn icon="$plus" v-on:click="addNewAdditionalHours()"></v-btn>
            </v-row>
        </v-card>
        <v-card v-for="(hour, index) in timeValues.hours" :key="index" class="mt-6">
            <v-row class="pa-6 d-flex flex-wrap ga-3">
                <v-text-field id="starting" :label="t('$vuetify.starting')" v-model="hour.start" type="time"
                    append-inner-icon="md:update" @click:append-inner="hour.start = getTime()"></v-text-field>
                <v-text-field id="stoping" :label="t('$vuetify.stoping')" v-model="hour.end" type="time"
                    append-inner-icon="md:update" @click:append-inner="hour.end = getTime()"></v-text-field>
                <v-btn icon="md:delete" v-on:click="removeAdditionalHour(index)"></v-btn>
            </v-row>
        </v-card>
        <v-row class="ma-0 py-6 ga-3">
            <v-text-field id="back" :label="t('$vuetify.back')" v-model="timeValues.back" type="time"
                append-inner-icon="md:update" @click:append-inner="timeValues.back = getTime()"></v-text-field>
            <v-text-field id="ending" :label="t('$vuetify.ending')" v-model="timeValues.end" readonly
                type="time"></v-text-field>
        </v-row>
        <v-text-field id="leftHours" :label="t('$vuetify.leftHours')" v-model="timeValues.left" type="time"
            v-if="timeValues.left != ''" readonly></v-text-field>
        <v-text-field id="overtime" :label="t('$vuetify.overtime')" v-model="timeValues.overtime" type="time" readonly
            v-else></v-text-field>
    </v-container>
</template>

<style scoped></style>
