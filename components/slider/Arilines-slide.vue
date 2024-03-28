<template>
  <div class="airlines__slide">
    <div class="airlines-info">
      <div class="airlines-info__wrapper">
        <div class="airlines-info__column">
          <div class="airlines__block">
            <h2 class="text-2xl">Таблица с данными</h2>
          </div>
        </div>
        <div class="airlines-info__column">
          <div class="airlines__block">
            <h2 class="text-2xl">Рейтинг авиакомпании</h2>
            <div class="airlines__rating">0.9 / 1</div>
          </div>
          <div class="airlines__block">
            <h2 class="text-2xl">Диаграмма</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.airlines__slide {
  padding: 65px 30px;
}
.airlines-info {
}
.airlines-info__wrapper {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 45px;
}
.airlines-info__column {
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  gap: 45px;
  align-self: stretch;
}
.airlines__block {
  height: 100%;
}
</style>
