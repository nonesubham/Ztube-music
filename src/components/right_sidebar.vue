<template>
  <div class="sideplayer-container">
    <div class="sideplayer-flex-container">
      <div class="sideplayer-item sideplayer-item-left">
        <div class="centered-content">
          <i-mingcute-user-4-fill class="user-icon" />
          <span><b style="color: white"> Anonymous</b> <br /><router-link to="/" style="text-decoration: none"><span
                class="my-account-link" id="my_account">My Account</span></router-link></span>
        </div>
      </div>
      <div class="sideplayer-item sideplayer-item-right">
        <router-link to="/" style="text-decoration: none">
          <i-solar-bell-broken width="25" height="25" color="white" id="alert_bell" /></router-link>
      </div>
    </div>

    <!-- Audio Player Start From Here -->
    <div class="player">

      <div class="player__meta">
        <div class="player__song">{{ mus_detail.title }}</div>
        <div class="player__artist">{{ mus_detail.author }}</div>

      </div>
      <div class="player__bg" v-bind:style="{ backgroundImage: `url(${mus_detail.thmb_nail})` }"></div>
      <div class="player__controls">
        <div class="player__progressbar">

          <audio :src="mus_detail.aud_src" ref="audioPlayer"></audio>

          <div id="ctime" class="ctime">{{ currentTime }}</div>


          <input type="range" v-model="seekbarValue" @input="seek" :max="audioPlayer ? audioPlayer.duration : 0" step="1"
            style="flex-grow: 0.8;" />

          <div id="ttime" class="ttime">{{ totalDuration }}</div>
        </div>
        <div class="player__controls-bg" v-bind:style="{ backgroundImage: `url(${mus_detail.thmb_nail})` }"></div>
        <div class="player__prev" @click="prevAudio()">
          <div class="player__icon player__icon-prev icon-prev"><i-line-md-chevron-small-double-left /></div>
        </div>
        <div class="player__play" @click="togglePlayPause">
          <div class="player__icon player__icon-play icon-play" v-if="!isPlaying"><i-line-md-play-filled /></div>
          <div class="player__icon player__icon-play icon-play" v-else><i-line-md-pause /></div>
        </div>

        <div class="player__next" @click="nextAdio()">
          <div class="player__icon player__icon-next icon-next"> <i-line-md-chevron-small-double-right /></div>
        </div>
      </div>
    </div>
    <div class="queue_list">
      <p style="text-align: center; font-size: 20px; font-weight: 800;">Up Next</p>
      <div class="main_lst">
      <div class="queue_card">
        <img class="min_thumb" src="https://inv.in.projectsegfau.lt/vi/5Z9oa3gMX5s/1.jpg" width="50px">
        <div class="related_text">
          <p class="r_name">Song Name</p>
          <p class="r_author">Author</p>
        </div>

      </div>
      <div class="queue_card">
        <img class="min_thumb" src="https://inv.in.projectsegfau.lt/vi/5Z9oa3gMX5s/1.jpg" width="50px">
        <div class="related_text">
          <p class="r_name">Song Name</p>
          <p class="r_author">Author</p>
        </div>

      </div>
      <div class="queue_card">
        <img class="min_thumb" src="https://inv.in.projectsegfau.lt/vi/5Z9oa3gMX5s/1.jpg" width="50px">
        <div class="related_text">
          <p class="r_name">Song Name</p>
          <p class="r_author">Author</p>
        </div>

      </div>
      <div class="queue_card">
        <img class="min_thumb" src="https://inv.in.projectsegfau.lt/vi/5Z9oa3gMX5s/1.jpg" width="50px">
        <div class="related_text">
          <p class="r_name">Song Name</p>
          <p class="r_author">Author</p>
        </div>

      </div>
      <div class="queue_card">
        <img class="min_thumb" src="https://inv.in.projectsegfau.lt/vi/5Z9oa3gMX5s/1.jpg" width="50px">
        <div class="related_text">
          <p class="r_name">Song Name</p>
          <p class="r_author">Author</p>
        </div>

      </div>

    </div>
  </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const audioPlayer = ref(null)
const isPlaying = ref(false);
const seekbarValue = ref(0);
const currentTime = ref("0:00");


const totalDuration = ref(0);
const mus_detail = ref({
  title: "Queenie Eye", author: "Paul McCartney — New", thmb_nail: "https://img.youtube.com/vi/V_jp5_VAzXk/maxresdefault.jpg", aud_src: "src/assets/sample2.mp3"
})
const togglePlayPause = () => {
  console.log(audioPlayer.value.currentTime);
  isPlaying.value ? audioPlayer.value.pause() : audioPlayer.value.play();
  isPlaying.value = !isPlaying.value
    ;
}

function nextAdio() {
  audioPlayer.value.src = 'https://rr5---sn-cvh76nl6.googlevideo.com/videoplayback?expire=1708698888&ei=p1jYZeCYOsLEjuMPh5GRuAE&ip=110.227.202.171&id=o-AB59aawzQxLK3c3XnrNucNO75cKpzZ_cq3uCQA2Yxwoy&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f2EsLTfwrgYzG_2AZAWGB9Rfpno8Sft2vv_CFr3dH0RmQw&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=169.691&lmt=1705551038740166&fexp=24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgRg0OpsUw6hohmUYzw60yG0WDdGiKieZ_sH2gEme9kdgCIGAQoX1aFhrwRyxcU8P5mD7vyuf0f9zzqnBmgjXL9AxL&host=rr2---sn-ci5gup-cvhd.googlevideo.com&rm=sn-ci5gup-cvhd7l,sn-ci5gup-cvhk76&req_id=4f546335a8f4a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=u0&mm=30&mn=sn-cvh76nl6&ms=nxu&mt=1708677388&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=APTiJQcwRQIhAMsdwWZyTrX2HHhsaJLBkRGLlqigGVQCJpzCVJFz4zooAiATLig5chYwgRCx8EhehGgLze6d1uhpajwK_tbsyDs-vQ%3D%3D'
  audioPlayer.value.play()
}

