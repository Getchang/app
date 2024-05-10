<template>
  <section class="swiper-con">
    <swiper :loop="true" :slidesPerView="1" :spaceBetween="30" :autoplay="{ delay: 2500 }" :navigation="true" :modules
      :pagination @swiper="onSwiper" @realIndexChange="onSlideChange">
      <div class="swiper-bg"></div>
      <div class="swiper-modules">
        <div class="slide-con flex slide-con1" v-if="swiperActiveIdx">
          <p class="liner">专业化</p>
          <p>灵活用工方案</p>
        </div>
        <div class="slide-con flex slide-con2" v-else>
          <p class="liner liner1">专注灵活用工业务</p>
          <p class="">致力于企业端财税数字化、灵工人员成本结算系统的完善,实现大幅的提效降本。</p>
        </div>
      </div>
      <swiper-slide>
        <img src="../../assets/images/bg2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/bg3.png" alt="">
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Pagination, Navigation]

const pagination = {
  clickable: true,
  //修改分页器样式
  bulletClass: 'swiper-pagination-bullet',
  //激活样式
  bulletActiveClass: 'my-bullet-active',
}

const swiperActiveIdx = ref(0);

const onSwiper = (swiper) => {
  console.log('swiper', swiper);
};
const onSlideChange = (swiper) => {
  console.log('slide change', swiper);
  swiperActiveIdx.value = swiper.realIndex;
};
</script>

<style lang="scss" scoped>
.swiper-con {
  width: 100%;
  height: 720px;

  :deep(.swiper) {
    position: relative;
    width: 100%;
    height: 100%;

    .swiper-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(../../assets/images/bg1.png) no-repeat center;
      background-size: 100% 100%;
      opacity: .9;
      z-index: 9;
    }

    .swiper-modules {
      position: absolute;
      top: 80px;
      left: 80px;
      width: calc(100% - 160px);
      height: calc(100% - 160px);
      z-index: 10;

      .slide-con {
        flex-direction: column;
        height: 100%;

        p {
          font-weight: 900;
          color: #fff;
        }

        p.liner {
          font-size: 4.5rem;
          font-weight: 600;
          background: linear-gradient(to right, rgb(255, 223, 157), rgb(255, 238, 201));
          color: transparent;
          background-clip: text;
        }

        &.slide-con1 {
          p {
            margin: 10px 0;
            font-size: 5rem;

          }

          p.liner {
            text-shadow: #000 0px 5px 0;
          }
        }

        &.slide-con2 {
          p {
            margin: 20px 0;
            font-size: 1.5rem;
          }

          p.liner1 {
            font-size: 4.5rem;
            text-shadow: #FC0 1px 0 10px;
          }
        }
      }
    }

    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .swiper-pagination-bullet.my-bullet-active {
      background: var(--theme-orange);
      width: 50px;
      border-radius: 4px;
      opacity: 1;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: #fff;
    }

    .swiper-pagination-bullet {
      background: #fff;
      opacity: .8;
    }
  }

}
</style>