<template>
  <a-button type="primary" @click="show">按钮</a-button>
</template>

<script>
export default {
  name: "index",
  methods: {
    show() {
      this.$ShowMessage('error', '错误')
    }
  }
}
</script>

<style scoped>

</style>