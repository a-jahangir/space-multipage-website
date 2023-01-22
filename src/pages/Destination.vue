<template>
    <body class="main-body">
        <div class="main-links">
            <h1><span>01</span>PICK YOUR DESTINATION</h1>
            <ul>
                <li><a>MOON</a></li>
                <li><a>MARS</a></li>
                <li><a>EUROPA</a></li>
                <li><a>TITAN</a></li>
            </ul>
            <!-- <img src="@/assets/destination/image-moon.png" alt="Moon"> -->
        </div>
        <Router-view></Router-view>
    </body>
</template>

<script setup>

</script>

<style scoped>
.main-links {
    display: flex;
    flex-direction: row;
    position: relative;
    color: white;
    width: 500px;
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
    position: absolute;
    left: 110%;
    top: 80px;
}

ul a {
    text-decoration: none;
    font-size: large;
    height: 30px;
    margin-right: 35px;
    color: #d3d3d3;
}

ul a:hover {
    color: #ffffff;
}
</style>
