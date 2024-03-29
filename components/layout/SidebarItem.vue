<template>
	<button
		class="min-h-12 min-w-[90%] flex items-center justify-center my-button"
	>
    <slot></slot>
	</button>
</template>

<script setup>
</script>

<style scoped>
/* .my-white-bg {
  background: #f8f8f8;
} */
.my-button {
	width: 85px;
	height: 85px;
	border-radius: 500px !important;
}

.router-link-active {
	border-radius: 50% !important;
}
</style>
