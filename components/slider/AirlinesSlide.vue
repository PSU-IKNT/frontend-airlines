<template>
	<div class="content__slide">
		<!-- <div>Подождите, идет загрузка данных</div> -->
		<div class="airlines-info">
			<h1 class="text-4xl mb-5">
				Данные об авикомпании
				{{ apiData.airline_ratings[index].airlineIataCode }}
			</h1>
			<div class="airlines-info__wrapper">
				<div class="airlines-info__column">
					<div class="airlines__block">
						<h2 class="text-2xl mb-3">Таблица с данными</h2>
						<div class="airlines__table table-airlines">
							<div class="table-airlines__row">
								<div class="table-airlines__title">
									Общее количество полётов
								</div>
								<div class="table-airlines__info">
									{{ apiData.airline_ratings[index].totalFlights }}
								</div>
							</div>
							<div class="table-airlines__row">
								<div class="table-airlines__title">
									Количество опозданий по прибытии
								</div>
								<div class="table-airlines__info">
									{{ apiData.airline_ratings[index].offTimeArrivals }}
								</div>
							</div>
							<div class="table-airlines__row">
								<div class="table-airlines__title">
									Количество отправлений не по расписанию
								</div>
								<div class="table-airlines__info">
									{{ apiData.airline_ratings[index].offTimeDepartures }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="airlines-info__column">
					<div class="airlines__block">
						<h2 class="text-2xl mb-3">Рейтинг авиакомпании</h2>
						<div class="airlines__rating text-6xl mb-3">
							{{ roundRating(apiData.airline_ratings[index].midRating) }}%
						</div>
						<div class="rating-sub">
							<div class="rating-sub__text">Рейтинг отправления</div>
							<div class="rating-sub__info">
								{{
									roundRating(apiData.airline_ratings[index].departureRating)
								}}%
							</div>
						</div>
						<div class="rating-sub">
							<div class="rating-sub__text">Рейтинг прибытия</div>
							<div class="rating-sub__info">
								{{ roundRating(apiData.airline_ratings[index].arrivalRating) }}%
							</div>
						</div>
					</div>
					<div class="airlines__block">
						<h2 class="text-2xl mb-3">Диаграммы</h2>
						<div class="chart__wrapper">
							<div
								class="flex flex-col gap-2 justify-center items-center flex-wrap"
							>
								<div>Статистика по отправлениям</div>
								<canvas class="pie-chart" ref="chartCanvas"></canvas>
							</div>
							<div class="flex flex-col gap-2 justify-center items-center">
								<div>Статистика по прибытиям</div>
								<canvas class="pie-chart" ref="chartCanvas2"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	apiData: Object,
	index: Number,
});

const offTimeArrivals =
	props.apiData.airline_ratings[props.index].offTimeArrivals;
const onTimeArrivals =
	props.apiData.airline_ratings[props.index].onTimeArrivals;

const offTimeDepartures =
	props.apiData.airline_ratings[props.index].offTimeDepartures;
const onTimeDepartures =
	props.apiData.airline_ratings[props.index].onTimeDepartures;

import { ref, onMounted, onBeforeUnmount } from "vue";
import Chart from "chart.js/auto";

const chartData = ref({
	labels: [
		"Количество задержек в отправлении ",
		"Количество отправлений вовремя ",
	],
	datasets: [
		{
			label: "Количество",
			data: [offTimeDepartures, onTimeDepartures],
			backgroundColor: ["#92A5EE", "#738DE4"],
		},
	],
});
const chartData2 = ref({
	labels: ["Количество опозданий в прибытии ", "Количество прибытий вовремя "],
	datasets: [
		{
			label: "Количество",
			data: [offTimeArrivals, onTimeArrivals],
			backgroundColor: ["#6d8aed", "#CBD4F7"],
		},
	],
});

const chartCanvas = ref(null);
const chartCanvas2 = ref(null);
let myChart;
let myChart2;

const roundRating = number => {
	number = Math.round(number * 1000) / 1000;
	return number;
};

onMounted(() => {
	myChart = new Chart(chartCanvas.value, {
		type: "pie",
		data: chartData.value,
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	});
	myChart2 = new Chart(chartCanvas2.value, {
		type: "pie",
		data: chartData2.value,
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
		},
	});
});

onBeforeUnmount(() => {
	myChart.destroy();
});
</script>
<style scoped>
.chart__wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 4px;
}

@media (max-width: 900px) {
	.chart__wrapper {
		justify-content: center;
	}
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
	font-size: 20px;
}

.pie-chart {
	width: 250px !important;
	height: 250px !important;
}
.rating-sub__info {
	font-size: 20px;
}

.table-airlines {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.table-airlines__row {
	display: flex;
	font-size: 20px;
	gap: 20px;
}
.table-airlines__info {
	font-weight: 600;
}
</style>
