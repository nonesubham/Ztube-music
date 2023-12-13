<template>
  <div id="player_sec">
  <div id="mus_thmb_cont">
    <!-- <img :src="mus_thmb" :alt="mus_title" id="mus_thmb"> -->
    
</div>
<div id="mus_cont">
<div class="ctr_btn">
    <i-solar-skip-previous-bold class="player_btn"/>
    <i-solar-pause-bold v-if="isPlaying" @click="togglePlayPause" class="player_btn"/>
      <i-fluent-play-28-filled v-else @click="togglePlayPause" class="player_btn"/>
      <i-solar-skip-next-bold class="player_btn"/>
    </div>
      <div class="rgt_btn">
      <i-cil-loop-1 v-if="isLooping" @click="toggleLoop" class="player_btn"/>
      <i-cil-loop v-else @click="toggleLoop" class="player_btn"/>
    </div>
</div>
    
    <!-- play/pause, volumn/mute, next, previous and next -->
    <audio ref="audioPlayer" @timeupdate="updateTime" :src="audioSource" />
    <!-- <div>
      <button @click="togglePlayPause">{{ isPlaying ? "Pause" : "Play" }}</button>
      <button @click="toggleLoop">
        {{ isLooping ? "Disable Loop" : "Enable Loop" }}
      </button>
      <button @click="toggleMute">{{ isMuted ? "Unmute" : "Mute" }}</button>
      <input type="range" v-model="volume" @input="setVolume" max="1" step="0.01" />
    </div> -->

    <div>
      <span>{{ currentTime }}</span> / <span>{{ totalDuration }}</span>
    </div>

    <input
      type="range"
      v-model="seekbarValue"
      @input="seek"
      :max="audioPlayer ? audioPlayer.duration : 0"
      step="1"
    />


        
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


const audioSource = "https://rr2---sn-ci5gup-cvh6.googlevideo.com/videoplayback?expire=1702514563&ei=I_t5ZaKxLO6T9fwPstej-Ak&ip=106.201.241.112&id=o-AHVEdOvFiLQiz0Iltj0YqGNy9Du25mLvFkPp1oC1TXDz&itag=139&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Rm&mm=31%2C26&mn=sn-ci5gup-cvh6%2Csn-h557sns7&ms=au%2Conr&mv=m&mvi=2&pl=23&gcr=in&initcwndbps=1107500&spc=UWF9f5tvfHX7Wdu2ltt0Cc91kpFjuao&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=1100119&ratebypass=yes&dur=180.205&lmt=1662214273723178&mt=1702492397&fvip=4&keepalive=yes&fexp=24007246&c=ANDROID&txp=2318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAOt4MmjXrrdpAN9qoFEImJNKtDErlKUKwTZQ04WqY3IZAiA1ltLZgdOzJp75yXFTxYohi4uz_Ow65OOHXyFgWP_r3g%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AAO5W4owRQIgUnVUn1QyBUfEfsQkoI1e186tsc0WJoBjJ_Vg1Eol2tgCIQD08InnetyhzwllE_OmW0CmTFJ2qyDHa1qofOQfgZKaxA%3D%3D&host=rr2---sn-ci5gup-cvh6.googlevideo.com";

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

#mus_thmb {
  height: 300px;
  width: auto;
  object-fit: none;
}

#mus_cont {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.player_btn{
color: white;
font-size: 20px;

}
.player_btn:hover{
    color: rgba(255, 255, 255, 0.616);
}


</style>