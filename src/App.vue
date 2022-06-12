<script setup>
import InputBox from "./components/InputBox.vue";
import Switch from "./components/Switch.vue";
import Lang from "./assets/js/lang.js";
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {closeOnClick: false, constrainWidth: false});
  Lang.toggleLanguage('pt');
});

function test() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var dropDown = M.Dropdown.getInstance(elems[0]);
  setTimeout(()=>{
    dropDown.recalculateDimensions();
  }, 200);
}
</script>

<template>
  <div class="card-content black-text">
    <span id="title" class="card-title padding-bottom-16">How much time I need work today?</span>
      <i class="material-icons right dropdown-trigger" data-target='dropdown1'>more_vert</i>
      <InputBox />
  </div>
  <ul id='dropdown1' class='dropdown-content collapsible dropdownWidth'>
    <li>
      <Switch id="notifications" label="Notifications" :disabled="true"/>
    </li>
    <li>
      <Switch id="lbldark" label="Dark mode" :disabled="true"/>
    </li>
    <li class="divider" tabindex="-1"></li>
    <li>
      <div class="collapsible-header" @click="test"><i class="material-icons">language</i><p id="language">Language</p></div>
      <div class="collapsible-body padding-1rem" style="padding: 1rem !important;">
          <li><a href="#!" @click="Lang.toggleLanguage('en')">English</a></li>
          <li><a href="#!" @click="Lang.toggleLanguage('pt')">Português-Brasil</a></li>
          <li><a href="#!" @click="Lang.toggleLanguage('de')">Deutsch</a></li>
          <li><a href="#!" @click="Lang.toggleLanguage('es')">Español</a></li>
          <li><a href="#!" @click="Lang.toggleLanguage('ko')">한국어</a></li>
          <li><a href="#!" @click="Lang.toggleLanguage('ja')">日本語</a></li>
      </div>
    </li>
  </ul>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  width: 45%;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}

@media (max-width: 412px) {
  #app {
    width: 100vw;
    height: 100vh;
  }
}

.title {
  color: black;
  text-align: center
}

.padding-bottom-16 {
  padding-bottom: 16px;
}

.padding-1rem {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
}

.dropdownWidth {
  width: 190px !important;
}

</style>
