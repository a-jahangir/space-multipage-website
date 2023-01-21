<template>
    <header>
        <div class="main-header">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17"
                            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                    </g>
                </svg>
            </div>
            <hr class="line">
            <nav>
                <ul>
                    <li><a href="#">01<span>HOME</span></a></li>
                    <li><a href="#">02<span>DESTINATION</span></a></li>
                    <li><a href="#">03<span>CREW</span></a></li>
                    <li><a href="#">04<span>TECHNOLOGY</span></a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    box-sizing: border-box;
}
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    padding-left: 60px;
    margin-top: 2rem;
}
nav {
    display: flex;
    align-items: center;
    height: 100%;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.048);
    backdrop-filter: blur(30px);
}
nav ul {
    list-style-type: none;
    display: flex;
    padding-left: 12%;
}
nav a {
    text-decoration: none;
    display: flex;
    color: #ffffff;
    padding-right: 50px;
}
nav a span{
    color: #cacaca9d;
    padding-left: 8px;
}
nav a span:hover{
    color: #ffffff;
}
.line {
    position: absolute;
    bottom: 50%;
    left: 12%;
    width: 33%;
    border-color: rgba(255, 255, 255, 0.2);
    z-index: 2;
}
</style>
