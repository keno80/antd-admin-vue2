<template>
  <a-menu
      :default-selected-keys="[0]"
      mode="inline"
      @click="handleClick"
      :inlineCollapsed="sidebar.opened"
  >
    <sidebar-item v-for="(route, index) in routes" :key="index" :item="route" :base-path="route.path"/>
  </a-menu>
</template>

<script>
import sidebarItem from "@/overlay/components/sidebar/sidebarItem";
import {mapGetters} from 'vuex'

export default {
  name: "index",
  components: {
    sidebarItem
  },
  data() {
    return {

    };
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    ...mapGetters([
        'sidebar'
    ])
  },
  methods: {
    handleClick(item, key, keyPath) {
    },
  }
}
</script>

<style scoped>

</style>