<script lang='ts' setup>
interface Props {
  visibilityHeight?: number
}

const props = withDefaults(defineProps<Props>(), {
  visibilityHeight: 100,
})

const show = ref(false)
const scrollHandler = () => {
  show.value = window.scrollY > props.visibilityHeight
}
window.addEventListener('scroll', scrollHandler)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div v-if="show" class="flex justify-center items-center fixed bottom-10 right-10 w-10 h-10 rounded-full bg-#f9f9f9 text-2xl shadow-md cursor-pointer" @click="scrollToTop">
    <div i-carbon:up-to-top class="bg-#000" />
  </div>
</template>

<style lang='scss' scoped>
</style>
