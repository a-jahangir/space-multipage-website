<template>

    <body class="main-body">
        <div class="main-links">
            <h1><span>01</span>PICK YOUR DESTINATION</h1>
            <ul>
                <li>MOON</li>
                <li>MARS</li>
                <li>EUROPA</li>
                <li>TITAN</li>
            </ul>
        </div>
        <div class="destinations">
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
    </body>
</template>

<script setup>
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
