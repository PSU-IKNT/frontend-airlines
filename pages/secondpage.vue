<template>
	<h1 class="text-4xl mb-5">Таблица</h1>
	<div class="bg-white w-full rounded-3xl py-9 px-12">
		<h2 class="text-2xl mb-6 mt-2">Таблица с данными</h2>
		<div class="bg-dark-grey rounded-3xl">
			<div
				class="flex justify-between break-words bg-grey items-center px-6 py-7 rounded-3xl"
			>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('airlineIataCode')"
				>
					<div class="max-w-28">Компания</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.airlineIataCode"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('flight')"
				>
					<div class="max-w-28">Номер рейса</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.flight"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('arrivalAirport')"
				>
					<div class="max-w-28">Место вылета</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.arrivalAirport"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('departureAirport')"
				>
					<div class="max-w-28">Место посадки</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.departureAirport"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('factArrival')"
				>
					<div class="max-w-28">Фактическое прибытие</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.factArrival"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('factDeparture')"
				>
					<div class="max-w-28">Фактические отъезд</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.factDeparture"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('planArrival')"
				>
					<div class="max-w-28">Планируемое прибытие</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.planArrival"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-center gap-2 cursor-pointer select-none"
					@click="sortByAlphabet('planDeparture')"
				>
					<div class="max-w-28">Планируемый отъезд</div>
					<svg
						width="16"
						height="8"
						viewBox="0 0 16 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							v-if="!sortOptions.planDeparture"
							d="M0 7.50127C0 7.62779 0.0535357 7.75726 0.157458 7.85436C0.365302 8.04855 0.705411 8.04855 0.913256 7.85436L8.0272 1.2078L15.0372 7.75726C15.2451 7.95145 15.5852 7.95145 15.793 7.75726C16.0009 7.56308 16.0009 7.24531 15.793 7.05112L8.4051 0.145642C8.19726 -0.0485473 7.85715 -0.0485473 7.64931 0.145642L0.157458 7.14527C0.0503865 7.24531 0 7.37181 0 7.50127Z"
							fill="black"
						/>
						<path
							v-else
							d="M0 0.49873C0 0.37221 0.0535363 0.24274 0.157458 0.145636C0.365302 -0.0485512 0.705411 -0.0485512 0.913256 0.145636L8.0272 6.7922L15.0372 0.24274C15.2451 0.0485452 15.5852 0.0485452 15.793 0.24274C16.0009 0.436922 16.0009 0.754696 15.793 0.948883L8.4051 7.85436C8.19726 8.04855 7.85715 8.04855 7.64931 7.85436L0.157458 0.854727C0.0503865 0.754692 0 0.62819 0 0.49873Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>

			<div ref="animation">
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
	</div>
</template>

<script setup>
import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/vue";

const [animation] = useAutoAnimate();

const data = ref(null);
const error = ref(null);

const companies = ref([]);
const clonedCompanies = ref([]);
axios
	.get("http://85.193.81.44:8083/api/v1/flights?pageNumber=0&pageSize=10", {
		mode: "no-cors",
	})
	.then(response => {
		data.value = response;
		companies.value = data.value.data;
		clonedCompanies.value = companies.value.slice();
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

const sortByAlphabet = field => {
	if (sortOptions[field] === true) {
		Object.keys(sortOptions).forEach(key => {
			sortOptions[key] = false;
		});
		companies.value = JSON.parse(JSON.stringify(clonedCompanies.value));
		return;
	}
	console.log(companies.value);
	console.log(clonedCompanies.value);
	Object.keys(sortOptions).forEach(key => {
		sortOptions[key] = false;
	});
	sortOptions[field] = true;

	companies.value.sort((a, b) => {
		if (a[field] < b[field]) {
			return -1;
		}
		if (a[field] > b[field]) {
			return 1;
		}
		return 0;
	});
};

const sortOptions = reactive({
	airlineIataCode: false,
	flight: false,
	arrivalAirport: false,
	departureAirport: false,
	factArrival: false,
	factDeparture: false,
	planArrival: false,
	planDeparture: false,
});
</script>

<style>
.bg-grey {
	background-color: #f5f5f5;
}
.bg-dark-grey {
	background-color: #c2c2c2;
}
</style>
