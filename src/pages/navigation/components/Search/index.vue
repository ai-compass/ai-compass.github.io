<script lang='ts' setup>
interface Source {
  name: string
  href: string
  desc: string
}

interface Props {
  source: Source[]
}

const props = defineProps<Props>()

const search = ref('')
const showResult = ref(false)
const result = ref<Source[]>([])

const handleBlur = () => {
  showResult.value = false
}

const handleSearch = () => {
  if (!unref(search)) {
    result.value = []
    showResult.value = false
  }
  if (unref(search)) {
    result.value = props.source.filter((item) => {
      return item.name.includes(search.value) || item.desc.includes(search.value)
    })
    if (result.value.length)
      showResult.value = true
  }
}

const toHref = (href: string) => {
  window.open(href)
}

watch(search, handleSearch)

const classes = computed(() => {
  return unref(showResult) ? 'visible' : 'invisible'
})

const styles = computed(() => {
  if (!showResult.value)
    return 'height: 0px; opacity: 0; transform: scaleY(0);'
  return result.value.length > 2 ? 'height: 192px; opacity: 1; transform: scaleY(1); transform-origin: center top;' : `height: ${result.value.length * 64}px; opacity: 1; transform: scaleY(1); transform-origin: center top;`
})
</script>

<template>
  <div class="search-container pt-20 pb-10 xl:px-60 lg:px-30 md:px-20">
    <form class="relative">
      <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">站内搜索</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <input id="search" v-model="search" type="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off" placeholder="站内搜索" required @change="handleSearch" @focus="handleSearch" @blur="handleBlur">
      </div>
      <div :class="classes" class="autocomplete absolute top-16 left-0 w-full rounded shadow-md z-99">
        <ul class="max-h-48 bg-#fff overflow-y-scroll transition-all duration-100 ease-in-out" :style="styles">
          <li v-for="item in result" :key="item.href" class="h-16 px-4 py-2 hover:bg-#f0f2f4 cursor-pointer" @mousedown="toHref(item.href)">
            <div class="text-base truncate">
              {{ item.name }}
            </div>
            <div class="text-sm text-#6c757d truncate">
              <a :href="item.href" target="_blank">{{ item.desc }}</a>
            </div>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<style scoped>
.autocomplete::after {
  content: '';
  position: absolute;
  top: -10px;
  left: 30px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
</style>
