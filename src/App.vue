<script setup>
import InputBox from "./components/InputBox.vue";
import GitHubBadge from "./components/GitHubBadge.vue";
import dict from "./assets/js/lang.js";
import { storeValue, fetchValue, turnOnNotifications } from "./assets/js/helpers";
import { ref, inject } from 'vue';
import { useTheme } from 'vuetify'
import { useLocale } from 'vuetify'
const { t } = useLocale();
const timeValues = inject('timeValues');

const theme = useTheme();

theme.global.name.value = fetchValue('theme') ?? 'dark'
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    storeValue('theme', theme.global.name.value);
}

var notifications = fetchValue('notification') === 'true';
var drawer = ref(false);
</script>

<template>
    <v-layout>
        <v-app-bar>
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>{{ t('$vuetify.title') }}</v-app-bar-title>
            <v-btn :icon="theme.global.current.value.dark ? 'md:light_mode' : 'md:dark_mode'" variant="text"
                v-bind="props"
                @click="toggleTheme"></v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon="md:translate" variant="text" v-bind="props"></v-btn>
                </template>
                <template v-slot:append>
                    <v-btn icon="md:translate"></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(lang, index) in dict" :key="index" class="pointer">
                        <v-list-item-title @click="($vuetify.locale.current = index) && (storeValue('lang', index))">{{lang.$vuetify.name}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer">
            <v-list-item>
                <v-switch id="notifications" :label="t('$vuetify.notifications')" inset :disabled="false"
                    v-model="notifications" @change="turnOnNotifications(notifications, timeValues)"></v-switch>
            </v-list-item>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <InputBox />
                <div class="box-gh-badge">
                    <GitHubBadge />
                </div>
            </v-container>
        </v-main>
    </v-layout>
</template>

<style>
.box-gh-badge {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.pointer {
  cursor: pointer;
}

</style>
