<template>
    <main class="main-body">
        <h1><span>02</span>MEET YOUR CREW</h1>
        <commander v-if="crew == 'commander'"/>
        <missionSpecialist v-else-if="crew == 'missionSpecialist'"/>
        <pilot v-else-if="crew == 'pilot'"/>
        <flightEngineer v-else/>
        <div class="dotList">
            <button class="deactiveButton" :class="{ activeButton : crew=='commander'}" @click="changeCrew('commander')"></button>
            <button class="deactiveButton" :class="{ activeButton : crew=='missionSpecialist'}" @click="changeCrew('missionSpecialist')"></button>
            <button class="deactiveButton" :class="{ activeButton : crew=='pilot'}" @click="changeCrew('pilot')"></button>
            <button class="deactiveButton" :class="{ activeButton : crew=='flightEngineer'}" @click="changeCrew('flightEngineer')"></button>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import commander from '@/components/crews/commander.vue'
import missionSpecialist from '@/components/crews/missionSpecialist.vue'
import pilot from '@/components/crews/pilot.vue'
import flightEngineer from '@/components/crews/flightEngineer.vue'

const crew = ref('commander')

function changeCrew (selected) {
  crew.value = selected
}
</script>

<style scoped>
.main-body {
    display: block;
}

.main-body h1 {
    display: flex;
    color: white;
    font-weight: 100;
    margin-left: 12%;
    margin-top: 100px;
}

.main-body h1 span {
    padding-right: 20px;
    color: gray;
}

.dotList {
    display: flex;
    margin-left: 12%;
    margin-top: 2%;
}

.deactiveButton {
    background-color: rgba(77, 77, 77, 0.514);
    height: 13px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 15px;
}
.deactiveButton:hover {
    background-color: rgb(160, 160, 160)}
.activeButton {
    background-color: rgb(255, 255, 255);
}
.activeButton:hover {
    background-color: rgb(255, 255, 255);
}
</style>

<!-- // style for crews component's -->

<style>
.crews {
    display: flex;
    justify-content: space-between;
}

.crews-text {
    color: white;
    width: 50%;
    margin-left: 12%;
    margin-top: 150px;
    height: 320px;
}

.crews-text p,
h2,
h3 {
    width: 58%;
    font-weight: 100;
}

.crews-text h2 {
    color: rgb(136, 136, 136);
}

.crews-text p {
    font-size: 65px;
    width: 100%;
}

.crew-img img {
    position: absolute;
    bottom: 0;
    right: 5%;
}
</style>
