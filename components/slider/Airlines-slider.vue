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
    <swiper-slide v-if="data">
      <ArilinesSlide :index="0" :data="data.value" />
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
import axios from "axios";

const data = ref(null);
const error = ref(null);

axios
  .get("http://85.193.81.44:8085/api/v2/overall_rating")
  .then((response) => {
    data.value = response.data;
    console.log(data.value);
    console.log(data.value);
  })
  .catch((err) => {
    error.value = err;
    console.error("Error fetching data:", err);
  });
</script>
<style scoped>
.main-slider__slider {
  max-width: 1100px;
}
</style>
