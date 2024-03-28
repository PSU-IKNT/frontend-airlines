<template>
  <aside class="my-blue-bg flex flex-col items-end py-2 flex-auto menu">
    <NuxtLink
      v-for="page in pages"
      @click="selectPage(page)"
      class="self-end min-w-[90%] rounded-l-lg"
      :to="page.path"
      :style="{
        backgroundColor: page.isClicked ? '#F8F8F8' : 'transparent',
      }"
    >
      <LayoutSidebarItem />
    </NuxtLink>

    <!-- <NuxtLink class="self-end min-w-[90%] rounded-l-lg" to="/firstpage">
			<LayoutSidebarItem />
		</NuxtLink> -->
  </aside>
</template>

<script setup>
// ! Все новые страницы добавлять/изменять здесь
// Поумолчанию всегда активна только первая страница, у остальных isClicked: false
const pages = ref([
<<<<<<< HEAD
  {
    name: "page1",
    path: "/",
    isClicked: true,
  },
  {
    name: "page2",
    path: "/firstpage",
    isClicked: false,
  },
]);

const selectPage = (page) => {
  if (page.isClicked === true) {
    return;
  } else {
    pages.value.forEach((el) => {
      el.isClicked = false;
    });
    page.isClicked = true;
  }
=======
	{
		name: "page1",
		path: "/",
		isClicked: false,
	},
	{
		name: "page2",
		path: "/firstpage",
		isClicked: false,
	},
]);

const selectPage = selectedPage => {
	pages.value.forEach(page => {
		page.isClicked = page.path === selectedPage.path;
	});
>>>>>>> origin/in-development
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

.router-link-active {
  position: relative;
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

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  height: 100%;
}
</style>
