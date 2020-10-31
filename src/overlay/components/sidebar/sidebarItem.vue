<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template
        v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <a-menu-item :key="resolvePath(onlyOneChild.path)">
          <a-icon :type="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"/>
          <span>{{ onlyOneChild.meta.title }}</span>
        </a-menu-item>
      </app-link>
    </template>

    <a-sub-menu v-else ref="subMenu" :key="resolvePath(item.path)">
        <span slot="title" v-if="item.meta">
          <a-icon :type="item.meta && item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </span>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child"
                    :base-path="resolvePath(child.path)"/>
    </a-sub-menu>
  </div>
</template>

<script>
import path from 'path'
import {isExternal} from '@/utils/validate'
import AppLink from './Link'

export default {
  name: "sidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  components: {
    AppLink,
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return true
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = {...parent, path: '', noShowingChildren: true}
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    titleClick() {
    }
  }
}
</script>

<style scoped>

</style>