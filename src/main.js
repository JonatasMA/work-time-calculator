import { reactive, createApp } from "vue";
import helpers from "./assets/js/helpers.js";
import messages from "./assets/js/lang.js";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import App from './App.vue'

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

const i18n = createI18n({
    legacy: false,
    locale: helpers.fetchValue("lang"),
    fallbackLocale: 'en',
    messages
})
const vuetify = createVuetify({
    components,
    directives, 
    theme: {
        defaultTheme: 'dark'
    },
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
            md,
        },
    },
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
})

createApp(App).provide('timeValues', timeValues).use(i18n).use(vuetify).mount('#app')