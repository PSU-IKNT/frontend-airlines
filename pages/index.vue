<template>
  <div class="content__slide">
    <h1 class="text-4xl mb-5">Выбор оптимального пути</h1>
    <div class="airlines-info__wrapper">
      <div class="airlines-info__column">
        <div class="airlines__block">
          <h2 class="text-2xl mb-6 mt-2">Выберите путь</h2>
          <div class="airlines-select__wrapper custom-select">
            <select v-model="selectedAirports[0]" class="airlines-select__item">
              <option
                v-for="(item, airport) in data?.airline_ratings[0].jsonData"
                :key="airport"
              >
                {{ airport }}
              </option>
            </select>
            <select v-model="selectedAirports[1]" class="airlines-select__item">
              <option
                v-for="(item, airport) in data?.airline_ratings[0].jsonData"
                :key="airport"
              >
                {{ airport }}
              </option>
            </select>
          </div>
          <button
            @click="findRecommendedAirline"
            class="airlines-select__button"
          >
            Показать рекомендованную авиакомпанию
          </button>
        </div>
      </div>
      <div class="airlines-info__column">
        <div class="airlines__block">
          <h2 class="text-2xl mb-6 mt-2">Результаты</h2>
          <div v-if="recommendedAirline">
            <p>
              Рекомендованная авиакомпания: {{ recommendedAirline.airline }}
            </p>
            <p>
              Количество успешных вылетов:
              {{ recommendedAirline.onTimeDepartures }}
            </p>
            <p>
              Количество успешных прилетов:
              {{ recommendedAirline.onTimeArrivals }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";

const data = ref(null);
const error = ref(null);
const selectedAirports = ref([]);
const recommendedAirline = ref(null);

const findRecommendedAirline = async () => {
  const airport0 = selectedAirports.value[0];
  const airport1 = selectedAirports.value[1];

  const airlines0 = data.value.airline_ratings[0].jsonData[airport0];
  const airlines1 = data.value.airline_ratings[0].jsonData[airport1];

  let maxPerformance = 0;
  let recommended = null;

  for (const airline in airlines0) {
    if (airlines1[airline]) {
      const performance =
        airlines0[airline].onTimeDepartures + airlines1[airline].onTimeArrivals;
      if (performance > maxPerformance) {
        maxPerformance = performance;
        recommended = { airline, ...airlines0[airline], ...airlines1[airline] };
      }
    }
  }

  recommendedAirline.value = recommended;
};

axios
  .get("http://85.193.81.44:8085/api/v2/airline_ratings_by_airports")
  .then((response) => {
    data.value = response.data;
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

.custom-select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none;
  background-color: transparent;
  padding-right: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.custom-select::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}

.custom-select select:focus {
  outline: none;
  border-color: #007bff;
}

.custom-select select option:hover {
  background-color: #f2f2f2;
}

.custom-select select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
