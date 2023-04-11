<script lang='ts' setup>
import Search from './components/Search/index.vue'
import NavList from './components/NavList/index.vue'
import { flatMenuList } from '~/config/menu'

const getSource = () => {
  const source: { name: string; href: string; desc: string }[] = []
  flatMenuList.forEach((item) => {
    if (item.list) {
      item.list.forEach((subItem) => {
        source.push({
          name: subItem.name,
          href: subItem.href,
          desc: subItem.desc,
        })
      })
    }
  })
  return source
}

const source = getSource()
</script>

<template>
  <div class="p-4 pt-18 bg-#f9f9f9">
    <Search :source="source" />
    <NavList v-for="menu in flatMenuList" :key="menu.link" :list="menu.list!" :name="menu.name" :icon="menu.icon" :link="menu.link!" />
    <BackTop :visibility-height="200" />
  </div>
</template>

<style scoped>
li {
  position: relative;
}
</style>
