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
    <div class="player">
      <div class="player__list">
        <div class="player__icon player__icon-list icon-list"></div>
      </div>
      <div class="player__volume">
        <div class="player__icon player__icon-volume icon-volume"></div>
      </div>
      <div class="player__meta">
        <div class="player__song">Queenie Eye</div>
        <div class="player__artist">Paul McCartney — New</div>
      </div>
      <div
        class="player__bg"
        style="
          background-image: url(https://img.youtube.com/vi/V_jp5_VAzXk/maxresdefault.jpg);
        "
      ></div>
      <div class="player__controls">
        <div
          class="player__controls-bg"
          style="
            background-image: url(https://img.youtube.com/vi/V_jp5_VAzXk/maxresdefault.jpg);
          "
        ></div>
        <div class="player__repeat">
          <div class="player__icon player__icon-repeat icon-repeat"></div>
        </div>
        <div class="player__prev">
          <div class="player__icon player__icon-prev icon-prev"><i-line-md-play-filled /></div>
        </div>
        <div class="player__play">
          <div class="player__icon player__icon-play icon-play"><i-line-md-play-filled /></div>
        </div>
        <div class="player__next">
          <div class="player__icon player__icon-next icon-next"></div>
        </div>
        <div class="player__shuffle">
          <div class="player__icon player__icon-shuffle icon-shuffle"></div>
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
const totalMusicDuration = ref(100);
const currentTime = ref("50");
const isMuted = ref(false); // Track mute state
const volume = ref(1);
const seek_bar = ref(false);
// api config
const mus_title = ref("temp");
const mus_thmb = ref("https://img.youtube.com/vi/V_jp5_VAzXk/maxresdefault.jpg");
const audioSource = "src/assets/sample2.mp3";

const viewseek = (resp) => {
  seek_bar.value = true;
};
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
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.04)
  );
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
  background: radial-gradient(
    ellipse at center,
    rgba(12, 11, 23, 0.4) 0%,
    rgba(86, 76, 132, 0.1) 60%,
    rgba(255, 255, 255, 0.2) 100%
  );
}
.player__play:hover .player__icon,
.player__prev:hover .player__icon,
.player__next:hover .player__icon {
  transform: scale(0.9);
}
.player__play {
  height: 60px;
  width: 60px;
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
  height: 1em;
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
}
.player__repeat {
  left: 0.5em;
  width: 1.4em;
}
.player__shuffle {
  right: 0.5em;
  width: 2em;
}
.player__repeat,
.player__shuffle {
  bottom: 0;
  color: #1a0c1d;
  height: 1.2em;
  font-size: 30px;
  margin: auto;
  position: absolute;
  top: 0;
}
.player__list {
  height: 1.2em;
  font-size: 20px;
  left: 20px;
  position: absolute;
  top: 30px;
  width: 1.4em;
  z-index: 1;
}
.player__volume {
  height: 1.2em;
  font-size: 26px;
  right: 20px;
  position: absolute;
  top: 30px;
  width: 1.4em;
  z-index: 1;
}
</style>
