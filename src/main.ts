import Vue from 'vue'
import App from './App.vue'

let gMyApp = undefined;

document.addEventListener("DOMContentLoaded", () => {
  
  // Inject a private mount point div to display UI...
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = body.innerHTML + "<div id=myApp_mount />";
  
  gMyApp = new Vue( { render: h => h(App), } ).$mount('#myApp_mount')

} );