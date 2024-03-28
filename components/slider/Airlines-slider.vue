<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    class="main-slider__slider"
  >
    <swiper-slide>
      <ArilinesSlide />
    </swiper-slide>
    <swiper-slide>
      <ArilinesSlide />
    </swiper-slide>
    <swiper-slide>
      <ArilinesSlide />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
import ArilinesSlide from "./Arilines-slide.vue";
</script>
<style scoped>
.main-slider__slider {
  max-width: 1100px;
}
</style>
