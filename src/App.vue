<script setup>
import InputBox from "./components/InputBox.vue";
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
</script>

<template>
  <div class="col s12">
    <div class="s12 padding-bottom-16">
      <h5 id="title" class="title" style="margin-bottom: 0px;">How much time I need work today?</h5>
    </div>
    <InputBox />
  </div>
  <a class="btn-floating btn-large waves-effect waves-light modal-trigger" href="#modal1"><i class="material-icons">settings</i></a>
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4 class="title">Settings</h4>
      <div class="row s12" style="align-items: stretch;">
        <div class="col s6">
          <div class="switch">
            <label>
              <input type="checkbox" onchange="turnOnNotifications(); storeValue('notification', this.checked);">
              <span class="lever"></span>
              Notifications
            </label>
          </div>
          <div class="switch">
            <label>
              <input type="checkbox" onchange="toggleDarkMode(checked);">
              <span class="lever"></span>
              Dark mode
            </label>
          </div>
        </div>
        <!-- <div class="col s6"> -->
          <div class="input-field col s6">
            <select onchange="toggleLanguage()">
              <option value="en" name="lang" >English</option>
              <option value="pt" name="lang" >Português-Brasil</option>
              <option value="de" name="lang" >Deutsch</option>
              <option value="es" name="lang" >Español</option>
              <option value="ko" name="lang" >한국어</option>
            </select>
            <label>Language Select</label>
          </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  width: 35%;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}

@media (max-width: 412px) {
  #app {
    width: 100%;
    height: 100%;
  }
}

.title {
  color: black;
  text-align: center
}

.padding-bottom-16 {
  padding-bottom: 16px;
}

</style>
