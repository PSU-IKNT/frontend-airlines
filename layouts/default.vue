<template>
  <section class="my-grid min-h-screen my-blue-bg">
    <LayoutSidebar />
    <div class="my-white-bg">
      <div class="container">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.my-white-bg {
  background: #f8f8f8;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  margin-left: 90px;
}
</style>
