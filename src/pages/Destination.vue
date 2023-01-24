<template>
    <main class="main-body">
        <div class="main-links">
            <h1><span>01</span>PICK YOUR DESTINATION</h1>
            <ul>
                <li @click="changeDestination('moon')">MOON</li>
                <li @click="changeDestination('mars')">MARS</li>
                <li @click="changeDestination('europa')">EUROPA</li>
                <li @click="changeDestination('titan')">TITAN</li>
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
    margin-top: 100px;
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
    margin-top: 9%;
}
.main-links ul li {
    text-decoration: none;
    cursor: pointer;
    font-size: large;
    height: 35px;
    margin-right: 35px;
    color: #d3d3d3;
}
.main-links ul li:hover {
    color: #ffffff;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 2px solid rgba(255, 255, 255, 0.9);
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
}

.destinations div {
    margin-right: 8%;
    margin-top: 2%;
    width: 400px;
    font-weight: 100;
    font-size: 17px;
    color: white;
}

.destinations div span {
    font-size: 110px;
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
