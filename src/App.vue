<script setup>
import InputBox from "./components/InputBox.vue";
import Switch from "./components/Switch.vue";
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {closeOnClick: false, constrainWidth: false});
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
    <span class="card-title padding-bottom-16">How much time I need work today?
      <i class="material-icons right dropdown-trigger" data-target='dropdown1'>more_vert</i></span>
    <InputBox />
  </div>
  <ul id='dropdown1' class='dropdown-content collapsible dropdownWidth'>
    <li>
      <Switch label="Notifications"/>
    </li>
    <li>
      <Switch label="Dark mode"/>
    </li>
    <li class="divider" tabindex="-1"></li>
    <li>
      <div class="collapsible-header" @click="test"><i class="material-icons">language</i>Language</div>
      <div class="collapsible-body padding-1rem" style="padding: 1rem !important;">
          <li><a href="#!">English</a></li>
          <li><a href="#!">Português-Brasil</a></li>
          <li><a href="#!">Deutsch</a></li>
          <li><a href="#!">Español</a></li>
          <li><a href="#!">한국어</a></li>
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
