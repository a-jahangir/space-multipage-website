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
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">DESTINATION</a></li>
                    <li><a href="#">CREW</a></li>
                    <li><a href="#">TECHNOLOGY</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    width: 100%;
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
    padding-right: 10%;
}
nav a {
    text-decoration: none;
    color: #ffffff;
    padding: 8px;
    padding-left: 32px;
}

.line {
    position: absolute;
    left: 15%;
    width: 30%;
    border-color: rgba(255, 255, 255, 0.288);
    z-index: 2;
}
</style>
