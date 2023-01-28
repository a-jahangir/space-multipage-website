<template>
    <main class="main-body">
        <div class="main-links">
            <h1><span>01</span>PICK YOUR DESTINATION</h1>
            <ul>
                <li class="deactiveButton" :class="{ activeButton : destination=='moon'}" @click="changeDestination('moon')">MOON</li>
                <li class="deactiveButton" :class="{ activeButton : destination=='mars'}" @click="changeDestination('mars')">MARS</li>
                <li class="deactiveButton" :class="{ activeButton : destination=='europa'}" @click="changeDestination('europa')">EUROPA</li>
                <li class="deactiveButton" :class="{ activeButton : destination=='titan'}" @click="changeDestination('titan')">TITAN</li>
            </ul>
        </div>
        <moon v-if="destination === 'moon'" />
        <mars v-else-if="destination === 'mars'" />
        <europa v-else-if="destination === 'europa'" />
        <titan v-else />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import moon from '@/components/destinations/moon.vue'
import mars from '@/components/destinations/mars.vue'
import titan from '@/components/destinations/titan.vue'
import europa from '@/components/destinations/europa.vue'

const destination = ref('moon')

function changeDestination (selected) {
  destination.value = selected
}
</script>

<style scoped>
.main-body {
    display: block;
}
.main-links {
    display: flex;
    justify-content: space-between;
    color: white;
    margin-left: 12%;
    margin-top: 80px;
}
.main-links span {
    padding-right: 20px;
    color: gray;
}
.main-links h1 {
    font-weight: 100;
}
.main-links ul {
    list-style-type: none;
    display: flex;
    margin-right: 15%;
    margin-top: 5%;
}
.deactiveButton {
    text-decoration: none;
    cursor: pointer;
    font-size: large;
    height: 35px;
    margin-right: 35px;
    color: #acacac;
}
.deactiveButton:hover {
    color: #ffffff;
    color: rgb(228, 227, 227);
    border-bottom: 2px solid #acacac;
}
.activeButton{
    color: white;
    border-bottom: 2px solid #ffffff;
}
.activeButton:hover{
    color: white;
    border-bottom: 2px solid #ffffff;
}
</style>

<!-- // style for destinations component's -->

<style>
.destinations {
    display: flex;
    justify-content: space-between;
}

.destinations img {
    margin-left: 15%;
    height: 55vh;
}

.destinations div {
    margin-right: 9%;
    width: 400px;
    font-weight: 100;
    font-size: 17px;
    color: white;
}

.destinations div span {
    font-size: 100px;
}

.destinations hr {
    border-color: rgba(255, 255, 255, 0.384);
}

.destinations table {
    width: 100%;
}

.destinations td {
    font-size: small;
}

.destinations th {
    text-align: left;
    font-size: 25px;
}
</style>
