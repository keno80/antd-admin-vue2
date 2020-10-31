<template>
  <div :class="classObj">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <main-content/>
    </div>
  </div>
</template>

<script>
import {Sidebar, MainContent, Navbar} from './components'
import {mapState} from 'vuex'

export default {
  name: "index",
  components: {
    Sidebar,
    MainContent,
    Navbar
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    classObj() {
      return {
        hideSidebar: this.sidebar.opened,
        openSidebar: !this.sidebar.opened
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main-container {
  min-height: 100%;
  margin-left: 256px;
  position: relative;
  transition: margin-left .28s;
}

.sidebar-container {
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.hideSidebar {
  .sidebar-container {
    width: 80px!important;
  }

  .main-container {
    margin-left: 80px!important;
  }
}

.openSidebar {
  .sidebar-container {
    width: 256px !important;
  }
}
</style>