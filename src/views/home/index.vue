<!-- home -->
<template>
  <div>home</div>
  <p>{{ $store.state.count }}</p>
  <p>{{ store.state.count }}</p>
</template>

<script setup lang='ts'>
import { useStore } from '../../store'

const store = useStore()
</script>

<style scoped>
</style>
