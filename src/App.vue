<template>
  <div class="body-container" :class="changebackground()">
    <mainHeader/>
    <Router-view></Router-view>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import mainHeader from './components/mainHeader.vue'

const route = useRoute()
const pathName = ref('home')

watch(
  () => route.name,
  () => {
    pathName.value = route.name
  }
)

function changebackground () {
  if (pathName.value === 'home') {
    return 'homeBackGround'
  } else if (pathName.value === 'destination') {
    return 'destinationBackGround'
  } else if (pathName.value === 'crew') {
    return 'crewBackGround'
  } else {
    return 'technologyBackGround'
  }
}

</script>
<style>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  box-sizing: border-box;
  transition: all 0.3s linear;
  margin: 0;
}
.body-container{
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  background-size: cover;
  background-position: bottom center;
  overflow-x: hidden;
}

.homeBackGround {
  background-image: url(../src/assets/home/home.jpg);
}
.destinationBackGround {
  background-image: url(../src/assets/destination/destination.jpg);
}
.crewBackGround {
  background-image: url(../src/assets/crew/crew.jpg);
}
.technologyBackGround {
  background-image: url(../src/assets/technology/technology.jpg);
}
</style>
