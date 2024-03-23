<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    
  >
    <swiper-slide><img src="https://i.ytimg.com/vi/_gHCz9-V7Bk/hq720.jpg" width='800'></swiper-slide>
    <swiper-slide><img src="https://i.ytimg.com/vi/G1FSocmKCyQ/hq720.jpg" width='800'></swiper-slide>
    <swiper-slide><img src="https://i.ytimg.com/vi/s_SXkcjvekc/hq720.jpg" width='800'></swiper-slide>
    <!-- Add more swiper slides here -->
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'; // Import Swiper styles

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>
