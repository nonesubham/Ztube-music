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
    <audio ref="audioPlayer" @timeupdate="updateTime" :src="audioSource" id="playerElement" />
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