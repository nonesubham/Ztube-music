<template>
  <div class="audio-player">
    <audio src="" ref="audioPlayer"></audio>
    <div class="player-controls">
      <button @click="togglePlayPause">{{ isPlaying ? "Pause" : "Play" }}</button>
      <button @click="toggleLoop">{{ isLooping ? "Disable Loop" : "Enable Loop" }}</button>
      <button @click="toggleMute">{{ isMuted ? "Unmute" : "Mute" }}</button>
      <button @click="changeShit">change</button>
      <input type="range" v-model="volume" @input="setVolume" max="1" step="0.01" />
    </div>
    <div class="time-display">
      <span>{{audioPlayer ? (audioPlayer.currentTime/60).toFixed(2):0 }}</span> / <span>{{ totalDuration }}</span>
    </div>
    <input type="range" v-model="seekbarValue" @input="seek" :max="audioPlayer ? audioPlayer.duration : 0" step="1" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const audioPlayer = ref(null);
const isPlaying = ref(false);
const isLooping = ref(false);
const seekbarValue = ref(0);
const currentTime = ref("0:00");
const isMuted = ref(false);
const volume = ref(1);
const audioSource = ref('src/assets/sample.mp3')

const totalDuration = ref(0);

const togglePlayPause = () => {
  if (audioPlayer.value) {
    
    isPlaying.value ? audioPlayer.value.pause() : audioPlayer.value.play();
    isPlaying.value = !isPlaying.value;
  }
};

const changeShit = ()=>{
  isPlaying.value=false;
  console.log(isPlaying.value)
  audioPlayer.value.pause()
  audioPlayer.value.src='https://rr5---sn-cvh76nl6.googlevideo.com/videoplayback?expire=1708698888&ei=p1jYZeCYOsLEjuMPh5GRuAE&ip=110.227.202.171&id=o-AB59aawzQxLK3c3XnrNucNO75cKpzZ_cq3uCQA2Yxwoy&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f2EsLTfwrgYzG_2AZAWGB9Rfpno8Sft2vv_CFr3dH0RmQw&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=169.691&lmt=1705551038740166&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgRg0OpsUw6hohmUYzw60yG0WDdGiKieZ_sH2gEme9kdgCIGAQoX1aFhrwRyxcU8P5mD7vyuf0f9zzqnBmgjXL9AxL&host=rr2---sn-ci5gup-cvhd.googlevideo.com&rm=sn-ci5gup-cvhd7l,sn-ci5gup-cvhk76&req_id=4f546335a8f4a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=u0&mm=30&mn=sn-cvh76nl6&ms=nxu&mt=1708677388&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=APTiJQcwRQIhAMsdwWZyTrX2HHhsaJLBkRGLlqigGVQCJpzCVJFz4zooAiATLig5chYwgRCx8EhehGgLze6d1uhpajwK_tbsyDs-vQ%3D%3D'
  isPlaying.value=true;
  console.log(isPlaying.value)
  audioPlayer.value.play();

}

const toggleLoop = () => {
  if (audioPlayer.value) {
    audioPlayer.value.loop = !audioPlayer.value.loop;
    isLooping.value = !isLooping.value;
  }
};

const toggleMute = () => {
  if (audioPlayer.value) {
    audioPlayer.value.muted = !audioPlayer.value.muted;
    isMuted.value = !isMuted.value;
  }
};

const setVolume = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value;
  }
};

const seek = () => {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = seekbarValue.value;
  }
};

const updateSeekbar = () => {
  if (audioPlayer.value) {
    seekbarValue.value = audioPlayer.value.currentTime;
  }
};

const updateTime = () => {
  if (audioPlayer.value) {
    const currentMinutes = Math.floor(audioPlayer.value.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.value.currentTime % 60);
    currentTime.value = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`;
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
/* Your scoped styles here */

</style>
