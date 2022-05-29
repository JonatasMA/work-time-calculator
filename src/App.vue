<script setup>
import InputBox from "./components/InputBox.vue";
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {closeOnClick: false, constrainWidth: false});
  var dropDown = M.Dropdown.getInstance(elems[0]);
  dropDown.recalculateDimensions();
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
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
  <ul id='dropdown1' class='dropdown-content collapsible'>
    <li>
      <div class="switch" style="padding-top: 8px;">
        <label>
          <input type="checkbox" onchange="turnOnNotifications(); storeValue('notification', this.checked);">
          <span class="lever"></span>
          Notifications
        </label>
      </div>
    </li>
    <li>
      <div class="switch" style="padding-top: 8px;">
        <label>
          <input type="checkbox" onchange="toggleDarkMode(checked);">
          <span class="lever"></span>
          Dark mode
        </label>
      </div>
    </li>
    <li class="divider" tabindex="-1"></li>
    <li>
      <div class="collapsible-header" @click="test"><i class="material-icons">language</i>Language</div>
      <div class="collapsible-body">
          <li><a href="#!">English</a></li>
          <li><a href="#!">Português-Brasil</a></li>
          <li><a href="#!">Deutsch</a></li>
          <li><a href="#!">Español</a></li>
          <li><a href="#!">한국어</a></li>
      </div>
    </li>
    
  </ul>
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4 class="title">Settings</h4>
      <div class="row s12" style="align-items: stretch;">
        
        <!-- <div class="col s6"> -->
          
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
