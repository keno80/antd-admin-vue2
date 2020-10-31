<template>
  <section class="main-content">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </section>
</template>

<script>
export default {
  name: "MainContent",
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
.main-content {
  min-height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  min-width: 900px;
  padding: 10px;
}
</style>