<template>
  <div class="content__slide">
    <h1 class="text-4xl mb-5">Выбор оптимального пути</h1>
    <div class="airlines-info__wrapper">
      <div class="airlines-info__column">
        <div class="airlines__block">
          <h2 class="text-2xl mb-6 mt-2">Выберите путь</h2>
          <div class="airlines-select__wrapper">
            <select name="" id="" class="airlines-select__item">
              <option
                value=""
                class="airlines-select__item"
                v-for="(item, airport) in data?.airline_ratings[0].jsonData"
              >
                {{ airport }}
              </option>
            </select>
            <select name="" id="" class="airlines-select__item">
              <option
                value=""
                class="airlines-select__item"
                v-for="(item, airport) in data?.airline_ratings[0].jsonData"
              >
                {{ airport }}
              </option>
            </select>
          </div>
          <button class="airlines-select__button">Выбрать авиакомпанию</button>
        </div>
      </div>
      <div class="airlines-info__column">
        <div class="airlines__block">
          <h2 class="text-2xl mb-6 mt-2">asda</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const data = ref(null);
const error = ref(null);

axios
  .get("http://85.193.81.44:8085/api/v2/airline_ratings_by_airports")
  .then((response) => {
    data.value = response.data;
    console.log(data.value);
  })
  .catch((err) => {
    error.value = err;
    console.error("Error fetching data:", err);
  });
</script>

<style scoped>
.airlines-select__wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
}

.airlines-select__item {
  padding: 10px 20px;
  font-size: 24px;
  border-radius: 10px;
}

.airlines-select__button {
  padding: 10px 20px;
  background-color: #5473e8;
  border-radius: 10px;
  color: #fff;
  margin-left: 20px;
}
</style>
