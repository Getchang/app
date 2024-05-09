<script setup>
import Header from './view/components/Header'

const fontSizeChange = () => {
  document.body.style.fontSize = document.documentElement.clientWidth / 100 + 'px'
}
onMounted(() => {
  window.addEventListener('resize', fontSizeChange)
})
onUnmounted(() => window.removeEventListener('resize', fontSizeChange))
fontSizeChange()
</script>

<template>
  <Header></Header>
  <router-view />
</template>

<style lang="scss" scoped></style>
