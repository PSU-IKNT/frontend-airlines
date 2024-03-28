<template>
  <section class="my-grid min-h-screen">
    <LayoutSidebar />
    <div class="p-5 my-white-bg">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.my-grid {
  /* display: grid; */
  /* grid-template-columns: 1fr 25fr; */
}
.my-white-bg {
  background: #f8f8f8;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  margin-left: 90px;
}
</style>
