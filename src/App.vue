<script setup>
// #22C1C3 theme color
// #455a5a secondary color of font
import sideplayer from './components/sideplayer.vue'
</script>

<template>
  <div id="main-area">
    <div class="item-1">
      <div class="sec-1-item-1">
      <router-link to="/">  <img src="@/assets/logo.png" alt="" style="width: 95%; padding-bottom: 25px" /></router-link>
        <div id="search-container">
          <i-iconamoon-search-fill id="search-icon" />
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </div>
      <div class="sec-1-item-2">
        <nav>
          <ul class="nav nav-1">
            <span class="m-header">Menu</span>

      <router-link to="/" class="menu-link" active-class="active-menu"><li><i-heroicons-home-solid />&nbsp;&nbsp;&nbsp;Home</li></router-link>
      <router-link to="/player" class="menu-link" active-class="active-menu"><li><i-material-symbols-explore />&nbsp;&nbsp;&nbsp;Explore</li></router-link>
      <router-link to="/about" class="menu-link" active-class="active-menu"><li><i-solar-playlist-bold />&nbsp;&nbsp;&nbsp;Playlists</li></router-link>
      <router-link to="/" class="menu-link" active-class="active-menu"><li><i-iconamoon-music-artist-fill />&nbsp;&nbsp;&nbsp;Artists</li></router-link>
          </ul>

          <ul class="nav nav-2" style="padding-top: 20px;">
            <span class="m-header">Library</span>
            <router-link to="/" class="menu-link" active-class="active-menu">
              <li><i-mingcute-album-fill />&nbsp;&nbsp;&nbsp;Albums</li>
            </router-link>
            <router-link to="/" class="menu-link" active-class="active-menu">
              <li><i-ri-music-fill />&nbsp;&nbsp;&nbsp;Songs</li>
            </router-link>
            <router-link to="/" class="menu-link" active-class="active-menu">
              <li><i-fa-podcast />&nbsp;&nbsp;&nbsp;Podcasts</li>
            </router-link>
            <router-link to="/" class="menu-link" active-class="active-menu">
              <li><i-iconamoon-like-fill />&nbsp;&nbsp;&nbsp;Liked Songs</li>
            </router-link>
          </ul>

          <ul class="nav nav-3" style="padding-top: 20px;">
            <span class="m-header">Other</span>
            <router-link to="/" class="menu-link" active-class="active-menu">
              <li><i-lets-icons-setting-alt-fill />&nbsp;&nbsp;&nbsp;Setting</li>
            </router-link>
            <router-link to="/" class="menu-link" active-class="active-menu">
              <li><i-majesticons-login />&nbsp;&nbsp;&nbsp;Login</li>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>

    <div class="item-2">
    <router-view></router-view>
    </div>
    <div class="item-3">
    <sideplayer/>
    </div>
  </div>
</template>

<style scoped>
#main-area {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}



.item-1 {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  padding: 0px 50px;
  border-right: 1px solid #404141;
  justify-content: center;
}

.item-2 {
  width: 60%;
  justify-content: center;
  align-items: center;
}

.item-3 {
  width: 400px;
  justify-content: center;
  align-items: center;
  padding: 0px 50px 0px 20px;
}

.sec-1-item-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.sec-1-item-2 {
  padding-top: 20px;
  text-align: left !important;
}
#search-container {
  position: relative;
}

#search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #455a5a;
}

#search {
  padding: 10px 30px 10px 40px;
  border-radius: 60px;
  background: none;
  border: 1px solid #455a5a;
  width: 100%;
  color: white;
  font-size: 14px;
}

#search:focus {
  outline: none;
}

#search::placeholder {
  padding-left: 10px;
  font-size: 14px;
}
.m-header {
  color: #e8e8e8;
  font-size: 18px;
}
.menu-link {
  color: #9b9b9b;
  text-decoration: none;
  
}
li{
  display: flex;
  justify-content: flex-start;
  padding-top: 12px;
}
.active-menu{
  color: white;
  font-weight: 500;
  text-decoration: none;
}
li:hover{
  color: white;
  font-weight: 500;
}


</style>
