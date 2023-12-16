<template>
  <div class="sideplayer-container">
    <div class="sideplayer-flex-container">
      <div class="sideplayer-item sideplayer-item-left">
        <div class="centered-content">
          <i-mingcute-user-4-fill class="user-icon" />
          <span
            ><b style="color: white"> Anonymous</b> <br /><router-link
              to="/"
              style="text-decoration: none"
              ><span class="my-account-link" id="my_account"
                >My Account</span
              ></router-link
            ></span
          >
        </div>
      </div>
      <div class="sideplayer-item sideplayer-item-right">
        <router-link to="/" style="text-decoration: none">
          <i-solar-bell-broken width="25" height="25" color="white" id="alert_bell"
        /></router-link>
      </div>
    </div>
    <!-- Audio Player Start From Here -->
    <div id="mainPlayer">
      <img :src="mus_thmb" :alt="mus_title" id="mus_thmb" />
      <div id="mainCtrl">

      <!-- mute -->
        <div class="ctrlBtn muteBtn">
          <i-solar-repeat-one-minimalistic-bold v-if="isLooping" class="cBtn"/>
          <i-solar-repeat-bold v-else class="cBtn"/>
          <!-- <i-solar-repeat-one-outline /> -->
        </div>
        <!-- previous -->
        <div class="ctrlBtn" id="preBtn">
          <i-line-md-arrow-close-left class="cBtn"/>
          </div>
          <!-- play/pause -->
          <div id="playbtn" class="ctrlBtn">
          <i-line-md-play-filled-to-pause-transition v-if="isPlaying" class="cBtn"/>
        
          <i-line-md-play-filled v-else class="cBtn"/>
          
        </div>
        <!-- next -->
        <div class="ctrlBtn" id="nxtBtn">
          <i-line-md-arrow-close-right class="cBtn"/>
        </div>
        <!-- loop -->
        <div class="ctrlBtn loopBtn">
          <i-solar-volume-cross-bold v-if="isMuted" class="cBtn"/>
          <i-solar-volume-loud-bold-duotone v-else class="cBtn"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
//player config
const audioPlayer = ref(null);
const isPlaying = ref(false);
const isLooping = ref(false);
const seekbarValue = ref(0);
const currentTime = ref("0:00");
const isMuted = ref(false); // Track mute state
const volume = ref(1);

// api config
const mus_title = ref("temp");
const mus_thmb = ref("https://img.youtube.com/vi/V_jp5_VAzXk/maxresdefault.jpg");

const audioSource = "src/assets/sample2.mp3";

const setVolume = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value;
  }
};
const toggleMute = () => {
  if (audioPlayer.value) {
    audioPlayer.value.muted = !audioPlayer.value.muted;
    isMuted.value = !isMuted.value;
  }
};
// Initialize totalDuration as a ref
const totalDuration = ref(0);

const updateSeekbar = () => {
  if (audioPlayer.value) {
    seekbarValue.value = audioPlayer.value.currentTime;
  }
};

const updateTime = () => {
  if (audioPlayer.value) {
    const currentMinutes = Math.floor(audioPlayer.value.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.value.currentTime % 60);
    currentTime.value = `${currentMinutes}:${
      currentSeconds < 10 ? "0" : ""
    }${currentSeconds}`;
  }
};

const togglePlayPause = () => {
  if (audioPlayer.value) {
    isPlaying.value ? audioPlayer.value.pause() : audioPlayer.value.play();
    isPlaying.value = !isPlaying.value;
  }
};

const toggleLoop = () => {
  if (audioPlayer.value) {
    audioPlayer.value.loop = !audioPlayer.value.loop;
    isLooping.value = !isLooping.value;
  }
};

const seek = () => {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = seekbarValue.value;
  }
};

onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.addEventListener("loadedmetadata", () => {
      const minutes = Math.floor(audioPlayer.value.duration / 60);
      const seconds = Math.floor(audioPlayer.value.duration % 60);
      totalDuration.value = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    });

    audioPlayer.value.addEventListener("timeupdate", updateSeekbar);
  }
});

onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.removeEventListener("timeupdate", updateSeekbar);
  }
});
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

.my-account-link {
  color: #afafaf;
  font-size: 13px;
}

.my-account-link:hover {
  color: white;
  font-weight: bold;
}
#mus_thmb {
  height: 350px;
  margin-top: 50px;
}

#mainPlayer {
  position: relative;
  border-width: 2px;
}

#mainCtrl {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 100;
  padding: 20px;
  border-radius: 30px;
  background-color: #3d3d3d88;
  backdrop-filter: blur(5px);
  border-width: 5px !important;
  text-align: center;
  width: 46%;
}


.cBtn:hover{
color: #afafaf;
}
.ctrlBtn {
  font-size: 20px;
  color: white;
}
.loopBtn{
  padding-left: 20px;
}
.muteBtn{
  padding-right: 20px;
}

</style>
