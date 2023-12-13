<template>

    <div class="sideplayer-container">
        <div class="sideplayer-flex-container">
            <div class="sideplayer-item sideplayer-item-left">
                <div class="centered-content">
                    <i-mingcute-user-4-fill class="user-icon" />
                    <span><b style="color:white"> Anonymous</b> <br><router-link to="/player" style="text-decoration: none;"><span class="my-account-link" id="my_account">My Account</span></router-link></span>
                </div>
            </div>
            <div class="sideplayer-item sideplayer-item-right">
                <router-link to="/" style="text-decoration: none;">  <i-solar-bell-broken  width="25" height="25" color="white" id="alert_bell" /></router-link>
            </div>
        </div>
        <div class="audio_player">
        <player/>
        </div>
        
    </div>
</template>
  <script setup>
import player from "./player.vue"
</script>
<style scoped>
.sideplayer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.sideplayer-flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

#alert_bell:hover {
    color: #afafaf !important;
}

.sideplayer-item-left {
    text-align: left;
}

.sideplayer-item-right {
    text-align: right;
}

.centered-content {
    display: flex;
    align-items: center;
}

.user-icon {
    font-size: 40px;
    margin-right: 10px;
    color: #afafaf;
}
.my-account-link{
    color: #afafaf;
    font-size: 13px;
}
.my-account-link:hover {
    color: white;
    font-weight: bold;
}

</style>
