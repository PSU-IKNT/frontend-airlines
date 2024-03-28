<template>
  <div class="airlines__slide">
    <div class="airlines-info">
      <div class="airlines-info__wrapper">
        <div class="airlines-info__column">
          <div class="airlines__block">
            <h2 class="text-2xl mb-3">Таблица с данными</h2>
          </div>
        </div>
        <div class="airlines-info__column">
          <div class="airlines__block">
            <h2 class="text-2xl mb-3">Рейтинг авиакомпании</h2>
            <div class="airlines__rating text-6xl mb-3">0.9 / 1</div>
            <div class="rating-sub">
              <div class="rating-sub__text">Рейтинг отправления</div>
              <div class="rating-sub__info">0.4</div>
            </div>
            <div class="rating-sub">
              <div class="rating-sub__text">Рейтинг отправления</div>
              <div class="rating-sub__info">0.4</div>
            </div>
          </div>
          <div class="airlines__block">
            <h2 class="text-2xl mb-3">Диаграмма</h2>
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

.airlines__rating {
  font-weight: 500;
}

.rating-sub {
  display: flex;
  align-items: center;
  gap: 45px;
  font-size: 20px;
}
.rating-sub__text {
}
.rating-sub__info {
}
</style>