function prevAudio() {
  audioPlayer.value.src = 'src/assets/sample.mp3'
  audioPlayer.value.play()
}

const seek = () => {
  if (audioPlayer.value) {
    audioPlayer.value.currentTime = seekbarValue.value;

  }
};

const updateSeekbar = () => {
  if (audioPlayer.value) {
    seekbarValue.value = audioPlayer.value.currentTime;
    currentTime.value = `${Math.floor(audioPlayer.value.currentTime / 60)}:${Math.floor(audioPlayer.value.currentTime % 60) < 10 ? "0" : ""}${Math.floor(audioPlayer.value.currentTime % 60)}`;
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
    audioPlayer.value.addEventListener("ended", () => {
      nextAdio()
    });
  }
});

onUnmounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.removeEventListener("timeupdate", updateSeekbar);
  }
});

</script>
<style scoped>
.player__progressbar {
  font-weight: 700;
  padding: 0px 10px 0px 10px;
  display: flex;
  justify-content: space-between;

}

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

.queue_card {
  overflow: hidden;
  padding-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.main_lst{
  overflow-y: scroll;
  overflow-x:hidden;
  height: 300px;
}
.related_text {
  flex-grow: 0.9;
}

.r_name {
  font-size: 15px;
  font-weight: 800;
}

.r_author {
  font-size: 12px;
}

.queue_list {

  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.192);
  width: 100%;
  border-radius: 30px;
  padding: 10px;
  
}

.min_thumb {
  border-radius: 10px;
}

.player {
  box-shadow: 0 2px 4px -4px rgba(0, 0, 0, 0.4), 0 50px 45px -20px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  height: 350px;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 30px;
}

.player__meta {
  box-sizing: border-box;
  font-size: 20px;
  padding: 20px 20px;
  position: absolute;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.4);
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #a8a8a815;
  backdrop-filter: blur(2px);
}

.player__artist {
  font-weight: 300;
  font-size: 15px;
}

.player__bg {
  background-position: bottom center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

.player__bg:before,
.player__bg:after {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.player__bg:after {
  background: linear-gradient(to top, #000, #fff);
  opacity: 0.2;
  mix-blend-mode: soft-light;
}

.player__controls {
  background-color: rgba(255, 255, 255, 0.2);
  bottom: 0;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.3);
  height: 80px;
  position: absolute;
  width: 100%;
}

.player__controls:before,
.player__controls:after {
  content: "";
  height: 100%;
  display: block;
  pointer-events: none;
  position: absolute;
  width: 100%;
}

.player__controls:before {
  box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.6);
  mix-blend-mode: soft-light;
}

.player__controls-bg {
  background-position: bottom center;
  background-size: cover;
  height: 100%;
  filter: blur(30px);
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.player__controls-bg:before {
  background: linear-gradient(to top, #000, #fff);
  content: "";
  display: block;
  height: 100%;
  opacity: 0.08;
  mix-blend-mode: soft-light;
  position: absolute;
  width: 100%;
}

.player__play,
.player__prev,
.player__next {
  background: rgba(255, 255, 255, 0.01);
  border-radius: 60px;
  bottom: 0;
  box-shadow: 0 -2px 4px 0 rgba(255, 255, 255, 0.1);
  cursor: pointer;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transition: background 0.15s linear;
}

.player__play .player__icon,
.player__prev .player__icon,
.player__next .player__icon {
  transition: transform 0.05s linear;
}

.player__play:before,
.player__play:after,
.player__prev:before,
.player__prev:after,
.player__next:before,
.player__next:after {
  border-radius: 60px;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.player__play:before,
.player__prev:before,
.player__next:before {
  background: linear-gradient(to top,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.04));
  box-shadow: 0 -1px 1px 0 rgba(255, 255, 255, 0.6);
  mix-blend-mode: overlay;
}

.player__play:after,
.player__prev:after,
.player__next:after {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
  mix-blend-mode: soft-light;
}

.player__play:hover,
.player__prev:hover,
.player__next:hover {
  background: radial-gradient(ellipse at center,
      rgba(12, 11, 23, 0.4) 0%,
      rgba(86, 76, 132, 0.1) 60%,
      rgba(255, 255, 255, 0.2) 100%);
}

.player__play:hover .player__icon,
.player__prev:hover .player__icon,
.player__next:hover .player__icon {
  transform: scale(0.9);
}

.player__play {
  height: 50px;
  width: 50px;
}

.player__prev,
.player__next {
  height: 40px;
  width: 40px;
}

.player__prev {
  right: 120px;
}

.player__next {
  left: 120px;
}

.player__icon {
  bottom: 0;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  height: 1.2em;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 1.4em;
}

.player__icon:before {
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}

.player__icon-play {
  font-size: 30px;
  width: 1.2em;
}

.player__icon-prev,
.player__icon-next {
  width: 1.4em;
}</style>
