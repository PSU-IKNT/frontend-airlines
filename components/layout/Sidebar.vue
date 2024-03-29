<template>
	<aside class="my-blue-bg flex flex-col items-end py-2 flex-auto menu">
		<div class="menu-wrapper">
			<NuxtLink
				v-for="page in pages"
				@click="selectPage(page)"
				class="self-end min-w-[90%] rounded-l-lg menu-link"
				:to="page.path"
				:style="{
					backgroundColor: page.isClicked ? '#F8F8F8' : 'transparent',
				}"
			>
				<LayoutSidebarItem>
					<font-awesome-icon class="text-white min-h-6" :icon="page.icon" />
				</LayoutSidebarItem>
			</NuxtLink>
		</div>
		<!-- <NuxtLink class="self-end min-w-[90%] rounded-l-lg" to="/firstpage">
      <LayoutSidebarItem />
    </NuxtLink> -->
	</aside>
</template>

<script setup>
// ! Все новые страницы добавлять/изменять здесь
// Поумолчанию всегда активна только первая страница, у остальных isClicked: false
const pages = ref([
	{
		name: "page1",
		path: "/",
		isClicked: false,
		icon: "fa-solid fa-plane-departure",
	},
	{
		name: "page2",
		path: "/data",
		isClicked: false,
		icon: "fa-solid fa-chart-pie",
	},
	{
		name: "page3",
		path: "/table",
		isClicked: false,
		icon: "fa-solid fa-table",
	},
]);

const selectPage = selectedPage => {
	pages.value.forEach(page => {
		page.isClicked = page.path === selectedPage.path;
	});
};

const route = useRoute();

pages.value.forEach(page => {
	if (page.path === route.path) {
		page.isClicked = true;
	} else {
		page.isClicked = false;
	}
});
</script>

<style>
.my-blue-bg {
	background: #5473e8;
}

.router-link-active svg path {
	fill: #5473e8;
}

.router-link-active::after {
	content: "";
	position: absolute;
	top: -3px;
	right: -3px;
	background: #f8f8f8;
	display: block;
	height: 113%;
	width: 6px;
	border-radius: 10px;
}

.menu-wrapper {
	position: relative;
	display: flex;
	flex-direction: column;
	z-index: 10;
}

.menu-bar {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #f8f8f8;
	z-index: 0;
}

/* .menu-link:not(:first-child()),
.menu-link:not(:last-child()) {
  position: relative;
  z-index: 100;
  background-color: #5473e8 !important;
  border-radius: 0px 30px 30px 0px;
} */

.menu-link {
	position: relative;
	background-color: #5473e8 !important;
	border-radius: 20px 0px 0px 20px !important;
}

/* .menu-link:first-child .router-link-active {
  border-radius: 20px 0px 0px 0px;
}

.menu-link:nth-child(2) {
  border-radius: 0px 20px 0px 0px;
}

.menu-link:last-child {
  border-radius: 0px 20px 0px 0px;
}

.router-link-active {
  position: relative;
  border-radius: 20px 0px 20px 10px !important; */
/* } */
.router-link-active {
	background-color: #f8f8f8 !important;
	position: relative;
	width: 100%;
	height: 100%;
}
.router-link-active::before {
	content: "";
	width: 30px;
	height: 30px;
	position: absolute;
	top: -30px;
	right: 0px;
	border-radius: 50%;
	box-shadow: 15px 15px 0 #f8f8f8;
	background-color: #5473e8;
	display: block;
}
.router-link-active::after {
	content: "";
	width: 30px;
	height: 30px;
	position: absolute;
	top: 85px;
	right: 0px;
	border-radius: 50%;
	box-shadow: 15px -15px 0 #f8f8f8;
	background-color: #5473e8;
	display: block;
	z-index: 100;
}
</style>
