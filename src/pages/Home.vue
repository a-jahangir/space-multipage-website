<template>
    <body class="main-body">
        <div class="main-text">
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
            <h3>Let's face it; if you want o go to space, you might as well genuinely go to outer space and not hover
                kind of on the edge of it. Well sit back, and relax because we'll give you truly out of this world
                experiance</h3>
        </div>
        <RouterLink to="/destination" class="explore-button">
            <h1>EXPLORE</h1>
        </RouterLink>
    </body>
</template>

<style scoped>
.main-body {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}
.main-text {
    color: white;
    width: 50%;
    margin-left: 12%;
    margin-top: 10%;
}
.main-text h1 {
    font-size: 170px;
    font-weight: 100;
}
.explore-button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px,
        rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px,
        rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    margin-top: 15%;
    margin-right: 15%;
    width: 250px;
    height: 250px;
    border-radius: 50%;
}

.explore-button:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
</style>
