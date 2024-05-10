<template>
  <!-- container -->
  <div class="root-container">
    <!-- swiper -->
    <swiper></swiper>
    <!-- 介绍 -->
    <section class="introduce">
      <div class="com-title">
        <img src="../assets/images/Integrated_services.png" alt="">
        <h2>灵启云综合服务</h2>
        <p>客户精准营销，可视化数据分析，灵工人员成本结算系统</p>
      </div>
      <div class="indata flex">
        <img src="../assets/images/2.png" alt="">
        <div>
          <img src="../assets/images/data-bg.png" alt="">
          <div class="flex">
            <p class="p1">专业调研机构数据表明</p>
            <p class="p2">企业选择灵活用工方式可实现</p>
            <p class="p3">大幅的提效降本</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import swiper from './main/swiper.vue'
</script>

<style lang="scss" scoped>
.root-container {
  min-height: 100%;

  .introduce {
    margin: 50px 0;
    width: 100%;
    text-align: center;

    .com-title {
      img {
        display: block;
        width: 45.1rem;
        height: 3.2rem;
        margin-top: 1rem;
        object-fit: cover;
        margin: 0 auto;
      }

      h2 {
        font-size: 3rem;
        margin-top: -1.5rem;
      }

      p {
        font-size: .9rem;
        margin: 1rem 0;
      }
    }

    .indata {
      margin: 60px 0;

      img {
        width: 50rem;
        height: 30rem;
      }

      >div {
        position: relative;
        height: 20rem;
        width: 60rem;

        img {
          position: absolute;
          left: -5rem;
          height: 20rem;
          width: 65rem;
          z-index: -1;
        }

        div.flex {
          position: absolute;
          left: -2rem;
          width: 30rem;
          height: 15rem;
          margin-top: 2.5rem;
          color: #fff;
          text-align: left;
          flex-wrap: wrap;
        }

        p {
          width: 90%;
        }

        p.p1 {
          padding: 0 50px 15px 0;
          border-bottom: 2px solid #fff;
          font-size: 2rem;
        }

        p.p2 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 20px;
        }

        p.p3 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-top: 10px;
          color: rgb(255, 233, 184);
        }
      }
    }
  }
}
</style>