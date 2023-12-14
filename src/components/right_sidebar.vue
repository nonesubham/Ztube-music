<template>

    <div class="sideplayer-container">
        <div class="sideplayer-flex-container">
            <div class="sideplayer-item sideplayer-item-left">
                <div class="centered-content">
                    <i-mingcute-user-4-fill class="user-icon" />
                    <span><b style="color:white"> Anonymous</b> <br><router-link to="/" style="text-decoration: none;"><span class="my-account-link" id="my_account">My Account</span></router-link></span>
                </div>
            </div>
            <div class="sideplayer-item sideplayer-item-right">
                <router-link to="/" style="text-decoration: none;">  <i-solar-bell-broken  width="25" height="25" color="white" id="alert_bell" /></router-link>
            </div>
        </div>
        <!-- Audio Player Start From Here -->
        <div id="main_player">
        <img :src="mus_thmb" id="mus_thmb">
        <div class="flex-row">
      <div class="box-20">
        <i-fluent-speaker-mute-32-filled v-if="isMuted"  class="p-btn"/>
        <i-fluent-speaker-28-filled v-else class="p-btn"/>
      </div>
      <div class="box-60">
 
        <i-fluent-previous-32-filled  class="p-btn"/>
        
      <i-fluent-pause-32-filled v-if="isPlaying"  class="p-btn middle-btn"/>
      <i-fluent-play-32-filled v-else class="p-btn middle-btn"/>
    
      <i-fluent-next-32-filled  class="p-btn"/>
    
      </div>
      <div class="box-20">
        <i-solar-repeat-one-minimalistic-bold v-if="isLooping" class="p-btn"/>
        <i-solar-repeat-linear v-else class="p-btn"/>
      </div>
    </div>
        <h2>Hello</h2>
        </div>
       </div>
</template>
  <script setup>

import { ref, onMounted, onUnmounted} from "vue";
//player config
const audioPlayer = ref(null);
const isPlaying = ref(false);
const isLooping = ref(false);
const seekbarValue = ref(0);
const currentTime = ref("0:00");
const isMuted = ref(false); // Track mute state
const volume = ref(1);

// api config
const mus_title = ref("temp")
const mus_thmb = ref("https://inv.in.projectsegfau.lt/vi/V_jp5_VAzXk/mqdefault.jpg")


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

#main_player {
    text-align: center; /* Center the text horizontally */
}

#main_player img {
    max-width: 100%; 
    border-radius: 30px;
}
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.box-20,
.box-60 {
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
}

.box-20 {
  flex: 20%;

}

.box-60 {
  flex: 60%;

}

.p-btn{
  color: white;
  font-size: 18px;
}

@keyframes scaleUp {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.9);
      }
    }
.p-btn:hover{
  color: rgba(255, 255, 255, 0.705);
  font-size: 18px;
  transition: transform 0.3s ease-in-out;
  animation: scaleUp 0.3s forwards;

}

.middle-btn{
  margin: 0px 20%;
}
</style>
