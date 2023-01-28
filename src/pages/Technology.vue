<template>
    <main class="main-body">
        <h1><span>03</span>SPACE LAUNCH 101</h1>
        <div class="technology">
            <div class="pageButtons">
                <button class="deactiveButton" :class="{ activeButton : technology=='launchVehivle'}" @click="changeTechnology('launchVehivle')">1</button>
                <button class="deactiveButton" :class="{ activeButton : technology=='spacePort'}" @click="changeTechnology('spacePort')">2</button>
                <button class="deactiveButton" :class="{ activeButton : technology=='spaceCapsule'}" @click="changeTechnology('spaceCapsule')">3</button>
            </div>
            <launchVehivle v-if="technology == 'launchVehivle'"/>
            <spacePort v-else-if="technology == 'spacePort'"/>
            <spaceCapsule v-else/>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import launchVehivle from '@/components/technology/launchVehicle.vue'
import spacePort from '@/components/technology/spacePort.vue'
import spaceCapsule from '@/components/technology/spaceCapsule.vue'

const technology = ref('launchVehivle')

function changeTechnology (selected) {
  technology.value = selected
}
</script>

<style scoped>
.main-body {
    display: block;
    padding-bottom: 30px;
}

.main-body h1 {
    display: flex;
    color: white;
    font-weight: 100;
    margin-left: 12%;
    margin-top: 80px;
}

.main-body h1 span {
    padding-right: 20px;
    color: gray;
}

.technology {
    display: flex;
}

.pageButtons {
    display: flex;
    flex-direction: column;
    margin-left: 12%;
    margin-top: 50px;
}

.deactiveButton {
    color: white;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.103);
    font-size: 35px;
    font-weight: 100;
    background-color: rgba(0, 0, 0, 0.123);
    margin-top: 20px;
    border-radius: 50%;
    height: 80px;
    width: 80px;
}

.deactiveButton:hover {
    border: 1px solid rgb(255, 255, 255);
}

.activeButton {
    color: rgb(0, 0, 0);
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.103);
    font-size: 35px;
    font-weight: 100;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
    border-radius: 50%;
    height: 80px;
    width: 80px;
}
</style>

<!-- // style for technology's components -->

<style>
.technology-text {
    color: white;
    margin-left: 5%;
    font-size: 16px;
    margin-top: 85px;
    font-weight: 100;
    width: 50%;
    height: 10px;
}

.technology-text p {
    font-size: 60px;
}

.technology-text h2,
h3 {
    font-size: 17px;
}
.technology-img img{
    height: 65vh;
}
</style>
