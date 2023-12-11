<template>
    <!-- <i-lets-icons-bell-pin /> -->
    <div class="sideplayer-container">
        <div class="sideplayer-flex-container">
            <div class="sideplayer-item sideplayer-item-left">
                <div class="centered-content">
                    <i-mingcute-user-4-fill class="user-icon" />
                    <span><b style="color:white !important;"> Anonymous</b> <br><router-link to="/player" style="text-decoration: none;"> <span style="color:#AFAFAF; font-size: 13px;">My Account</span></router-link></span>
                </div>
            </div>
            <div class="sideplayer-item sideplayer-item-right">
                <i-solar-bell-broken  width="25" height="25" color="white" />
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.sideplayer-container {
    display: flex;
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
</style>
  