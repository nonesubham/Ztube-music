<script setup>
// #22C1C3 theme color
// #455a5a secondary color of font
import right_sidebar from './components/right_sidebar.vue'
import search_bar from './components/search_bar.vue'
</script>

<template>
  <div id="main-area">
    <div class="item-1">
      <div class="sec-1-item-1">
      <router-link to="/">  <img src="@/assets/logo.png" alt="" style="width: 95%;" /></router-link>
      </div>
      <div class="sec-1-item-2">
        <nav>
          <ul class="nav nav-1">
            <span class="m-header">Menu</span>

      <router-link to="/" class="menu-link" active-class="active-menu"><li><i-heroicons-home-solid />&nbsp;&nbsp;&nbsp;Home</li></router-link>
      <router-link to="/about" class="menu-link" active-class="active-menu"><li><i-material-symbols-explore />&nbsp;&nbsp;&nbsp;Explore</li></router-link>
      <router-link to="/about" class="menu-link" active-class="active-menu"><li><i-solar-playlist-bold />&nbsp;&nbsp;&nbsp;Playlists</li></router-link>
      <router-link to="/" class="menu-link" active-class="active-menu"><li><i-iconamoon-music-artist-fill />&nbsp;&nbsp;&nbsp;Artists</li></router-link>
          </ul>

          <ul class="nav nav-2" style="padding-top: 25px;">
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

          <ul class="nav nav-3" style="padding-top: 25px;">
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
<search_bar />

    <router-view></router-view>
    </div>
    <div class="item-3">
    <right_sidebar/>
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
  border-right: 2px solid #404141;
  justify-content: center;
}

.item-2 {
  padding-left: 15px;
  width: 60%;
  justify-content: center;
  align-items: center;
}

.item-3 {
  width: 400px;
  justify-content: center;
  align-items: center;
  padding: 0px 50px 0px 20px;
  padding-bottom: 20px;
}

.sec-1-item-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
 
}
.sec-1-item-2 {
  text-align: left !important;
  margin-top:40px;
  margin-bottom: 30px;
}
.m-header {
  color: #e8e8e8;
  font-size: 22px;
}
.menu-link {
  color: white;
  text-decoration: none;
  
}
li{
  display: flex;
  justify-content: flex-start;
  padding-top: 15px;
  font-size: 15px;
}
.active-menu{
  color: #9b9b9b;
  font-weight: 500;
  text-decoration: none;
}
li:hover{
  color: #9b9b9d;
  font-weight: 500;
}


</style>
