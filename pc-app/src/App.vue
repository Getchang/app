<script setup>
import Header from './view/components/Header'
import Footer from './view/components/Footer'

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
  <Footer></Footer>
</template>

<style lang="scss" scoped></style>
