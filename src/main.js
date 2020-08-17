import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDh7L-JWN3MVj_BTh2Bciz3lhuRlC56OSc",
  authDomain: "my-todo-c23c9.firebaseapp.com",
  databaseURL: "https://my-todo-c23c9.firebaseio.com",
  projectId: "my-todo-c23c9",
  storageBucket: "my-todo-c23c9.appspot.com",
  messagingSenderId: "543018491643",
};
firebase.initializeApp(config);

new Vue({
  render: h => h(App),
}).$mount('#app')
