<template>
  <div :class="changebackground()">
    <MainHeader/>
    <Router-view></Router-view>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainHeader from './components/MainHeader.vue'

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
  margin: 0;
}

.homeBackGround {
  height: 100vh;
  background-size: cover;
  background-image: url(../src/assets/home/home.jpg);
}
.destinationBackGround {
  height: 100vh;
  background-size: cover;
  background-image: url(../src/assets/destination/destination.jpg);
}
.crewBackGround {
  height: 100vh;
  background-size: cover;
  background-image: url(../src/assets/crew/crew.jpg);
}
.technologyBackGround {
  height: 100vh;
  background-size: cover;
  background-image: url(../src/assets/technology/technology.jpg);
  }
</style>
