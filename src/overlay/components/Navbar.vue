<template>
  <div class="nav">
    <div class="btn-container">
      <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <a-icon :type="sidebar.opened ? 'menu-unfold' : 'menu-fold'"/>
      </a-button>
    </div>
    <breadcrumb class="bread"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Breadcrumb from '@/components/Breadcrumb/index'

export default {
  name: "Navbar",
  components: {
    Breadcrumb
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('app/toggleSidebar')
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  height: 50px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);


  .btn-container {
    line-height: 50px;
    float: left;
    height: 100%;
    cursor: pointer;
    padding: 0 30px 0 10px;
  }

  .bread {
    line-height: 50px;
  }
}
</style>