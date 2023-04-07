<script lang='ts' setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import logoText from '~/assets/logo_text.png'
const appStore = useAppStore()

const classes = computed(() => {
  if (appStore.siderCollapsed)
    return 'i-carbon-side-panel-open'
  else
    return 'i-carbon-side-panel-close'
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isGreaterMd = breakpoints.greaterOrEqual('md')
const isSmallerMd = breakpoints.smaller('md')

const leftClass = computed(() => {
  if (!appStore.siderCollapsed && unref(isSmallerMd))
    return ['left-55']

  else if (appStore.siderCollapsed && unref(isSmallerMd))
    return ['left-0']

  else if (appStore.siderCollapsed && unref(isGreaterMd))
    return ['left-16']

  else if (!appStore.siderCollapsed && unref(isGreaterMd))
    return ['left-55']

  return []
})

const toggleSiderCollapsed = () => {
  appStore.toggleSiderCollapsed(!appStore.siderCollapsed)
}

const navSentence = ref('')

fetchHitokoto()

async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn')
  const { hitokoto } = await response.json()
  navSentence.value = hitokoto
}
</script>

<template>
  <div :class="leftClass" class="fixed right-0">
    <div class="nav-container flex justify-between items-center w-100% h-18 px-2 bg-#fff z-1">
      <div :class="classes" class="w-7 h-7 text-#888 hover:text-#df4f51 cursor-pointer transition-colors duration-300 ease-in" @click="toggleSiderCollapsed" />
      <div class="flex flex-auto justify-center items-center md:hidden pr-7">
        <img class="w-55" :src="logoText" alt="ai compass">
      </div>
      <p class="hidden md:block text-sm text-#282a2d">
        {{ navSentence }}
      </p>
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
