<template>
	<h1 class="text-4xl mb-5">Таблица</h1>
	<div class="bg-white w-full rounded-3xl py-9 px-12">
		<h2 class="text-2xl mb-6 mt-2">Таблица с данными</h2>
		<div class="bg-dark-grey rounded-3xl">
			<div
				class="flex justify-between break-words bg-grey items-center px-6 py-7 rounded-3xl"
			>
				<div class="max-w-28">Компания</div>
				<div class="max-w-28">Номер рейса</div>
				<div class="max-w-28">Место вылета</div>
				<div class="max-w-28">Место посадки</div>
				<div class="max-w-28">Фактическое прибытие</div>
				<div class="max-w-28">Фактические отъезд</div>
				<div class="max-w-28">Планируемое прибытие</div>
				<div class="max-w-28">Планируемый отъезд</div>
			</div>

			<div
				v-for="company in companies"
				class="flex justify-between break-words items-center px-6 py-7"
			>
				<div class="max-w-28">{{ company.airlineIataCode }}</div>
				<div class="max-w-28">{{ company.flight }}</div>
				<div class="max-w-28">{{ company.arrivalAirport }}</div>
				<div class="max-w-28">{{ company.departureAirport }}</div>
				<div class="max-w-28">{{ formatDate(company.factArrival) }}</div>
				<div class="max-w-28">{{ formatDate(company.factDeparture) }}</div>
				<div class="max-w-28">{{ formatDate(company.planArrival) }}</div>
				<div class="max-w-28">{{ formatDate(company.planDeparture) }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from "axios";

const data = ref(null);
const error = ref(null);

const companies = ref([]);

axios
	.get("http://85.193.81.44:8083/api/v1/flights?pageNumber=0&pageSize=10", {
		mode: "no-cors",
	})
	.then(response => {
		data.value = response;
		companies.value = data.value.data;
		// console.log(data.value.data);
	})
	.catch(err => {
		error.value = err;
	});

const formatDate = date => {
	let thisDate = date;
	thisDate = date.replace("T", " ");
	return thisDate;
};
</script>

<style>
.bg-grey {
	background-color: #f5f5f5;
}
.bg-dark-grey {
	background-color: #c2c2c2;
}
</style>
