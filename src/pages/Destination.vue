<template>
    <main class="main-body">
        <div class="main-links">
            <h1><span>01</span>PICK YOUR DESTINATION</h1>
            <ul>
                <li @click="changeDedtination('moon')">MOON</li>
                <li @click="changeDedtination('mars')">MARS</li>
                <li @click="changeDedtination('europa')">EUROPA</li>
                <li @click="changeDedtination('titan')">TITAN</li>
            </ul>
        </div>
        <div v-if="destination === 'moon'" class="destinations">
            <img src="@/assets/destination/image-moon.png" alt="MOON">
            <div>
                <p><span>MOON</span><br><br>See our planet as you've never seen it before.
                    A perfect relaxing trip away to help regain perspective and come back refreshed.
                    While you're there,
                    take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <br>
                <br>
                <hr>
                <br>
                <table>
                    <thead>
                        <tr>
                            <td>AVG. DISTANCE</td>
                            <td>EST. TRAVEL TIME</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>384,400 KM</th>
                            <th>3 DAYS</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else-if="destination === 'mars'" class="destinations">
            <img src="@/assets/destination/image-mars.png" alt="MARS">
            <div>
                <p><span>MARS</span><br><br>Don't forget to pack your hiking boots.
                    You'll need them to tackle Olympus Mons,
                    the tallest planetary mountain in our solar system.
                    It's two and a half times the size of Everest!
                </p>
                <br>
                <br>
                <hr>
                <br>
                <table>
                    <thead>
                        <tr>
                            <td>AVG. DISTANCE</td>
                            <td>EST. TRAVEL TIME</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>225 MIL. km</th>
                            <th>9 months</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else-if="destination === 'europa'" class="destinations">
            <img src="@/assets/destination/image-europa.png" alt="EUROPA">
            <div>
                <p><span>EUROPA</span><br><br>The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover's dream. With an icy surface,
                    it's perfect for a bit of ice skating, curling,
                    hockey, or simple relaxation in your snug wintery cabin.
                </p>
                <br>
                <br>
                <hr>
                <br>
                <table>
                    <thead>
                        <tr>
                            <td>AVG. DISTANCE</td>
                            <td>EST. TRAVEL TIME</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>628 MIL. km</th>
                            <th>3 years</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else class="destinations">
            <img src="@/assets/destination/image-titan.png" alt="TITAN">
            <div>
                <p><span>TITAN</span><br><br>The only moon known to have a dense atmosphere other than Earth,
                    Titan is a home away from home (just a few hundred degrees colder!).
                    As a bonus, you get striking views of the Rings of Saturn.
                </p>
                <br>
                <br>
                <hr>
                <br>
                <table>
                    <thead>
                        <tr>
                            <td>AVG. DISTANCE</td>
                            <td>EST. TRAVEL TIME</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1.6 BIL. km</th>
                            <th>7 years</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'

const destination = ref('moon')

function changeDedtination (selected) {
  destination.value = selected
}
</script>

<style scoped>
.main-body {
    display: block;
}

.destinations {
    display: flex;
    justify-content: space-between;
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

ul {
    list-style-type: none;
    display: flex;
    margin-right: 15%;
    margin-top: 9%;
}

ul li {
    text-decoration: none;
    cursor: pointer;
    font-size: large;
    height: 35px;
    margin-right: 35px;
    color: #d3d3d3;
}

ul li:hover {
    color: #ffffff;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 2px solid rgba(255, 255, 255, 0.9);
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

table {
    width: 100%;
}

td {
    font-size: small;
}

th {
    text-align: left;
    font-size: 25px;
}
</style>
