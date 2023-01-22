<template>
  <MainHeader />
  <Router-view></Router-view>
</template>

<script setup>
import MainHeader from './components/MainHeader.vue'

</script>

<style>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  box-sizing: border-box;
  margin: 0;
}

.main-body {
    display: flex;
    justify-content: space-between;
}

html {
  background-image: url(./assets/home/background-home-desktop.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
