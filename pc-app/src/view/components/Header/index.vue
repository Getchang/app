<template>
  <!-- Header -->
  <header id="header" class="flex jc-sa" :class="[currentRoute, scrollClass]">
    <div class="logo">灵启云</div>
    <ul class="nav flex jc-s">
      <li v-for="item in navList" @click="changeNav(item)" :class="item.active && 'active'">{{ item.name }}</li>
    </ul>
  </header>
</template>

<script setup>
const route = useRoute();

const router = useRouter();

const navList = ref([{ name: '首页', active: true, path: 'index' }, { name: '关于我们', active: false, path: 'about' }])

const currentRoute = ref('');

const scrollClass = ref('');

const changeNav = (item) => {
  switchNavbar(item.path)
}

const switchNavbar = (path) => {
  navList.value = navList.value.map((v) => {
    return { ...v, active: v.path === path ? true : false }
  })
  router.push({ path: '/' + path })
}

watch(
  () => route.path,
  (path, prevPath) => {
    const p = path.replace('\/', '');
    currentRoute.value = p;
    switchNavbar(p)
  },
  {
    immediate: true
  }
)
const scrollFn = () => {
  if (document.documentElement.scrollTop > 0) {
    scrollClass.value = 'scrolling'
  } else {
    scrollClass.value = ''
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollFn);
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollFn);
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  #header div.logo {
    margin: 0 8%;
  }
}

#header {
  font-size: 14px;
  font-weight: bold;
  height: 60px;
  background: var(--theme-bule-dark);
  color: var(--font-color01);

  &.about {
    background: rgba(13, 39, 89, 0.5);
  }

  &.scrolling {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
  }

  .logo {
    width: 150px;
    height: 50px;
    margin: 0 15%;
    line-height: 50px;
    font-size: 20px;
    background: url('../../../assets/images/logo.png') no-repeat left;
    background-size: 55.2px 39.5px;
    padding-left: 60px;
  }

  .nav {
    flex: 1;

    li {
      margin: 0 10px;
      cursor: pointer;
      padding: 6px 8px;
      border-bottom: 1px solid transparent;
      transition: color, border-color .3s linear;

      &.active {
        color: var(--theme-orange);
        border-bottom-color: var(--theme-orange);
      }

      &:hover {
        color: var(--theme-orange);
      }
    }
  }
}
</style>