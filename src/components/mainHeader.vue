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
                    <li><Router-link to="/">00<span>HOME</span></Router-link></li>
                    <li><Router-link to="/destination">01<span>DESTINATION</span></Router-link></li>
                    <li><Router-link to="/crew">02<span>CREW</span></Router-link></li>
                    <li><Router-link to="/technology">03<span>TECHNOLOGY</span></Router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    padding-left: 60px;
    margin-top: 2rem;
}

.main-header nav {
    display: flex;
    align-items: center;
    height: 100%;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.048);
    backdrop-filter: blur(30px);
}

.main-header nav ul {
    list-style-type: none;
    display: flex;
    position: absolute;
    bottom: 1%;
    padding-left: 12%;
}

.main-header nav a {
    text-decoration: none;
    display: flex;
    height: 50px;
    color: #ffffff;
    margin-right: 50px;
}

.main-header nav a span {
    color: #cacaca9d;
    padding-left: 8px;
}

.main-header nav a span:hover {
    color: #ffffff;
}
.main-header hr {
    position: absolute;
    bottom: 50%;
    left: 12%;
    width: 33%;
    border-color: rgba(255, 255, 255, 0.1);
    z-index: 2;
}
.router-link-active {
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 2px solid rgba(255, 255, 255, 0.9);
}
</style>
