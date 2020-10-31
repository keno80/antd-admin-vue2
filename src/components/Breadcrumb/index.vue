<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span>{{item.meta.title}}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashBoard(first)) {
        matched = [{path: '/dashboard', meta:{title: 'Dashboard'}}].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashBoard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    }
  }
}
</script>

<style scoped>

</style>