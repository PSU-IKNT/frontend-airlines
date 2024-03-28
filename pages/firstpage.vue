<template>
  <h1 class="text-4xl mb-5">Данные об авикомпании S7</h1>
  <AirlinesSlider />
</template>

<script setup>
import axios from "axios";

import AirlinesSlider from "~/components/slider/Airlines-slider.vue";

const data = ref(null);
const error = ref(null);

axios
  .get("http://85.193.81.44:8083/api/v1/flights?pageNumber=0&pageSize=10", {
    mode: "no-cors",
  })
  .then((response) => {
    // Note: With 'no-cors' mode, you won't be able to access the response data
    data.value = response;
  })
  .catch((err) => {
    error.value = err;
  });
</script>

<style></style>
