<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
firebase.initializeApp({
  apiKey: 'AIzaSyApz2_zLpHZUGHNsOM5eHlXfuTC7owykp0',
  authDomain: 'todo-app-455a0.firebaseapp.com',
  projectId: 'todo-app-455a0'
})
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
