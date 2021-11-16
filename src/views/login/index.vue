<!-- login -->
<template>
  <div>登陆</div>
</template>

<script setup lang='ts'>
import { getLoginInfo } from '@/api/common'
import { onMounted, ref } from '@vue/runtime-core'
import { ILoginInfo } from '@/api/types/common'
// import type { ILoginInfo } from '@/api/types/common'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(data => {
    list.value = data.slide
    console.log(list.value)
  })
})
</script>

<style scoped>
</style>
