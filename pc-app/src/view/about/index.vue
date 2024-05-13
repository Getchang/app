<template>
  <div class="about">
    <div class="about-bg flex">
      <h1>灵启云</h1>
      <h3>一站式灵活用工服务平台</h3>
      <p>上万家企业，数百万自由用户的共同选择</p>
    </div>
    <div class="com-tab">灵启云简介</div>
    <div class="company">
      <div>
        <p>启灵云总部位于浙江省杭州市余杭区，是一款全面、高效、专业的解决方案，专为现代企业量身打造。启灵云整合了用工管理、税务咨询、申报自动化以及智能数据分析等核心功能，旨在为企业提供一站式的财税管理服务。</p>
        <p>
          通过启灵云，企业可以灵活调度用工资源，实现用工的高效管理；同时，平台拥有专业的财税筹划团队，为企业提供个性化的税务咨询和筹划服务，确保企业合规经营，降低税务风险。此外，平台还具备自动化的税务申报功能，大大减轻了企业的税务申报负担，提高了工作效率。通过深入分析企业的财务数据，平台还能为企业提供税务预测和决策支持，助力企业实现税务优化和可持续发展
        </p>
      </div>
      <img src="../../assets/images/work.png" alt="">
    </div>
    <!-- <div class="com-h">
      <div class="com-tab">我们的资质</div>
    </div> -->
    <div class="honer">
      <!-- <img src="../../assets/images/honer.png" alt=""> -->
    </div>
    <div class="com-tab">合作伙伴</div>
    <div class="combination">
      <img src="../../assets/images/combination.png" alt="">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about {
  .about-bg {
    position: relative;
    top: -60px;
    color: #fff;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background: url(../../assets/images/about_banner.jpg) center;
    background-size: 100% 100%;
    z-index: -1;

    h1 {
      font-size: 3rem;
      font-weight: bolder;
    }

    h3 {
      font-size: 1.6rem;
      margin: 20px 0;
    }
  }

  .com-tab {
    position: relative;
    margin: 60px 0;
    font-size: 2rem;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 35%;
      height: 1px;
      width: 60px;
      background: #3770F8;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 35%;
      height: 1px;
      width: 60px;
      background: #3770F8;
    }
  }

  .com-h {
    width: 100%;
    overflow: hidden;
    height: 9rem;
    margin: 80px 0;
    background: url(../../assets/images/image.png) no-repeat center;
    background-size: 100% 100%;
    color: #fff;
  }

  .company {
    width: 60%;
    max-width: 1000px;
    margin: 50px auto;
    color: var(--theme-orange);

    p {
      text-indent: 20px;
      margin: 10px 0;
    }
  }

  .honer,
  .combination {
    width: 80%;
    max-width: 1200px;
    margin: 50px auto;

    img {
      display: block;
      widows: 100%;
      height: 100%;
    }
  }
}
</style>